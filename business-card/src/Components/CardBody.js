import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons"
import "../static/CardBody.css"
import logo from "../images/image-2.jpg"
const emails = <FontAwesomeIcon icon={ faEnvelope }/>
const twitter = <FontAwesomeIcon icon={ faBriefcase}/>
export default class CardBody extends Component {
    render() {
        return (
            <div className="card-container">
                <div className='card-image'>
                    <img src={ logo } alt='personal visual'/>
                </div>
                <div className='card-infos'>
                    <div className='card--info'>
                        <h3 className="card--name">Laura Smith</h3>
                        <h5 className="card--work-title">Frontend Developer</h5>
                        <p className="card--web-links"><a href='https://laurasmith.co.ke'>laurasmith.com</a></p>
                    </div>
                    <div className="card--info-contacts">
                        <button>
                            { emails }&nbsp;
                            Email
                        </button>
                        <button className='contact-2'>
                            { twitter }&nbsp;
                            LinkendIn
                        </button>
                    </div>
                    <div className='card-slots'>
                        <div className='card--slot'>
                            <h3 className="card--slot-title">About</h3>
                            <p className="card--slot-texts">
                                I am a frontend developer with a particular interest
                                in making things simple and automating daily tasks. 
                                I try to keep up with security and best practices, 
                                and I am always looking for new things to learn.
                            </p>
                        </div>
                        <div className='card--slot'>
                            <h3 className="card--slot-title">Interests</h3>
                            <p className="card--slot-texts">
                                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
