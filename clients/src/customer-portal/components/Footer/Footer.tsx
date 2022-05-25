import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <section id="footer">
            <div className="footer container">
                <div className="brand">
                    <h1><span>D</span>ipankar<span> S</span>aha</h1>
                    <h2>Your complete web solution</h2>
                    <div className="social_icon">
                        <div className="social_item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" /></a>
                        </div>
                        <div className="social_item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/50/000000/instagram-new.png" /></a>
                        </div>
                        <div className="social_item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/50/000000/twitter.png" /></a>
                        </div>
                        <div className="social_item">
                            <a href="#"><img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" /></a>
                        </div>
                    </div>
                    <p>Copyright 2020 Dipankar Saha. All rights reserved</p>
                </div>
            </div>
        </section>

    )
}

export default Footer
