import React from 'react';
import "./navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div class="navigation">
            <h1>Navigation Components</h1>
            <div class="navigationButtonContainer">
              <Link to="/">
              <button class="navigationButton">Home</button>
              </Link>
              <Link to="/contact">
              <button class="navigationButton">Contact</button>
              </Link>
            </div>
            
        </div>
    )
}

export default Navigation
