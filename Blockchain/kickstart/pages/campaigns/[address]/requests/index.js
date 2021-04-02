import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Table } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import Campaign from '../../../../ethereum/campaign';
import RequestRow from '../../../../components/RequestRow';

const Requests = (props) => {
  const { requestCount, requests, address, approversCount } = props;
  const { Header, Row, HeaderCell, Body } = Table;
  const router = useRouter();

  const renderRows = () => {
    return requests.map((request, index) => {
      return (
        <RequestRow
          id={index}
          request={request}
          key={index}
          address={address}
          approversCount={approversCount}
        />
      );
    });
  };

  return (
    <Layout>
      <h3>Requests</h3>
      <Link href={`${router.asPath}/new`}>
        <a>
          <Button primary>Add Request</Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{renderRows()}</Body>
      </Table>
      <div>Found {requestCount} requests.</div>
    </Layout>
  );
};

Requests.getInitialProps = async ({ query }) => {
  const { address } = query;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const approversCount = await campaign.methods.approversCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  return { address, requests, requestCount, approversCount };
};

export default Requests;
