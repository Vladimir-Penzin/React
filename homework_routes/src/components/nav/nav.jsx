import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const nav = () => {
    return (
        <div>
            <nav>
                <ul className='nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default nav;