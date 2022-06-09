// import React, { useState, useEffect } from "react";

// const foo = () => {
//   let i = 0;
//   console.log(10)
//   while (i < 100000000) {
//     i++;
//   }
//   return i;
// }

// export const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("black");
//   const [user, setUser] = useState({
//     name: "",
//     lastName: "",
//   });
//   const [state, setState] = useState(() => foo());

//   const changeColor = (e) => {
//     setColor(e.target.value);
//   };

//   const changeUser = (e) => {
//     const {
//       target: { value, name },
//     } = e;
//     setUser((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };


//   console.log(user);

//   return (
//     <div style={{ paddind: 50 }}>
//       <div>
//         <h1 style={{ color }}>{count}</h1>
//         <button
//           style={{ color }}
//           onClick={() => {
//             setCount(count - 1);
//           }}
//         >
//           -
//         </button>
//         <button
//           style={{ color }}
//           onClick={() => {
//             setCount(count + 1);
//           }}
//         >
//           +
//         </button>
//         <input type="color" onChange={changeColor}></input>
//       </div>
//       <div>
//         <input type="text" name="name" onChange={changeUser}></input>
//         <input type="text" name="lastName" onChange={changeUser}></input>
//       </div>
//     </div>
//   );
// };



