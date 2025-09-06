import React from "react";

const hello = <h1>Hello, World</h1>;

function Test() {
  return <div></div>
}

function App() {
  console.log(hello.constructor);
  console.log(typeof Test);
  const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello, World"
);
console.log(element);
  return <>{hello}{hello}</>;
}

export default App;
