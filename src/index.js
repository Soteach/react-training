// import React from 'react';
import ReactDom from 'react-dom';
import paintings from './paintings.json';

// const elem1 = React.createElement('span', { children: 'Hi' });
// const elem2 = React.createElement('span', { children: 'world' });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hi world!',
// });
// ReactDom.render(element, document.querySelector('#root'));

// ===============================
// const elem1 = <span>HI</span>;
// const elem2 = <span>world</span>;

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);
// =================================================================================
// Робота з розміткою
// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const data = paintings[0];
// const data2 = paintings[1];

// const painting1 = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор:
//       <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Ціна: {data.price} кредитів</p>
//     <p>Доступність:закінчується, або є в наявності</p>
//     <button type="button">Додати в кошик</button>
//   </div>
// );

// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>
//       Автор:
//       <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Ціна: {data2.price} кредитів</p>
//     <p>Доступність:закінчується, або є в наявності</p>
//     <button type="button">Додати в кошик</button>
//   </div>
// );

// const elems = (
//   <div>
//     {painting1}
//     {painting2}
//   </div>
// );

// ReactDom.render(elems, document.querySelector('#root'));

// ===================================================================================================
// За допомогою функції
// function Painting(props) {
//   console.log(props);
//   return (
//     <div>
//       <img src={props.url} alt={props.title} width="480" />
//       <h2>{props.title}</h2>
//       <p>
//         Автор:
//         <a href={props.profileUrl}>{props.authorName}</a>
//       </p>
//       <p>Ціна: {props.price} кредитів</p>
//       <p>Доступність:закінчується, або є в наявності</p>
//       <button type="button">Додати в кошик</button>
//     </div>
//   );
// }

// const painting = paintings[2];

// ReactDom.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector('#root')
// );

// ===================================================================================================

// З деструктуризацією
// function Painting(props) {
//   const { url, title, profileUrl, author, price } = props;
//   console.log(props);
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор:
//         <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Ціна: {price} кредитів</p>
//       <p>Доступність:закінчується, або є в наявності</p>
//       <button type="button">Додати в кошик</button>
//     </div>
//   );
// }

// const painting = paintings[2];

// ReactDom.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     author={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector('#root')
// );

// ===================================================================================================
// З використанням App.js
import App from './components/App';

ReactDom.render(<App />, document.querySelector('#root'));

// ===================================================================================================
// Розмітка по замовчуванню що створюється при запуску комади npm init react-app з Create React App
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
