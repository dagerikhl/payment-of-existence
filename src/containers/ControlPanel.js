import React, { Component } from 'react';
import './ControlPanel.css';
import FormFieldDataLine from '../components/forms/FormDataLine';
import FormFieldSelect from '../components/forms/FormSelect';
import Persister from '../services/Persister';

class ControlPanel extends Component {

    currencies = [
        'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF',
        'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC',
        'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL',
        'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR',
        'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT',
        'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR',
        'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR',
        'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS',
        'SPL', 'SRD', 'STD', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TVD', 'TWD', 'TZS',
        'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR',
        'ZMW', 'ZWD'
    ];

    wageModels = ['NONE', 'Ca18', 'HB17'];

    constructor(props) {
        super(props);
        this.state = {
            currency: 'NOK',
            wageModel: 'NONE',
            yearlyWage: {
                active: true,
                amount: 0
            },
            hourlyWage: {
                active: false,
                amount: 0
            }
        };
    }

    componentWillUpdate(nextProps, nextState) {
        Persister.storeSettings('ControlPanel', nextState);

        // DEBUG
        console.log('ControlPanel state:', nextState);
    }

    handleGeneralChange = (data) => {
        this.setState({
            ...data
        });
    };

    handleWageModelChange = (field, data) => {
        let newState = this.state;
        newState[field] = {
            ...this.state[field],
            ...data
        };

        // Handle radio buttons
        if (field === 'yearlyWage') {
            newState['hourlyWage'].active = !newState[field].active
        } else if (field === 'hourlyWage') {
            newState['yearlyWage'].active = !newState[field].active
        }

        this.setState(newState);
    };

    render() {
        return (
            <form className='control-panel'>
                <section className='general'>
                    <h3>General</h3>
                    <FormFieldSelect field='currency'
                                     name='Currency'
                                     value={this.state.currency}
                                     values={this.currencies}
                                     onChange={this.handleGeneralChange}/>
                    <FormFieldSelect field='wageModel'
                                     name='Wage Model'
                                     value={this.state.wageModel}
                                     values={this.wageModels}
                                     onChange={this.handleGeneralChange}/>
                </section>
                <section className='model-data'>
                    <h3>Wage Model Data</h3>
                    <FormFieldDataLine name='Yearly Wage'
                                       object={this.state.yearlyWage}
                                       onChange={(data) => this.handleWageModelChange('yearlyWage', data)}/>
                    <FormFieldDataLine name='Hourly Wage'
                                       object={this.state.hourlyWage}
                                       onChange={(data) => this.handleWageModelChange('hourlyWage', data)}/>
                </section>
            </form>
        );
    }

}

export default ControlPanel;
