import React from 'react'
import styles from './LocationCard.module.css';

export default function LocationCard({id,name,type,dimension}) {
  return (
    <div className={styles.main_wrapper}>
        <span style={{marginRight:'10px'}} className={styles.main_text}>{'#'+id}</span>
        <span className={styles.main_text}>{name}</span>
        <div className={styles.second_wrapper}>
            <span className={styles.secondary_text}>{type}</span>
            <span className={styles.secondary_text}>{dimension}</span>
        </div>
    </div>
  )
}
