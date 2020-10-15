import React, { useState } from 'react';
import Aux from '../hoc/Auxy';
import Content from './Content';

const categoryList = [
   "Anmeldung",
   "Treffen",
   "Allgemeines",
   "Sonstiges"
]

const FAQ = () => {

   const [currentTitles, setTitles] = useState([
      <h3 className="FAQ__contentTitle--noMargin" key={-1}></h3>
   ])
   const [currentText, setText] = useState([
      <p className="FAQ__contentText--noMargin" key={-2}>Bitte eine Kategorie auswählen</p>
   ])

   let category = "Kategorie auswählen";
   const buttonClickHandler = (index) => {
      // document.getElementById("FAQ-Cat").innerHTML = categoryList[index];
      category = (categoryList[index]);
      setTitles([<h3 className="FAQ__contentTitle--noMargin" key={-1}></h3>])
      setText([<p className="FAQ__contentText--noMargin" key={-2}></p>])

      for (let i = 0; i < Content.length; i++) {
         if (category == Content[i].cat) {
            setTitles(currentTitles => [...currentTitles, <h3 className="FAQ__contentTitle" key={Content[i].key + "-t"}>{Content[i].title}</h3>])
            setTitles(currentText => [...currentText, <p className="FAQ__contentText" key={i + "-p"}>{Content[i].content}</p>])
         }
      }
   }

   return (
      <Aux>
         <div className="FAQ mb-1000" >
            <div className="container">
               <h2 className="FAQ__title">Häufig gestellte Fragen für neue Nutzer</h2>
               <div className="FAQ__wrapper">
                  <div className="FAQ__catWrapper">
                     <button onClick={() => buttonClickHandler(0)} className="btn btn-tertiary FAQ__btn"> {categoryList[0]} </button>
                     <button onClick={() => buttonClickHandler(1)} className="btn btn-tertiary FAQ__btn"> {categoryList[1]} </button>
                     <button onClick={() => buttonClickHandler(2)} className="btn btn-tertiary FAQ__btn"> {categoryList[2]} </button>
                     <button onClick={() => buttonClickHandler(3)} className="btn btn-tertiary FAQ__btn"> {categoryList[3]} </button>
                  </div>
                  <div className="FAQ__contentWrapper">
                     {/* <h3 id="FAQ-Cat" className="FAQ__selectCat">{category}</h3> */}
                     <div>
                        {currentTitles}
                        {currentText}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Aux >
   )
};

export default FAQ;