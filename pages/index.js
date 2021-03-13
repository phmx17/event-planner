import { getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return <div>
    <h1>home page</h1>
    <EventList items={featuredEvents} />

  </div>  
}
export default HomePage;
