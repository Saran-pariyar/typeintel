'use client'

import { useCounterStore } from "./store";
import { useEffect } from "react";

// can access states and methods directly like this too 

const count = useCounterStore.getState().count;
const logCount = () => {
  const count = useCounterStore.getState().count;
  const incre = useCounterStore.getState().increment;

  //we can directly set it too
  useCounterStore.setState({count: 222})
}


export default function Home() {
  
const count = useCounterStore((state) => state.count)
const increment = useCounterStore((state) => state.increment)
const decrement = useCounterStore((state) => state.decrement)
const changeTo999 = useCounterStore((state) => state.changeTo999)

// zustand is async we have to use useEffect to see exact
useEffect(() => {
  
  console.log("count:", count);

}, [count]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Welcome to TypeIntel. Learn by
        <h1>Zustand</h1>
        {count}

        <h2 onClick={increment} >Increment</h2>
        <h2 onClick={decrement} >decrement</h2>
        <h2 onClick={changeTo999} >Change to 999</h2>
        <h2 onClick={logCount} >Log count to console</h2>


      </div>
      
      
    </main>
  );
}
