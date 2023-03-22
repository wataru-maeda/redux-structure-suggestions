import { useExample } from "@modules/example";

function ExampleView() {
  const { useSelector, setHi, updateAndStoreHi } = useExample();
  const { hi } = useSelector();

  return (
    <div>
      <h1>{hi}</h1>
      <button onClick={() => updateAndStoreHi("HELLO!")}>Set Hi!</button>
      <button onClick={() => setHi(undefined)}>Reset Hi</button>
    </div>
  );
}

export default ExampleView;
