import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';




const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.wrapper}>
            <Link to="/"><div className={styles.logo}><h1>KPIBoard</h1></div>
              
            </Link>
        </div>
    </div>
  )
}

export default Navbar