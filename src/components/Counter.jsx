import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    function increment() {
        setCount(count + incrementBy)
    }
    function decrement() {
        setCount(count - incrementBy)
    }
    function increaseIncrement() {
        setIncrementBy(incrementBy + 1)
    }
    function decreaseIncrement() {
        setIncrementBy(incrementBy - 1)
    }
    return (
        <div><h4>Count value is:{count}</h4>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h4>We are incrementing by: {incrementBy}</h4>
        <button onClick={increaseIncrement}>Increase increment</button>
        <button onClick={decreaseIncrement}>Decrease increment</button>
        </div>
    )
}