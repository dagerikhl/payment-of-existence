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

                <div className='body'>
                    <div className='left'>
                        <ControlPanel/>
                        <InputForm/>
                        <Work/>
                    </div>

                    <div className='right'>
                        <Representation/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }

}

export default App;
