import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

const ContributeForm = (props) => {
  const { address } = props;
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(address);
    setLoading(true);
    setError('');
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether'),
      });
      router.replace(router.asPath);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
    setValue('');
  };

  return (
    <Form onSubmit={onSubmit} error={!!error}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          value={value}
          label='ether'
          onChange={(event) => setValue(event.target.value)}
          labelPosition='right'
        />
      </Form.Field>
      <Message error header='Oops!' content={error} />
      <Button primary loading={loading}>
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
