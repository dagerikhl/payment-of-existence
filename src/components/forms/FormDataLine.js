import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormDataLine.css';

export default class FormDataLine extends Component {

    handleActiveChange = (e) => {
        let data = {
            active: e.target.checked
        };

        this.props.onChange(data);
    };

    handleAmountChange = (e) => {
        let data = {
            amount: +e.target.value
        };

        this.props.onChange(data);
    };

    render() {
        return (
            <div className='form-field-data-line'>
                <label className='active'>
                    <div className='text'>{this.props.name}</div>
                    <input type='radio'
                           checked={this.props.object.active}
                           onChange={this.handleActiveChange}/>
                </label>
                <label className='amount'>
                    <div className='text'>Amount</div>
                    <input type='number'
                           disabled={!this.props.object.active}
                           value={this.props.object.amount}
                           min='0'
                           step='10'
                           onChange={this.handleAmountChange}/>
                </label>
            </div>
        );
    }

}

FormDataLine.propTypes = {
    name: PropTypes.string.isRequired,
    object: PropTypes.shape({
        active: PropTypes.bool,
        amount: PropTypes.number
    }).isRequired,
    onChange: PropTypes.func.isRequired
};
