import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormFieldSelect.css';

export default class FormFieldSelect extends Component {

    handleChange = (e) => {
        let data = {};
        data[this.props.field] = e.target.value;

        this.props.onChange(data);
    };

    render() {
        return (
            <label className='form-field-select'>
                <div className='label-text'>{this.props.name}</div>
                <select value={this.props.value} onChange={this.handleChange}>
                    {this.props.values.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
            </label>
        );
    }

}

FormFieldSelect.propTypes = {
    field: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
};
