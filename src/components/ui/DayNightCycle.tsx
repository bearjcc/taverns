import React from 'react';
import styles from './DayNightCycle.module.css';

const DayNightCycle: React.FC = () => {
  return (
    <div className={styles.dayNightCanvas}>
      <div className={styles.cloud}></div>
      <div className={`${styles.cloud} ${styles.cloudA}`}></div>
      <div className={`${styles.cloud} ${styles.cloudB}`}></div>
      <div className={`${styles.cloud} ${styles.cloudC}`}></div>
      <div className={styles.land}>
        <div className={styles.tree}></div>
        <div className={`${styles.tree} ${styles.treeA}`}></div>
        <div className={`${styles.tree} ${styles.treeB}`}></div>
        <div className={`${styles.tree} ${styles.treeC}`}></div>
        <div className={`${styles.tree} ${styles.treeD}`}></div>
      </div>
      <div className={styles.star}></div>
      <div className={`${styles.star} ${styles.starA}`}></div>
      <div className={`${styles.star} ${styles.starB}`}></div>
      <div className={`${styles.star} ${styles.starC}`}></div>
      <div className={`${styles.star} ${styles.starD}`}></div>
      <div className={styles.wind}></div>
      <div className={styles.swirlyWind}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.swirlyWind} ${styles.swirlyWindA}`}></div>
      <div className={`${styles.swirlyWind} ${styles.swirlyWindB}`}></div>
      <div className={styles.eclipse}>
        <div className={styles.sun}></div>
        <div className={styles.moon}></div>
      </div>
    </div>
  );
};

export default DayNightCycle; 