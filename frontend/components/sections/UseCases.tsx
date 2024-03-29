import React from 'react';
import { H3, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';

interface Props { }

const UseCases: React.FunctionComponent<Props> = () => (
  <div id="usecases" className="section">
    <div className="section__wrapper usecases__wrapper">
      <div className="usecases__box usecases__box--left background-color-green">
        <H3 className="usecases__title" fontColor="white">Use cases</H3>
        <P fontColor="white" className="usecases__text">Yellowreach focuses on simple emails with few variables and predefined emails. It can be used for any website, web app or native app. The main use cases are:</P>
        <List fontColor="white" items={['Contact forms', 'Registration process', 'Welcome messages']} />
      </div>
      <div className="usecases__box usecases__box--right background-color-grey">
        <img className="usecases__image" src="images/code.png" alt="Code" />
      </div>
    </div>
  </div>
);

export { UseCases };
