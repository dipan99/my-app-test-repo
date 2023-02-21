import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    useEffect(() => {
        if(props.mode==='light'){
            setLightModeStyle();
        }else{
            setDarkModeStyle();
        }
    })
    const setDarkModeStyle = () => {
        document.getElementById("MainNav") && document.getElementById("MainNav").setAttribute("data-bs-theme","dark");
        document.getElementById("MainNav").classList.add('bg-dark');
        document.getElementById("DarkModeBtn").classList.add('text-light');
    }
    const setLightModeStyle = () => {
        document.getElementById("MainNav") && document.getElementById("MainNav").removeAttribute("data-bs-theme");
        document.getElementById("MainNav").classList.remove('bg-dark');
        document.getElementById("DarkModeBtn").classList.remove('text-light');
    }
    return (
        <nav id="MainNav" className={`navbar navbar-expand-lg bg-body-tertiary`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div id="DarkModeBtn" className={`form-check form-switch`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?'Enable':'Disable'}`} Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "Set ABout Here"
}
