'use client'

import { useCounterStore } from "./store";


export default function Home() {
const count = useCounterStore((state) => state.count)
const increment = useCounterStore((state) => state.increment)
const decrement = useCounterStore((state) => state.decrement)
const changeTo999 = useCounterStore((state) => state.changeTo999)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Welcome to TypeIntel. Learn by
        <h1>Zustand</h1>
        {count}

        <h2 onClick={increment} >Increment</h2>
        <h2 onClick={decrement} >decrement</h2>
        <h2 onClick={changeTo999} >Change to 999</h2>

      </div>
      
      
    </main>
  );
}
