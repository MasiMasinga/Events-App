import React, { Fragment } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

// Components
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

// API
import { getAllEvents } from './../../helpers/api-utils';

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find all your favourite events that help you evolve." />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events
    },
    revalidate: 60
  };
}

export default AllEventsPage