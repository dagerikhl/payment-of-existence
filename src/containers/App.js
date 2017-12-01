import React, { Component } from 'react';
import './App.css';
import ControlPanel from './ControlPanel';
import Footer from '../components/PageFooter';
import Header from '../components/PageHeader';
import InputForm from './InputForm';
import Representation from './Representation';
import Work from './Work';

class App extends Component {

    render() {
        return (
            <div className='app-container'>
                <Header/>
                <section className='body'>
                    <div className='input-container'>
                        <ControlPanel/>
                        <InputForm/>
                        <Work/>
                    </div>
                    <div className='output-container'>
                        <Representation/>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }

}

export default App;
