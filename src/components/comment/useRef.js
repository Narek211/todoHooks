// import React, { useEffect, useState, useRef } from "react";

// // let count = 0;

// export const Counter = () => {

//   // const [count, setCount] = useState(1);
//   const [value, setValue] = useState('initial');
//   const count = useRef(0);
//   const inputRef = useRef(null);
//   const prev = useRef('')

//   useEffect(() => {
//     // setCount(count => count + 1);
//     count.current++;
//     console.log(inputRef.current.value)
//   });

//   useEffect(() => {
//     prev.current = value
//   }, [value])

//   const focus = () => {
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <h1>{count.current}</h1>
//       <h1>{prev.current}</h1>
//       <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
//       <button className="btn" onClick={focus}>focus</button>
//     </div>
//   )
// }