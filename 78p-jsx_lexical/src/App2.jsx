const hello = <div>Hello, World</div>;

const Goodbye = () => {
  return <div>Goodbye, World</div>;
};

const ohaio = () => <div>おはよう、世界</div>;

function App() {
  console.log(Goodbye());

  return (
    <div>
      {hello}
      <Goodbye />
      {Goodbye()}
      {ohaio()}
    </div>
  );
}

export default App;
