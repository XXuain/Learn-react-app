import UseStateDemo from './useStateDemo';
import UseEffectDemo from './useEffectDemo';
import UseContextDemo from './useContextDemo';
import UseMemoDemo from './useMemoDemo';

export default function HookTry() {
  return (
    <div>
      <h1>介紹 Hooks ----- </h1>
      <UseStateDemo />
      <UseEffectDemo />
      <UseContextDemo />
      <UseMemoDemo />
    </div>
  );
}
