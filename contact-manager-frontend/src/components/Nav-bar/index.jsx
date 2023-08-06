import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="nav-right">
                <a href='http://localhost:3000/'>Add Contacts</a>
                <a href='http://localhost:3000/display'>Display Contacts</a>
                <a href='http://localhost:3000/map'>Map</a>
            </div>
        </nav>
    )
}

export default Navbar