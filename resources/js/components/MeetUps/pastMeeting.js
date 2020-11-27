import React, { Component } from 'react';

import smileyGood from '../../../assets/img/icons/smiley-good.svg';
import smileyNeutral from '../../../assets/img/icons/smiley-neutral.svg';
import smileyBad from '../../../assets/img/icons/smiley-bad.svg';

import { withTranslation } from 'react-i18next';

class PastMeeting extends Component {

   exitClickHandler = () => {
     //
   }

   render() {
      const { t } = this.props;
      return (
         <div className="pastMeeting">
            <button onClick={this.exitClickHandler} className="meeting__exitBtn"></button>
            <div className="pastMeeting__textWrapper">
               <p className="pastMeeting__text">{t("satisfiedDesc1")}</p>
               <p className="pastMeeting__text">{t("satisfiedDesc2")}</p>
            </div>
            <div className="pastMeeting__smileyWrapper" >
               <img className="pastMeeting__smiley" src={smileyGood} ></img>
               <img className="pastMeeting__smiley" src={smileyNeutral} ></img>
               <img className="pastMeeting__smiley " src={smileyBad} ></img>
            </div>
            <div className="pastMeeting__btnWrapper" style={{ textAlign: "center" }}>
               <button className="btn">{t("btnRate")}</button>
            </div >
         </div>
      );
   };
};

export default withTranslation('meetUps')(PastMeeting);