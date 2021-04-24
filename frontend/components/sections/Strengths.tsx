import React from 'react';
import { SectionLayout } from 'components/layout/SectionLayout';
import { Button } from 'components/links/Button';
import { H3, H4, P } from 'components/text/Text';
import Typewriter from 'typewriter-effect';

interface Props { }

const Strengths: React.FunctionComponent<Props> = () => (
  <div id="strenghts" className="section">
    <div className="section__wrapper strenghts__wrapper">
      <H3 className="strengths__title" textAlign="center">Strenghts</H3>
      <P textAlign="center" className="strenghts__text">With yerllowreach, we want to develop a lightweight but solid solution for websites and web applications that allows you to send and receive emails. To provide you with the best possible solution, we focus on some specific features.</P>
      <div className="strengths__item__wrapper">
        <div className="strenghts__item">
          <img className="strenghts__image" src="images/developer-team.jpeg" alt="Developer Team" />
          <H4 textAlign="center">Simplicity</H4>
        </div>
        <div className="strenghts__item">
          <img className="strenghts__image" src="images/laptop.jpeg" alt="Laptop" />
          <H4 textAlign="center">Developer Friendly</H4>
        </div>
        <div className="strenghts__item">
          <img className="strenghts__image" src="images/developer.jpeg" alt="Developer" />
          <H4 textAlign="center">Easy Setup</H4>
        </div>
        <div className="strenghts__item">
          <img className="strenghts__image" src="images/lucerne.jpeg" alt="Lucerne" />
          <H4 textAlign="center">Opensource</H4>
        </div>
      </div>
    </div>
  </div>

);

export { Strengths };

/*

*/
