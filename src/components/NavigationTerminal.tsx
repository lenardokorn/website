import { onCleanup, createSignal } from 'solid-js';

const NavigationTerminal = () => {
  const [count, setCount] = createSignal(0);
  const interval = setInterval(() => setCount((count) => count + 1), 1000);
  onCleanup(() => clearInterval(interval));
  return <div>Hello from SolidJS: {count()}</div>;
};

export default NavigationTerminal;
