import React from 'react'
import styles from "../styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.topBarWrapper}>
        <div className={styles.topLeft}>
          <span className={styles.logo}>Lion ToDo</span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topBarIconContainer}>a</div>
          <div className={styles.topBarIconContainer}>b</div>
          <div className={styles.topBarIconContainer}>c</div>
        </div>
      </div>
    </div>
  );
}
