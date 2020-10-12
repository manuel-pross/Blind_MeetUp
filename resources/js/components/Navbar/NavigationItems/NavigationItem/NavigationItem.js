import React from 'react';

import { Link } from 'react-scroll';


const navigationItem = (props) => {

    let navElement = null;

    if (props.hashLink) {
        navElement = (
            <Link
                className="navLinks__hash"
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
                className="btn btn-primary navLinks__button"
            >
                {props.children}
            </a >
        );
    }

    return (
        <div className="navLinks">
            {navElement}
        </div>
    );
}

export default navigationItem;