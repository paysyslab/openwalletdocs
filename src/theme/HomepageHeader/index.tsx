import React from 'react';
import styles from './styles.module.css';

export default function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>OpenWallet</h1>
        <p className={styles.heroSubtitle}>Digital Banking Made Simple</p>
      </div>
    </header>
  );
}
