import React from 'react'

import Image from 'next/image'

// Styles
import classes from '../../styles/event-item.module.css';

// Components
import Button from '../ui/button';

// Icons
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

const EventItem = (props) => {

  const { id, title, image, date, location } = props;

  const humanReadableData = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableData}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default EventItem