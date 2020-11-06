import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

import LoginContent from './LoginContent';
import GeneralContent from './GeneralContent';
import MeetingContent from './MeetingContent';
import OtherContent from './OtherContent';

class FAQ extends Component {

   state = {
      loginContent: false,
      generalContent: false,
      meetingContent: false,
      otherContent: false
   }

   render() {
      const { t } = this.props;
      const categories = [t('categories.cat1'), t('categories.cat2'), t('categories.cat3'), t('categories.cat4')];

      const catHandleClick = (i) => {
         hideContent();
         switch (i) {
            case 0:
               this.setState({
                  loginContent: true
               })
               break;
            case 1:
               this.setState({
                  generalContent: true
               })
               break;
            case 2:
               this.setState({
                  meetingContent: true
               })
               break;
            case 3:
               this.setState({
                  otherContent: true
               })
               break;
         }
      }

      const hideContent = () => {
         this.setState({
            loginContent: false,
            generalContent: false,
            meetingContent: false,
            otherContent: false
         })
      }

      return (

         <div className="FAQ" >
            <div className="container">
               <h2 className="FAQ__title">{t("title")}</h2>
               <div className="FAQ__wrapper">
                  <div className="FAQ__catWrapper">
                     {categories.map((e, i) => {
                        return (
                           <button key={i} onClick={() => catHandleClick(i)} className="btn btn-tertiary FAQ__btn">{e}</button>
                        )
                     })}
                  </div>
                  <div>
                     <h4 className="FAQ__desc">{t("text")}</h4>
                     <LoginContent displayContent={this.state.loginContent} />
                     <GeneralContent displayContent={this.state.generalContent} />
                     <MeetingContent displayContent={this.state.meetingContent} />
                     <OtherContent displayContent={this.state.otherContent} />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withTranslation('faq')(FAQ);


// const Categories = [
//    "Anmeldung",
//    "Treffen",
//    "Allgemeines",
//    "Sonstiges",
// ]

// const [btnClass, setBtnClasses] = useState({
//    class: "btn btn-disabled",
//    active: "disabled"
// })

// const [currentContent, setContent] = useState([
//    <h4 className="FAQ__content--noMargin" key={-1}></h4>,
//    <p className="FAQ__content__text--noMargin" key={-2}>Hier findet ihr ein FAQ mit vielen nützlichen Informationen rund um Blind MeetUp</p>,
// ])

// const [ifCollapsed, setifExtended] = useState(false)
// const [extendedContent, setExtendedContent] = useState(false)

// const CatButtonClickHandler = (i) => {
//    if (ifCollapsed) {
//       setifExtended(false)
//    }
//    const category = (Categories[i]);
//    setContent([<h4 className="FAQ__content--noMargin" key={-1}></h4>])
//    setExtendedContent([<h4 className={"FAQ__content--extended"} key={-2} ></h4>])

//    let visibleIndex = 0;
//    for (let i = 0; i < Content.length; i++) {
//       if (category == Content[i].cat) {

//          visibleIndex++;
//          if (visibleIndex < 4) {
//             setContent(setContent => [...setContent, <h4 className="FAQ__content" key={Content[i].key + "-t"}>{Content[i].title}</h4>])
//             setContent(setContent => [...setContent, <p className="FAQ__content FAQ__content__text" key={i + "-p"}>{Content[i].content}</p>])
//          } else {
//             setExtendedContent(setExtendedContent => [...setExtendedContent, <h4 className={"FAQ__content"} key={Content[i].key + "-et"}>{Content[i].title}</h4>])
//             setExtendedContent(setExtendedContent => [...setExtendedContent, <p className={"FAQ__content FAQ__content__text"} key={i + " - ep"}>{Content[i].content}</p>])

//          }
//       }
//    }

//    if (visibleIndex > 3) {
//       setBtnClasses({ ...btnClass, class: "btn btn-primary", active: "" });
//    } else if (visibleIndex <= 3 && btnClass.active != "disabled") {
//       setBtnClasses({ ...btnClass, class: "btn btn-disabled", active: "disabled" });

//    }
// }

// const extendetButtonClickHandler = () => {
//    if (ifCollapsed) {
//       setifExtended(false);
//       document.getElementById("FAQ-btn").innerText = "Mehr Anzeigen"
//    } else {
//       document.getElementById("FAQ-btn").innerText = "weniger Anzeigen"
//       setifExtended(true);
//    }

// }

// return (
//    <div className="FAQ" >
//       <div className="container">
//          <h2 className="FAQ__title">Häufig gestellte Fragen für neue Nutzer</h2>
//          <div className="FAQ__wrapper">
//             <div className="FAQ__catWrapper">
//                {Categories.map((e, i) => {
//                   return (
//                      <button key={i} onClick={() => CatButtonClickHandler(i)} className="btn btn-tertiary FAQ__btn">{e}</button>
//                   )
//                })}
//             </div>
//             <div className="FAQ__contentWrapper">
//                {currentContent}
//                <ddfiv className={ifCollapsed ? "FAQ__content__collapsedWrapper" : "FAQ__content__collapsedWrapper--collapsed"}>
//                   {extendedContent}
//                </ddfiv>
//                <button onClick={extendetButtonClickHandler} disabled={btnClass.active} id="FAQ-btn" className={btnClass.class + " my-100"}>Mehr anzeigen</button>
//             </div>
//          </div>
//       </div>
//    </div>
// )