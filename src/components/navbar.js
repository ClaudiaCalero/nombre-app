import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ico/logo.svg"

class Navbar extends Component {
    render() {
        return (
            <div class="ct-header">
                <Link to="/"><img className="img-logo" src={ logo } alt="logo"/></Link>
                <Link to="/create" className={ this.props.txtColor }>CREATE</Link>
            </div>
        )
    }
}

export default Navbar;