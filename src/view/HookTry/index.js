import UseStateDemo from './useStateDemo';
import UseEffectDemo from './useEffectDemo';
import UseContextDemo from './useContextDemo';
import UseMemoDemo from './useMemoDemo';
import { Button, Alert } from 'antd';

export default function HookTry() {
  return (
    <div>
      <Alert message="123" />
      <Button type="primary">Welcome</Button>
      <h1>介紹 Hooks ----- </h1>
      <UseStateDemo />
      <UseEffectDemo />
      <UseContextDemo />
      <UseMemoDemo />
    </div>
  );
}
