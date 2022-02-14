import React, { Component } from 'react'
import CardBody from './Components/CardBody'
import "./App.css"
import CardFooter from './Components/CardFooter';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
      return (
        <div className='app-container'>
            <CardBody />
            <CardFooter />
        </div>
      )
    }
}
