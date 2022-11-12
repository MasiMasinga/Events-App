import EventList from '../components/events/event-list';

// API
import { getFeaturedEvents } from '../helpers/api-utils';

export default function Home(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div >
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  };
}