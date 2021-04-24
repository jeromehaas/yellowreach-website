import React from 'react';
import { H3, P } from 'components/text/Text';
import { List } from 'components/text/List';
import { Button } from 'components/links/Button';
import { Link } from 'components/links/Link';

interface Props { }

const TechStack: React.FunctionComponent<Props> = () => (
  <div id="techstack" className="section">
    <div className="section__wrapper techstack__wrapper">
      <div className="techstack__box techstack__box--right background-color-yellow">
        <Link target="/"><img className="techstack__image coresender" src="logos/tech-stack/coresender.png" alt="Coresender" /></Link>
        <Link target="/"><img className="techstack__image ubuntu" src="logos/tech-stack/ubuntu.png" alt="Ubuntu" /></Link>
        <Link target="/"><img className="techstack__image zurb" src="logos/tech-stack/zurb.png" alt="Zurb" /></Link>
        <Link target="/"><img className="techstack__image nodemailer" src="logos/tech-stack/nodemailer.png" alt="Nodemailer" /></Link>
        <Link target="/"><img className="techstack__image express" src="logos/tech-stack/express.png" alt="Express" /></Link>
        <Link target="/"><img className="techstack__image nodejs" src="logos/tech-stack/nodejs.png" alt="NodeJS" /></Link>
      </div>
      <div className="techstack__box techstack__box--left">
        <H3 className="techstack__title" textAlign="center">Tech Stack and Services</H3>
        <P className="techstack__text" textAlign="center">yellow reach is built mostly with NodeJS, using the Express framework which uses the great package from NodeMailer. We recommend to run the server on Ubuntu and we recommend to use the Zurb email foundation to create your HTML emails. Also we recommend to use Coresender - a very minimalistic and bulletproof service to send the emails.</P>
        <Button className="techstack__button" buttonText="visit Coresender" />
      </div>
    </div>
  </div>
);

export { TechStack };
