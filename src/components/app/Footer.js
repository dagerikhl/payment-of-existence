import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className='app-footer'>
                <span className='year'>2017</span>
                <span className='made-by'>
                    made by&nbsp;
                    <a className='sec-link'
                       target='_blank' rel='noopener noreferrer'
                       href='https://github.com/dagerikhl/'>(dagerikhl)</a>
                </span>
            </footer>
        );
    }

}

export default Footer;
