// Importing React library
import React from 'react'

// Importing useSelector and useDispatch hooks from react-redux for interacting with the Redux store
import { useSelector, useDispatch } from 'react-redux'

// Importing increment and decrement actions from the CounterSlicer
import { decrement, increment } from './CounterSlicer'

// Functional component named 'App'
export default function App() {
  // Accessing the 'value' property from the 'counter' slice in the Redux store
  const count = useSelector((state) => state.counter.value)

  // Creating a dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch()
  return (
    <div>
  
      <center>

        {/* Displaying a welcome message */}
        <h1>Welcome To React Redux</h1>
        <hr />

        {/* Displaying the current count value from the Redux store */}
        <h3>{count}</h3>

        {/* Button for incrementing the count value by dispatching the increment action */}
        <button onClick={() => dispatch(increment())}>Add</button>

        {/* Button for decrementing the count value by dispatching the decrement action */}
        <button onClick={() => dispatch(decrement())}>Sub</button>

      </center>
    </div>
  )
}
