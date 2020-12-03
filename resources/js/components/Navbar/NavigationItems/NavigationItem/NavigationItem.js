import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';


const navigationItem = (props) => {

    const handleLogout = () => {
        localStorage.clear();
        props.setUser(null);
    }

    let navElement = null;
    // For Scroll down Link
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

    }
    // For only Text
    else if (props.onlyText) {
        navElement = (
            <div className="navLinks">
                <a className="navLinks__hash" style={{ cursor: 'default' }}>
                    {props.children}
                </a >
            </div>
        );
    }
    // For Text with Router Link
    else if (props.textWithLink) {
        navElement = (
            <Link
                className={"navLinks__hash"}
                to={props.link}>
                {props.children}
            </Link>
        );
    }
    // For Sign Out Button
    else if (props.signOut) {
        navElement = (
            <Link
                className={"btn btn-primary navLinks__button"}
                to={props.link}
                onClick={handleLogout}>
                {props.children}
            </Link>
        );
    }
    // 
    else {
        navElement = (
            <Link
                className={"btn btn-primary navLinks__button"}
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