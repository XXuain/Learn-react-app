import React from 'react';
import { Button, Alert } from 'antd';

export default function useCallbackDemo() {
  return (
    <div>
      useCallbackDemo
      <Alert message="123" />
      <Button type="primary">Welcome</Button>
    </div>
  );
}
