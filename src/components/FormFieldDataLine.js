import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormFieldDataLine.css';

export default class FormFieldDataLine extends Component {

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
                <label>
                    <div className='label-text'>{this.props.name}</div>
                    <input type='radio'
                           checked={this.props.object.active}
                           onChange={this.handleActiveChange}/>
                </label>
                <label>
                    <div className='label-text'>Amount</div>
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

FormFieldDataLine.propTypes = {
    name: PropTypes.string.isRequired,
    object: PropTypes.shape({
        active: PropTypes.bool,
        amount: PropTypes.number
    }).isRequired,
    onChange: PropTypes.func.isRequired
};
