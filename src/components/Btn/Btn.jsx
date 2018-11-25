import React, { Component } from 'react'
import styles from './Btn.styl'
import PropTypes from 'prop-types'

export default class Btn extends Component {
  checkValue = () => {
      this.props.checkValueFunc()
  }
  render() {
    const { className, secondary } = this.props
    return (
      <button
        className={`${secondary ? styles.secondary : styles.primary} ${className} shadow`}
        onClick={this.checkValue}
      >
        {this.props.title}
      </button>
    )
  }
}
