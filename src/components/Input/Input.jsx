import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Btn from '../Btn'

export default class Input extends Component {
    updateValue = (e) => {
        this.props.updateCheckValue(e.target.value)
    }
    render() {
        const { className, secondary } = this.props
        return (
            <input type="number"
                   onChange={this.updateValue} value={this.props.value}
            />
        )
    }
}

Btn.propTypes = { secondary: PropTypes.bool }
Btn.defaultProps = { secondary: false }
