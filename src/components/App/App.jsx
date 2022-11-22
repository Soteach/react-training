import PageTitle from '../PageTitle/PageTitle';
import EventBoard from '../EventBoard/EventBoard';
import upcomingEvents from '../../upcoming-events.json';
import Counter from '../Hooks/HookCounter';
import { Container } from './App.styled';

function App() {
  return (
    <>
      <Container>
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={upcomingEvents} />
        <Counter />
      </Container>
    </>
  );
}

export default App;
