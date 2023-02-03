import React from 'react'
import Layout from '../../components/layout/Layout'
import PriceBox from '../../components/price-box/PriceBox';

import styles from './pricingPage.module.scss';

import pricingData from '../../data/pricing';

const PricingPage = () => {

  return (
    <Layout>
      <section className={styles.pricingPageContainer}>
        <div className={styles.wrapper}>
          <h1>Pricing</h1>
          <div className={styles.box}>
          
          {
            pricingData.map((item,index) => (
              <PriceBox 
                key={index}
                item= {item}
              />
              
            )) 
          }

          
          
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PricingPage