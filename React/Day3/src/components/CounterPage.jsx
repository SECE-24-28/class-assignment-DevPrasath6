import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterPage() {
    //   const [count, setCount] = useState(0)

    const [count, increment, decrement, reset] = useCounter(0, 1, 1);
    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

        </div>
    )
}

export default CounterPage
