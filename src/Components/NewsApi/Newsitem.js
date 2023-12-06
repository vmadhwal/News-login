import React from 'react'
import styles from './NewsItem.module.css'

export const Newsitem = ({title,description,src, url}) => {
  return (
    <div className={styles.container}>
    <div  className={styles.card} >
    <img className={styles.card_image} src={src} alt="Card image cap"/>
    <div className={styles.card__body}>
      <h5 className={styles.tag .tag_blue}>{title}</h5>
      <p className={styles.des}>{description}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  </div>
  )
}
