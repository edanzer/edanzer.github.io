import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Aside = () => {
  return (
    <section id="aside">
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="aside-wrapper">
            <p className="aside-wrapper__text">
              Did you know this site is built with Gatsby.js and hosted on Github pages?
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Aside;
