import React, { useState } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

const CampaignNew = () => {
  const [minimumContribution, setMinimumContribution] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(minimumContribution).send({
        from: accounts[0],
      });
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h3>Create a Campaign</h3>
      <Form error={!!error} onSubmit={onSubmit}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            value={minimumContribution}
            onChange={(event) => setMinimumContribution(event.target.value)}
            label='wei'
            labelPosition='right'
          />
        </Form.Field>

        <Message error header='Oops!' content={error} />
        <Button loading={loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
};

export default CampaignNew;
