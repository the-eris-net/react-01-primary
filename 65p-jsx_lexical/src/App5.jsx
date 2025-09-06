// function App() {
//   const a = 10;
//   const b = 5;

//   return <div>Hello, {a + b}!</div>;
// }

// function App() {
//   const name = "React";

//   return <div>Hello, {name}!</div>;
// }

// function App() {
//   const a = 95;

//   return <div>결과 : {(()=>{
//     if(a > 80) {
//       return '합격';
//     } else {
//       return '불합격';
//     }
//   })()}!</div>;
// }

function App() {
  const a = 95;
  let result = '';

  if (a > 80) {
    result = '합격';
  } else {
    result = '불합격';
  }

  return <div>결과 : {result}!</div>;
}

export default App;
