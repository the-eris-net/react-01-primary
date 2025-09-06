import React from 'react';

// function App() {

//   return (
//     <form className="login-form">
//       <h2>로그인</h2>
//       <div>
//         <label htmlFor="username">아이디</label>
//         <input
//           id="username"
//           type="text"
//           placeholder="아이디를 입력하세요"
//         />
//       </div>

//       <div>
//         <label htmlFor="password">비밀번호</label>
//         <input
//           id="password"
//           type="password"
//           placeholder="비밀번호를 입력하세요"
//         />
//       </div>

//       <button type="submit">로그인</button>
//     </form>
//   );
// }

// function App() {

//   const myClick = () => {
//     console.log("행복하세요!");
//   };

//   return (
//     <div>
//       버튼을 눌러주세요 : <button onClick={myClick}>클릭</button>
//     </div>
//   );
// }

// function App() {
//   const value = 10;

//   return (
//     <div>
//       <input type="text" value="20" readOnly/>
//       <input type="text" value={value} readOnly/>
//     </div>
//   );
// }

// function App() {
//   const style = {
//     color: 'skyblue',
//     fontSize: '20px',
//     width: '100%',
//     height: 200,
//     backgroundColor: 'black',
//   };

//   return (
//     <ol style={style}>
//       <li>한국</li>
//       <li>미국</li>
//       <li>일본</li>
//     </ol>
//   );
// }

// function App() {
//   const prop = {
//     id: "content",
//     className: "my-content",
//     style: {
//       color: 'skyblue',
//       fontSize: '20px',
//       width: '100%',
//       height: 200,
//       backgroundColor: 'black'
//     }
//   };

//   return (
//     <ol {...prop}>
//       <li>한국</li>
//       <li>미국</li>
//       <li>일본</li>
//     </ol>
//   );
// }

function App() {
  const prop = {
    id: 'content',
    className: 'my-content',
    style: {
      color: 'skyblue',
      fontSize: '20px',
      width: '100%',
      height: 200,
      backgroundColor: 'black',
    },
  };

  return (
    <ol id="no-content" {...prop} className="your-content">
      <li>한국</li>
      <li>미국</li>
      <li>일본</li>
    </ol>
  );
}

export default App;
