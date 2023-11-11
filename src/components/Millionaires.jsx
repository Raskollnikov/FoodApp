// import { useState, useEffect } from "react";
// // import UserContext from "../Utilities/UserContext";
// const useCounter = (a) => {
//   const [count, setCount] = useState(a);
//   const increment = () => setCount((count) => count + 1);
//   const decrement = () => setCount((count) => count - 1);
//   return { count, increment, decrement };
// };

// const Child = () => {
//   const { count, increment, decrement } = useCounter(100);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => increment()}>increase</button>
//       <button onClick={() => decrement()}>decrement</button>
//     </div>
//   );
// };
// const useData = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState({ error: false, meeage: "" });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const resp = await fetch(url);
//         const toJson = await resp.json();
//         setData(toJson);
//         setLoading(false);
//       } catch (e) {
//         setError({ error: true, meeage: e.message });
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//   return { error, loading, data };
// };

function Millionaires() {
  // const { error, loading, data } = useData(
  //   "https://jsonplaceholder.typicode.com/users"
  // );
  // const { count, increment, decrement } = useCounter(0);
  // if (error.error) {
  //   return <h1 className="">Something {error.meeage}</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  // return (
  //   <div>
  //     {data.map((each) => {
  //       return (
  //         <div key={each.id}>
  //           <h1>{each.name}</h1>
  //         </div>
  //       );
  //     })}
  //     {/*  */}
  //     <br />
  //     <p>{count}</p>
  //     <button onClick={() => increment()}>increase</button>
  //     <button onClick={() => decrement()}>decrement</button>
  //     <br />
  //     <p>another one</p>
  //     <Child />
  //   </div>
  // );
}

export default Millionaires;
