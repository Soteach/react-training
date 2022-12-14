import React from 'react';
import ReactDom from 'react-dom';

const elem1 = React.createElement('span', { children: 'Hi' });
const elem2 = React.createElement('span', { children: 'world' });

const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: [elem1, ' ', elem2],
});

console.log(element);
ReactDom.render(element, document.querySelector('#root'));
// ===================================================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
