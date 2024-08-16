import { create } from "zustand";

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
    changeTo999: () => void;

}
// we created a custom hook
// we can use 'set' arg to increment/decrement the state
export const useCounterStore = create<CounterStore>( (set) => ({
    count:0,
    increment: ()=>{
        set((state)=> ({count: state.count + 1}))
    },
    decrement: ()=>{
        set((state)=> ({count: state.count - 1}))
    },
    changeTo999: ()=>{
        set({count: 999})
    }

}))