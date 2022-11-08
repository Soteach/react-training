// import Painting from './Painting';
// import paintings from '../paintings.json';

// ====================================================================
// Початок роботи з рендером
// export default function App() {
//   return (
//     <div>
//       <Painting
//         imageUrl={paintings[0].url}
//         title={paintings[0].title}
//         author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//       />

//       <Painting
//         imageUrl={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//       />

//       <Painting
//         imageUrl={paintings[2].url}
//         title={paintings[2].title}
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//       />
//     </div>
//   );
// }
// ==================================================================
// робота з логічним і та тернарним оператором
// export default function App() {
//   const isOnline = true;
//   return (
//     <div>
//       {/* {isOnline && 'Онлайн'}
//       {isOnline ? 'Онлайн' : 'Офлайн'} */}
//       <Painting
//         imageUrl={paintings[0].url}
//         title={paintings[0].title}
//         author={paintings[0].author.tag}
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />

//       <Painting
//         imageUrl={paintings[1].url}
//         title={paintings[1].title}
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />

//       <Painting
//         imageUrl={paintings[2].url}
//         title={paintings[2].title}
//         author={paintings[2].author.tag}
//         profileUrl={paintings[2].author.url}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity}
//       />
//     </div>
//   );
// }

// ========================================================================================
// Динамічний рендер колекції в реакт
// import PaintingList from './PaintingList';
// import paintings from '../paintings.json';
// export default function App() {
//   return (
//     <div>
//       {/* {[1, 2, 3, 4, 5].map(el => (
//         <div>{el}</div>
//       ))} */}

//       <div>
//         <PaintingList items={paintings} />
//       </div>
//     </div>
//   );
// }

// ============================================================
// Робота з компонентом секцією

import PaintingList from './PaintingList';
import Section from './Section';
import paintings from '../paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Топ тижня">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Найкраще">
        <PaintingList items={paintings} />.
      </Section>
    </div>
  );
}
