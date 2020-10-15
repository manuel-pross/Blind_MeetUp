import React from 'react';
import ImageText from './ImageText'

import firstImage from '../../../assets/img/placeholder/720x485-placeholder.png'
import secondImage from '../../../assets/img/placeholder/720x485-placeholder.png'

import TextIconHFU from '../../components/TextIconHFU/TextIconHFU'

const firstText = "Dazu entwickeln wir gemeinsam mit Prof. Dr. Gabriel Rausch eine Anwendung, die es ermöglicht an einem realen Treffen seiner Wahl teilnehmen zu können. Es kann ausgewählt werden, ob man sich lieber mit nur einer weiteren Person treffen möchte oder mit einer Gruppe (mit bis zu 5 Personen). Dabei geschieht der ganze Prozess völlig anonym, sodass man bis zum Treffen nicht weiß, wer einem gegenüber steht. So wollen wir den Alltag in Furtwangen aufwerten. Bei den Treffen kannst du dich mit den anderen nach Belieben austauschen, was auch immer dich interessiert."

const secText = "Außerdem sehen wir die Chance neue Studierende kennenzulernen, die man noch nicht kannte; mit ihnen „networken“ und neue Freundschaften entwickeln. Auch für Internationals stellt es eine Möglichkeit dar, sich einzubringen, sich hier vertraut zu machen und Kontakte knüpfen zu können. Wir sind von unserer Vorstellung überzeugt und hoffen, du bist es auch. Sei jetzt auch ein Teil von Blind MeetUp!"

const AboutProject = () => (
   <div className="container mb-400">
      <h1 className="aboutProject__title">Über das Projekt</h1>
      <p className="aboutProject__text mb-200">Sechs Studierende, ein Team, eine Vision — das ist Blind MeetUp. Wir haben es uns zur Aufgabe gemacht, dich und andere Studierende an der Hochschule Furtwangen miteinander zu „connecten“. So sehen wir die perfekte Möglichkeit, die internen Beziehungen zwischen den einzelnen Fakultäten in Furtwangen stärken zu können und eine Interaktion zu fördern.</p>
      <ImageText alignment img={firstImage} text={firstText} />
      <ImageText alignment={false} img={secondImage} text={secText} />
      <TextIconHFU />
   </div>
);

export default AboutProject;