// Importing React and ReactDOM from the necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the root CSS file and the main App component
import './index.css';
import App from './App';

// Importing the Redux store created using configureStore
import { store } from './store';

// Importing the Provider component from react-redux
import { Provider } from 'react-redux';

// Creating a root using ReactDOM.createRoot and specifying the root element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped with the Provider component
root.render(
  // Using the Provider component to make the Redux store available to the entire App
  <Provider store={store}>
    {/* Rendering the main App component */}
    <App />
  </Provider>,
);
