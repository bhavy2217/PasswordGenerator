import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// useCallback
// --------------------
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// const cachedFn = useCallback(fn, dependencies)

// Example: 
// import { useCallback } from 'react';
// export default function ProductPage({ productId, referrer, theme }) {
//   const handleSubmit = useCallback((orderDetails) => {
//     post('/product/' + productId + '/buy', {
//       referrer,
//       orderDetails,
//     });
//   }, [productId, referrer]);



// ================================================================
// useEffect
// --------------
// useEffect is a React Hook that lets you synchronize a component with an external system.

// useEffect(setup, dependencies?)