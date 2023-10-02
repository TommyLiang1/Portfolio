import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>
        <a href="/" className='nav-title'>Tommy</a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}