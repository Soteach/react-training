import PageTitle from './PageTitle/PageTitle';
import EventBoard from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';
import Event from './Event/Event';

function App() {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}

export default App;
