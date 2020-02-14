import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class ProductCard extends Component {
  static PropTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    location: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const locations = this.props.location.map(location => {
      return (
        <div key={location.id} className={styles.griditems}>
          <div inline className={styles.imageitem}>
            <img className={styles.imgtag} alt={location.location} src={location.image} />
          </div>
          <div className={styles.textitem}>
            <h6>{location.location}</h6>
            <p className={styles.date} >{location.date}</p>
            <p className={styles.price} >{location.price}</p>
          </div>
        </div>
      )
    }
    )
    return (
      <div className={styles.gridcontainer}>
        <div className={styles.gridtitle}>
          <h3 >{this.props.title}</h3>
          <h6 >{this.props.subTitle}</h6>
        </div>
        <div className={styles.gridproductcard}>
          {locations}
        </div>
      </div>
    )
  }
}
