import React from 'react'
import Logo from '../../assets/logo.png'
import "./styles.scss";

const Navbar = () => {
    return (

        <nav data-test="navbarComponent">
                <div className="wrap">
                    <div className="logo">
                        <img data-test="logoIMG"src={Logo} alt="logo" />
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
