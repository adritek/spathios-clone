import React from 'react';
import styles from '../styles/Home.module.css';
import BasicModal from './BasicModal';

export default function Listing(props) {
  return (
    <main>
      <div className={styles.leftDesc}>
        <h1>{props.listing.listingName}</h1>
        <p>{props.listing.listingDescription}</p>
      </div>
      <div className={styles.rightDesc}>
        <BasicModal />
        <p>
          €{props.listing.pricePerHour}/<span className={styles.perHour}>per hour</span>
        </p>
      </div>
    </main>
  );
}
