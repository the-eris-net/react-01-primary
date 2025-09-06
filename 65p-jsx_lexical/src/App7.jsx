// function App() {
//   const items = ['콜라', '사이다', '환타'];

//   return (
//     <ol>
//       {items}
//     </ol>
//   );
// }

// function App() {
//   const items = ['콜라', '사이다', '환타'];

//   const itemList = [];

//   for (let i = 0; i < items.length; i++) {
//     itemList.push(<li key={i}>{items[i]}</li>);
//   }

//   return (
//     <ol>
//       {itemList}
//     </ol>
//   );
// }

// function App() {
//   const items = ['콜라', '사이다', '환타'];

//   const itemList = items.map((item, index) => {
//     return <li key={index}>{item}</li>;
//   });

//   return (
//     <ol>
//       {itemList}
//     </ol>
//   );
// }

function App() {
  const items = ['콜라', '사이다', '환타'];

  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

export default App;
