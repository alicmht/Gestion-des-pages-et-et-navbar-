import React from 'react'; 
import {Link ,NavLink } from 'react-router-dom';
function Menu() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a class="navbar-brand" href="/">
    <img src="/docs/4.0/assets/brand/logo.192.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bienvenu
  </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink  className="nav-link "  to="/"> Docs</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink  className="nav-link " to="/community">Community</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>

    )
}

export default Menu;
