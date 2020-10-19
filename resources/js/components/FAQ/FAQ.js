import React, { useState } from 'react';
import Content from './Content';

const FAQ = () => {

   const Categories = [
      "Anmeldung",
      "Treffen",
      "Allgemeines",
      "Sonstiges",
   ]

   const [btnClass, setBtnClasses] = useState(
      "FAQ__contentWrapper__btn--disabled"
   )

   const [currentContent, setContent] = useState([
      <h3 className="FAQ__content--noMargin" key={-1}></h3>,
      <p className="FAQ__contentText--noMargin" key={-2}>Bitte eine Kategorie auswählen</p>,
   ])

   const [ifExtended, setifExtended] = useState(false)
   const [extendedContent, setExtendedContent] = useState(false)

   let category = "Kategorie auswählen";
   const CatButtonClickHandler = (i) => {
      category = (Categories[i]);
      setContent([<h3 className="FAQ__content--noMargin" key={-1}></h3>])
      setExtendedContent([<h3 className={"FAQ__content--extended"} key={-2}></h3>])

      let visibleIndex = 0;
      for (let i = 0; i < Content.length; i++) {
         if (category == Content[i].cat) {
            visibleIndex++;
            if (visibleIndex < 4) {
               setContent(setContent => [...setContent, <h3 className="FAQ__content" key={Content[i].key + "-t"}>{Content[i].title}</h3>])
               setContent(setContent => [...setContent, <p className="FAQ__content FAQ__contentText" key={i + "-p"}>{Content[i].content}</p>])
            } else {
               setExtendedContent(setExtendedContent => [...setExtendedContent, <h3 className={"FAQ__content"} key={Content[i].key + "-et"}>{Content[i].title}</h3>])
               setExtendedContent(setExtendedContent => [...setExtendedContent, <p className={"FAQ__content"} key={i + " - ep"}>{Content[i].content}</p>])
            }
         }
      }
      if (visibleIndex > 3) {
         setBtnClasses("FAQ__contentWrapper__btn");
      }
   }

   const extendetButtonClickHandler = () => {
      if (ifExtended) {
         setifExtended(false);
      } else setifExtended(true);
   }

   return (
      <div className="FAQ mb-1000" >
         <div className="container">
            <h2 className="FAQ__title">Häufig gestellte Fragen für neue Nutzer</h2>
            <div className="FAQ__wrapper">
               <div className="FAQ__catWrapper">
                  {Categories.map((e, i) => {
                     return (
                        <button key={i} onClick={() => CatButtonClickHandler(i)} className="btn btn-tertiary FAQ__btn">{e}</button>
                     )
                  })}
               </div>
               <div className="FAQ__contentWrapper">
                  <div>
                     {currentContent}
                  </div>
                  <button onClick={extendetButtonClickHandler} className={"btn btn-primary " + btnClass.class}>Mehr anzeigen</button>
                  <div className={ifExtended ? "FAQ__content" : "FAQ__content--extended"}>
                     {extendedContent}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
};

export default FAQ;