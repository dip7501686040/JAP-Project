import React, { useEffect, useState } from 'react'
import './Header.css'


function Header() {
    const [activeToggle, setActiveToggle] = useState(false)
    const [bgToggle, setBgToggle] = useState(false)

    const listenToScroll = () => {
        const scroll_position = window.scrollY
        if (scroll_position > 100) {
            setBgToggle(true)
        }
        else if (scroll_position <= 100) {
            setBgToggle(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, [])
    return (
        <section id="header">
            <div className={`header container-fluid ${bgToggle ? "active" : "inactive"}`}>
                <div className="navbar">
                    <div className="brand">
                        <a href="#hero"><h1>JAP</h1></a>
                    </div>
                    <div className="nav_list">
                        <div className={`hamburger ${activeToggle ? "active" : ""}`}
                            onClick={() => setActiveToggle(!activeToggle)}>
                            <div className="bar">

                            </div>
                        </div>
                        <ul className={`${activeToggle ? "active" : ""}`}
                            onClick={() => setActiveToggle(!activeToggle)}>
                            <li><a href="#hero" data-after="Home">Home</a></li>
                            <li><a href="#services" data-after="Services">Services</a></li>
                            <li><a href="#projects" data-after="Projects">Projects</a></li>
                            <li><a href="#about" data-after="About">About</a></li>
                            <li><a href="#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
