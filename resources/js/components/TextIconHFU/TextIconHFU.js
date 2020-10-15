import React from 'react';
import hfuIcon from '../../../assets/img/Hochschule_Furtwangen_logo.svg'

const textIconHFU = () => (
    <div className="text-icon">
        <h3 className="text-icon__heading-mobile">Unterstützt durch</h3>
        <h3 className="text-icon__heading-desktop">Im Auftrag und in Kooperation mit</h3>
        <img className="text-icon__img" src={hfuIcon}></img>
    </div>
);

export default textIconHFU;