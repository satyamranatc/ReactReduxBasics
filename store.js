// Importing the `configureStore` function from the Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Importing the reducer created using the CounterSlicer from another file
import CounterSlicer from './CounterSlicer'

// Creating the Redux store using the configureStore function
export const store = configureStore({
  // Configuring the reducer for the store
  reducer: {
    // Assigning the CounterSlicer reducer to the 'counter' slice in the store
    counter: CounterSlicer,
  },
})
