// import { Container } from './App.styled';
import Counter from '../Counter';
import Dropdown from '../Dropdown';
import ColorPicker from '../ColorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

function App() {
  return (
    <>
      <Counter initialValue={10} />
      <Dropdown />
      <ColorPicker options={colorPickerOptions} />
      {/* <Container></Container> */}
    </>
  );
}

export default App;
