import React from 'react';

import { Link as LinkScroll } from 'react-scroll';

import { Link } from 'react-router-dom';


const navigationItem = (props) => {

    let navElement = null;

    if (props.hashLink) {
        navElement = (
            <LinkScroll
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
            </LinkScroll>
        );

    } else if (props.onlyText) {
        navElement = (
            <div className="navLinks">
                <a className="navLinks__hash navLinks__text">
                    {props.children}
                </a >
            </div>
        );
    }
    else {
        navElement = (

            <Link
                className={props.children === "Startseite" ? "navLinks__hash" : "btn btn-primary navLinks__button"}
                to={props.link}>
                {props.children}
            </Link>
        );
    }

    return (
        <div className="navLinks">
            {navElement}
        </div>
    );
}

export default navigationItem;