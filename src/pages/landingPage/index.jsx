import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout'
import styles from './landingPage.module.scss';

const LandingPage = () => {
  return (
    <Layout>
      <section className={styles.loginLanding}>

        <div className={styles.wrapper}>
          <div className={styles.landingContent}>
            <h1><span>KPI for Everything</span> | Intuitive hassle free professional KPI dashboards</h1>
            <h3>Connect your data from a choice of over 80 integrations. Build a real-time dashboard in minutes</h3>
            <Link to="/sign-up"><button>Get Started</button></Link>
          </div>
        </div>
      </section>

      <section className={styles.landingImage}>
        <div className={styles.wrapper}></div>
      </section>
    </Layout>
  )
}

export default LandingPage;