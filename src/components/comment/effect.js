// import React, { useState, useEffect } from "react";
// import { Block } from "../block";

// export const Counter = () => {
//   const [state, setStste] = useState(false);

//   const click = () => {
//     setStste(!state);
//   };

//   useEffect(() => {
//     console.log('update')
//   }, [state])

//   return (
//     <div style={{ paddind: 50 }}>
//       <h1>App</h1>
//       <button onClick={click}>Click</button>
//       {state && <Block />}
//     </div>
//   );
// };


// ***********************************************************************

// import React, { useEffect, useState } from "react";

// export const Counter = () => {
//   const [type, setType] = useState();
//   const [data, setData] = useState([]);
//   const [pos, setPos] = useState('position',() => {});

//   // useEffect(() => {
//   //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//   //     .then((response) => response.json())
//   //     .then((json) => setData(json));
//   // }, [type]);

//   const mouse = (e) => {
//     setPos({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }

//   useEffect(() => {
//     window.addEventListener("mousemove", mouse);

//     return () => {
//       window.removeEventListener('mousemove', mouse);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Recource: {type}</h1>

//       <button onClick={() => setType("users")}>Users</button>
//       <button onClick={() => setType("todos")}>Todos</button>
//       <button onClick={() => setType("posts")}>Posts</button>

//       {/* <div>{JSON.stringify(data)}</div> */}
//       <p>{JSON.stringify(pos)}</p>
//     </div>
//   );
// };