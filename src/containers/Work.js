import React, { Component } from 'react';
import './Work.css';
import WorkItem from '../components/app/work/WorkItem';

class Work extends Component {

    render() {
        return (
            <ul>
                {[].map(() => (
                    <WorkItem/>
                ))}
            </ul>
        );
    }

}

export default Work;
