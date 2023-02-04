import React from 'react';
import Navbar from '../navbar/Navbar';
import styles from './layout.module.scss';




const Layout = ({ children }) => {


  return (
    
      <section className={styles.container}>
        <Navbar />
        {children}
      </section>
    
  )
}

export default Layout;