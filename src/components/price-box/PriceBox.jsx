import React from 'react'
import styles from './priceBox.module.scss';


const PriceBox = ({ item }) => {
  const { title, description, priceAmount, includes, pricingImageUrl, features, dashboardCount } = item;

  

  return (
    <div className={styles.priceBoxContainer}>
      <div className={styles.item}>
        <div className={styles.image} style={{
          backgroundImage: `url(${pricingImageUrl})`
        }} ></div>
      </div>
      <div className={styles.item}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.item}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.item}>
        {
          priceAmount === "Free" ? <h3 className={styles.price}>
          {priceAmount}</h3> : <h3 className={styles.price}>
          {priceAmount} <span>INR/Month</span></h3>
        }
      </div>


      <div className={styles.item}>
        <select name="dashboard" id="dashboardCount">

          {
            dashboardCount.map((dashCount, index) => (

              dashCount < 31 ? <option key={index} value={dashCount}>{dashCount} Dashboard</option> : <option key={index} value="Contact Sales">Contact Sales</option>

            ))
          }
        </select>
      </div>

      <div className={styles.item}>
        <ul className={styles.includes}>
          {
            includes.map((includeItem, index) => (
              <li key={index}>{includeItem}</li>
            ))
          }
        </ul>
      </div>
      <div className={styles.item}>
        <button>Select</button>
      </div>
      <div className={styles.item}>
        <ul className={styles.features}>
          {
            features.map((featureItem, index) => (
              <li key={index}>{featureItem}</li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default PriceBox