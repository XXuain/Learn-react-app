import React from 'react';
import { Button, Alert, message, Divider } from 'antd';

function About() {
  const success = () => {
    message.success('This is a success message');
  };
  return (
    <>
      <Alert message="123" />
      <Divider />
      <Button type="primary">About</Button>
      <Button onClick={success}>Success</Button>
    </>
  );
}

export default About;
