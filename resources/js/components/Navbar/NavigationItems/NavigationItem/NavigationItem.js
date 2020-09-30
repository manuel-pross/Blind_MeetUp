import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


const navigationItem = (props) => {

    let navElement = null;

    if (props.hashLink) {
        navElement = (
            <Link
                className="hide-Nav-Elements"
                style={{ cursor: 'pointer' }}
                to={props.link}
                smooth={true}
                duration={props.duration}
                offset={props.offset}
                spy={true}
                activeClass="active"
            >
                {props.children}
            </Link>
        );

    } else {
        navElement = (
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.children}
            </a >
        );
    }

    return (
        <div className="navigation-Item">
            {navElement}
        </div>
    );
}

export default navigationItem;