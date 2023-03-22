import { useExample } from "@modules/example";

function ExampleView() {
  const { hi, setHi, fetchAndSetHi } = useExample();

  return (
    <div>
      <h1>{hi}</h1>
      <button onClick={() => fetchAndSetHi()}>Set Hi!</button>
      <button onClick={() => setHi(undefined)}>Reset Hi</button>
    </div>
  );
}

export default ExampleView;
