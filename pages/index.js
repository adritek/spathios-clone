import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/SwipeableTextMobileStepper';
import BasicModal from '../components/BasicModal';
import Cost from '../components/Cost';
import Listing from '../components/Listing';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spathios - Adrian Rogers</title>
        <meta name="description" content="Code challenge for Spathios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />

      <main>
        <div className="leftDesc">
          <h1>listing name</h1>
          <p>description</p>
        </div>
        <div className="rightDesc">
          <Button />
          <p>Cost</p>
        </div>
      </main>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Piso Modernista con Amplios Espacios</a>
        </h1>
        <div className={styles.description}>
          <Listing />
          <div className={styles.booking}>
            <Cost />
            <BasicModal />
          </div>
        </div>
      </main> */}

      <footer className={styles.footer}>
        <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
          {'Adrian'}
        </a>
      </footer>
    </div>
  );
}
