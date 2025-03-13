import React from 'react'
import Shop from './shop'
import Products from './productsDet'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link to="/shop"className="nav-item nav-link active" href="#">
        Home <span className="sr-only">(current)</span>
    </Link>
      {/* <Link to="/" className="nav-item nav-link" href="#">
        Features
      </Link> */}
       <Link to="/product"className="nav-item nav-link active" href="#">
        features <span className="sr-only">(current)</span>
    </Link>
      <a className="nav-item nav-link disabled" href="#">
        Disabled
      </a>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav
