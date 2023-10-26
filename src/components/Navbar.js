
import '../App.css'
import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const location = useLocation();
    // console.log(location)
    return (
        <div className="conatiner">
            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgb(249 249 249)' }}>
                <div className='nav_container container'>
                    <div className='nav_title'><h2>Global News</h2></div>
                    <div className='nav_lang_link'>
                        <div className='my-2 ms-2'> ENGLISH | தமிழ் | বাংলা | മലയാളം | ગુજરાતી | हिंदी | मराठी </div>
                        <div className='d-flex ms-2'>
                            <button htmlFor='check' className="navbar-toggler checkbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="nav_link collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="link_item navbar-nav mr-auto">

                                    <li className={`nav-item ${location.pathname === '/general' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/">General</Link></li>
                                    {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                                    <li className={`nav-item ${location.pathname === '/business' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/business">Business</Link></li>
                                    <li className={`nav-item ${location.pathname === '/entertainment' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                    <li className={`nav-item ${location.pathname === '/health' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/health">Health</Link></li>
                                    <li className={`nav-item ${location.pathname === '/science' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/science">Science</Link></li>
                                    <li className={`nav-item ${location.pathname === '/sports' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/sports">Sports</Link></li>
                                    <li className={`nav-item ${location.pathname === '/technology' ? 'text-decoration-underline' : ''}`}><Link className="nav-link" to="/technology">Technology</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar