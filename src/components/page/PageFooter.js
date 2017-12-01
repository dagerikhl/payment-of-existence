import React, { Component } from 'react';
import './PageFooter.css';

class PageFooter extends Component {

    render() {
        return (
            <footer className='app-footer'>
                <h5>2017</h5>
                <h5>
                    made by&nbsp;
                    <a className='sec-link'
                       target='_blank' rel='noopener noreferrer'
                       href='https://github.com/dagerikhl/'>(dagerikhl)</a>
                </h5>
            </footer>
        );
    }

}

export default PageFooter;
