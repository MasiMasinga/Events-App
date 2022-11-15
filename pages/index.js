import Head from 'next/head'
import EventList from '../components/events/event-list';

// API
import { getFeaturedEvents } from '../helpers/api-utils';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Find all your favourite events that help you evolve." />
      </Head>
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