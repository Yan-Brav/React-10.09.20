import React from 'react'
import Navigation from './TopNavigation'

export default function Header() {
    return (
        <div className="row">
            <nav>
                <div className="nav-wrapper">
                    <div className="col s12">
                        <span className="brand-logo">Admin Panel</span>
                        <Navigation />
                    </div>
                </div>
            </nav>
        </div>
    )
}
