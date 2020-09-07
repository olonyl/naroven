import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return <div className="navbar">
        <div className="search-field-container">
            <FontAwesomeIcon icon={faSearch} color="#dcdcdc" size="lg" className="icon" />
            <input className="search-field" type="text" name="search" />
        </div>
        <div className="navbar-item">
            <a href="/#">MCAT</a>
            <a href="/#">USMLE</a>
            <a href="/#">US History</a>
            <a href="/#">NCLEX</a>
            <a href="/#">More <FontAwesomeIcon icon={faAngleDown} /> </a>
        </div>

    </div>
}

export default NavBar;
