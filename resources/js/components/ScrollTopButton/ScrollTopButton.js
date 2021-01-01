import React, { useState, useEffect } from 'react';

import CSSTransition from 'react-transition-group/CSSTransition';
import { animateScroll as scroll } from 'react-scroll'

import { BsChevronUp } from "react-icons/bs";


const animationTiming = {
    enter: 400,
    exit: 400
}

const ScrollTopButton = () => {
    const [showButton, setButton] = useState(Boolean);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const handleScroll = () => {
        if (window.pageYOffset > 100 && showButton === false) {
            setButton(true);
        }
        if (window.pageYOffset < 100 && showButton) {
            setButton(false);
        }
    }

    const scrollTop = () => {
        scroll.scrollToTop();
    }
    
    // wegen Strick Mode und CSSTransition
    const nodeRef = React.useRef(null)
    return (
        <CSSTransition
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
            in={showButton}
            timeout={animationTiming}
            // Wegen CSSModules müssen die klassen so angegeben werden; ohne so wie in der Dokumentation
            classNames={{
                enterActive: "CSSTransition-enter-active",
                exitActive: "CSSTransition-exit-active"
            }}
        >
            <div
                ref={nodeRef}
                className={"ScrollTopButton"}
                onClick={scrollTop}
            >
                <BsChevronUp
                    // ref={nodeRef}
                    style={{ height: '100%' }}
                    size="2rem" />
            </div>
        </CSSTransition>
    );
}

export default ScrollTopButton;