import React, { Component } from 'react'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className="headerBackground">
                <div className="headerContainer">
                    <div className="header">
                        <div className="heading">
                            <img className="headerLogo" src="/icons/innovare_logo.png" alt="Innovare logotyp" />
                            <div className="chooseCathegory">
                                <p>Välj kategori</p>
                                <img className="arrowExpandIcon" src="/icons/arrow_expand_menu.svg" alt="ikon pil ner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header