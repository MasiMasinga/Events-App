import EventList from '../components/events/event-list';

// Dummy Data
import { getFeaturedEvents } from '../dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <EventList items={featuredEvents} />
    </div >
  )
}
