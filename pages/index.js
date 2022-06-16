import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/SwipeableTextMobileStepper';
import Listing from '../components/Listing';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [listing, setListing] = useState(null);
  useEffect(() => {
    fetch('listings.json')
      .then((response) => response.json())
      .then((data) => setListing(data));
    // console.log(listing);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Spathios - Adrian Rogers</title>
        <meta name="description" content="Code challenge for Spathios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      {listing && <Listing listing={listing} />}

      <footer className={styles.footer}>
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
          {'Adrian'}
        </a>
      </footer>
    </div>
  );
}
