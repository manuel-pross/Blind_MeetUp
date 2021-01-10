import React from 'react';

import { useHistory } from "react-router-dom";


const animatedSVGItem = (props) => {
    const history = useHistory();

    const toLandingPage = () => {
        window.scroll(0,0);
        if(props.user){
            history.push("/dashboard/anmelden");
        }else{
            history.push("/");
        }
    }


    return (
        <svg className="navbar__logo1" viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" onClick={toLandingPage} style={{cursor: "pointer"}}>
            <g id="Ebene-1" transform="matrix(1,0,0,1,0,-922.52)">
                <rect id="rect1612" x="0" y="922.52" width="1000" height="200" style={{ fill: "white" }} />
                <g id="g2044">
                    <g id="g954" transform="matrix(0.406864,0,0,0.406864,68.0159,670.934)">
                        <g className="navbar__icon-person1" id="g939">
                            <path id="path933" d="M171.071,810.198C171.071,831.26 153.74,848.591 132.679,848.591C111.617,848.591 94.286,831.26 94.286,810.198C94.286,789.136 111.617,771.805 132.679,771.805C153.74,771.805 171.071,789.136 171.071,810.198Z" style={{ fillRule: "fill-rule:nonzero" }} />
                            <path id="path935" d="M46.786,850.734C94.928,862.262 153.219,876.471 228.214,800.377C232.361,795.567 233.305,798.89 232.857,801.805C192.861,1048.56 132.05,947.509 42.5,857.162C38.655,853.035 40.072,849.331 46.786,850.734Z" style={{ fillRule: "fill-rule:nonzero" }} />
                        </g>
                        <g className="navbar__icon-person2" id="g946" transform="matrix(-1,0,0,1,473.353,0)">
                            <path id="path942" d="M171.071,810.198C171.071,831.26 153.74,848.591 132.679,848.591C111.617,848.591 94.286,831.26 94.286,810.198C94.286,789.136 111.617,771.805 132.679,771.805C153.74,771.805 171.071,789.136 171.071,810.198Z" style={{ fillRule: "fill-rule:nonzero" }} />
                            <path id="path944" d="M46.786,850.734C94.928,862.262 153.219,876.471 228.214,800.377C232.361,795.567 233.305,798.89 232.857,801.805C192.861,1048.56 132.05,947.509 42.5,857.162C38.655,853.035 40.072,849.331 46.786,850.734Z" style={{ fillRule: "fill-rule:nonzero" }} />
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,303.57,1058.03)">
                        <g id="text1939">
                            <text x="0px" y="0px" style={{ fontFamily: "'Maven Pro Black', 'Arial', sans-serif", fontWeight: 700, fontSize: 101.591 + "px"}}>Blind MeetUp</text>
                        </g>
                    </g>
                    <path id="path1945" d="M274.662,985.02L274.662,1060.38" style={{ fill: "none", fillRule: "nonzero", stroke: "black", strokeOpacity: 0.61, strokeWidth: 5 + "px" }} />
                </g>
            </g>
        </svg>
    );
}

export default animatedSVGItem;