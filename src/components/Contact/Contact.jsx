import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            {cta || 'Would you like to work with me? Awesome!'}
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
          >
            {btn || "Let's Talk"}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
