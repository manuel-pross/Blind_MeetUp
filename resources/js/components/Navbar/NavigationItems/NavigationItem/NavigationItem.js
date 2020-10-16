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
            <a className="navLinks__text">
                {props.children}
            </a >
        );
    }
    else {
        navElement = (

            <Link
                className={props.children === "Startseite" ? "navLinks__hash" : "btn btn-primary navLinks__button"}
                to={props.link}>
                {props.children}
            </Link>
            // <a
            //     href={props.link}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     className="btn btn-primary navLinks__button"
            // >
            //     {props.children}
            // </a >
        );
    }

    return (
        <div className="navLinks">
            {navElement}
        </div>
    );
}

export default navigationItem;