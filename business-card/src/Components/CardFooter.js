import React, { Component } from 'react'
import ig from "../images/ig-logo.png"
import twitter from "../images/twitter-logo.png"
import git from "../images/git-logo.png"
import "../static/CardFooter.css"
export default class CardFooter extends Component {
  render() {
    return (
      <footer className="footer-contacts">
        <a href="www.instagram.com"><img src={ig} alt=""/></a>
        <a href="www.twitter.com"><img src={twitter} alt=""/></a>
        <a href="www.github.com"><img src={git} alt=""/></a>
      </footer>
    )
  }
}
