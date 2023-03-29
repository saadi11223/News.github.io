
import React, { Component } from 'react'

export class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DailyNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/sports">Sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/general">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/technology">Technology</a>
        </li>
         
       
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar