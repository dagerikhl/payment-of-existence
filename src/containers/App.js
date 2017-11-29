import React, { Component } from 'react';
import './App.css';
import ControlPanel from '../components/app/ControlPanel';
import Footer from '../components/app/Footer';
import Header from '../components/app/Header';
import InputForm from '../components/app/InputForm';
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
