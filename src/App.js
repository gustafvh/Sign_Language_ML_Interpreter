import UploadImage from './components/UploadImage/UploadImage.js';
import "./App.scss";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import "normalize.css/normalize.css"; //NP, Resettar alla browsers default grejer

import React, { Component } from 'react'
import Environment from "./config/environment";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      gettingAPIResponse: false
    };
  };

  changeCurrentStep = (stepToChangeTo) => {
    this.setState({
      currentStep: stepToChangeTo
    })
  }

  

  render() {
    return (
        <div>
          <div className="app__container">
            <Header/>
            <UploadImage changeCurrentStep={this.changeCurrentStep}/>
            <Footer changeCurrentStep={this.changeCurrentStep} currentStep={this.state.currentStep} />
          </div>
        </div>
    );
  }
}
