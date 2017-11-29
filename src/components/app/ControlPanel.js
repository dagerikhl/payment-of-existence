import React, { Component } from 'react';
import './ControlPanel.css';

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

    wageModels = ['Ca18', 'HB17'];

    constructor(props) {
        super(props);
        this.state = {
            currency: 'NOK',
            wageModel: 'Ca18',
            yearlyWage: {
                active: false,
                amount: 0
            },
            hourlyWage: {
                active: false,
                amount: 0
            }
        };
    }

    /** DEBUG */
    componentWillUpdate(nextProps, nextState) {
        console.log('state:', nextState);
    }

    currencyChange = (e) => {
        this.setState({ currency: e.target.value });
    };

    wageModelChange = (e) => {
        this.setState({ wageModel: e.target.value });
    };

    yearlyWageActiveChange = (e) => {
        this.setState({ yearlyWage: { ...this.state.yearlyWage, active: e.target.checked } });
    };

    yearlyWageAmountChange = (e) => {
        this.setState({ yearlyWage: { ...this.state.yearlyWage, amount: +e.target.value } });
    }

    hourlyWageActiveChange = (e) => {
        this.setState({ hourlyWage: { ...this.state.hourlyWage, active: e.target.checked } });
    };

    hourlyWageAmountChange = (e) => {
        this.setState({ hourlyWage: { ...this.state.hourlyWage, amount: +e.target.value } });
    };;

    render() {
        return (
            <form className='control-panel'>
                <section className='general'>
                    <h3>General</h3>
                    <label>
                        <div>Currency</div>
                        <select value={this.state.currency} onChange={this.currencyChange}>
                            {this.currencies.map((c) => (<option key={c} value={c}>{c}</option>))}
                        </select>
                    </label>
                    <label>
                        <div>Wage Model</div>
                        <select value={this.state.wageModel} onChange={this.wageModelChange}>
                            {this.wageModels.map((c) => (<option key={c} value={c}>{c}</option>))}
                        </select>
                    </label>
                </section>
                <section className='model-data'>
                    <h3>Wage Model Data</h3>
                    <div className='data-line'>
                        <label>
                            <div>Yearly wage</div>
                            <input type='checkbox'
                                   value={this.state.yearlyWage.active}
                                   onChange={this.yearlyWageActiveChange}/>
                        </label>
                        <label>
                            <div>Amount {this.state.currency}</div>
                            <input type='number'
                                   value={this.state.yearlyWage.amount}
                                   min='0'
                                   onChange={this.yearlyWageAmountChange}/>
                        </label>
                    </div>
                    <div className='data-line'>
                        <label>
                            <div>Hourly wage</div>
                            <input type='checkbox'
                                   value={this.state.hourlyWage.active}
                                   onChange={this.hourlyWageActiveChange}/>
                        </label>
                        <label>
                            <div>Amount {this.state.currency}</div>
                            <input type='number'
                                   value={this.state.hourlyWage.amount}
                                   min='0'
                                   onChange={this.hourlyWageAmountChange}/>
                        </label>
                    </div>
                </section>
            </form>
        );
    }

}

export default ControlPanel;
