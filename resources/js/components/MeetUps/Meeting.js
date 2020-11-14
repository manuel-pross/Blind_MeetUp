import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

class Meeting extends Component {
   state = {
      btnPressed: false,
      displayBeforeClick: { display: "block" },
      displayAfterClick: { display: "none" },
      joinBtnSpanClass: "btn btn-meeting"
   }

   joinClickHandler = () => {
      if (!this.state.btnPressed) {
         this.setState({ btnPressed: true, displayAfterClick: { display: "block" }, displayBeforeClick: { display: "none" }, joinBtnSpanClass: "btn btn-meeting--animation" })
      }
      // if (this.state.btnPressed) {
      //    this.setState({joinBtnSpanClass: "btn btn-meeting--animation" })
      // }
   }

   exitClickHandler = () => {
      if (this.state.btnPressed) {
         this.setState({ btnPressed: false, displayAfterClick: { display: "none" }, displayBeforeClick: { display: "block" } })
      }
   }

   // btnklassen und Style sind in der meetUps.scss
   render() {
      const { t } = this.props;
      return (
         <div key={this.props.key} className="meeting">
            <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
            <div style={this.state.displayAfterClick} className="meeting__btnWrapper">
               <button className="btn btn-meetingType mb-100">{t("btnDuo")}</button>
               <button className="btn btn-meetingType">{t("btnGroup")}</button>
            </div>
            <div style={this.state.displayBeforeClick} className="meeting__dataWrapper">
               <p className="meeting__data">Mittwoch</p>
               <p className="meeting__data meeting__data--date">01.September, 18:00</p>
               <span className="meeting__dataWrapper--pipe"></span>
            </div>
            <div style={this.state.displayBeforeClick} className="meeting__dataWrapperLocation">
               <p className="meeting__data meeting__data--place">Biercafe Engel</p>
               <span className="meeting__dataWrapperLocation--pipe"></span>
            </div>
            <button onClick={this.joinClickHandler} className={this.state.joinBtnSpanClass}>{t("btnJoin")}<span className="btn-meeting__arrow" /></button>
         </div >
      );
   };
};

export default withTranslation('meetUps')(Meeting);