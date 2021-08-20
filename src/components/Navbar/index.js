import React from 'react'
import Logo from '../../assets/logo.png'
import "./styles.scss";

const Navbar = () => {
    return (

        <nav>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>

            </div>
        </nav>
    )
}

export default Navbar
