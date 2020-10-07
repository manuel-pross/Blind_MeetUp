import React from 'react';
import headerImage from '../../../assets/img/placeholder/1920x930-placeholder.png'
import Aux from '../hoc/Auxy';

const header = (props) => (
   <Aux>
      <div className="header position-relative">
         <img className="header__image" src={headerImage} alt="headerImage" />
         <div className="header__wrapper">
            <h1 className="header__title">Triff dich mit neuen Leuten aus deiner Hochschule und connecte dich. </h1>
            <p className="header__p">Nutze die Möglichkeit, an spannenden Treffen in ganz Furtwangen teilzunehmen, dich mit verschiedenen Studierenden zu treffen, dich mit ihnen auszutauschen oder Kontakte zu knüpfen. Wir bieten dir eine Plattform und organisieren alles.  </p>
            <button className="header__firstBtn btn btn-primary">Jetzt anmelden</button>
            <button className="btn btn-secondary">Mehr erfahren</button>
         </div>
      </div>
   </Aux>
);

export default header;