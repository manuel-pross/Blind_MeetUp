import React from 'react';
import headerImage from '../../../assets/img/placeholder/landing-page-background.jpg'
import Aux from '../hoc/Auxy';

const header = (props) => (
   <Aux>
      <div className="header position-relative">
         <img className="header__image" src={headerImage} alt="headerImage" />
         <div className="header__wrapper">
            <h2 className="header__title">Triff dich mit neuen Leuten aus deiner Hochschule und connecte dich. </h2>
            <p className="header__p">Nutze die Möglichkeit, an spannenden Treffen in ganz Furtwangen teilzunehmen, dich mit verschiedenen Studierenden zu treffen, dich mit ihnen auszutauschen oder Kontakte zu knüpfen. Wir bieten dir eine Plattform und organisieren alles.  </p>
            <div className="header__btn__wrapper">
               <button className="header__firstBtn btn btn-primary">Jetzt anmelden</button>
               <button className="btn btn-secondary">Mehr erfahren</button>
            </div>
         </div>
      </div>
   </Aux>
);

export default header;