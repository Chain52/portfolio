// Pages are the different pages presented to the user.

import React, { useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import { Element } from 'react-scroll';
import {
  Header,
  About,
  Blogs,
  Contact,
  Experiences,
  HeroSection,
  Pricing,
  Services,
  Works,
} from '../components/sections';
import { Brandlogos } from '../components/elements';

export default () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener('click', (e) => {
    if (e.target.closest('.content')) {
      setToggleMenu(false);
    }
  });
  return (
    <>
      <Header
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <Element name="section-home">
          <ReactCursorPosition>
            <HeroSection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-about">
          <About />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-experiences">
          <Experiences />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-pricing">
          <Pricing />
        </Element>
        <Element name="section-brandlogos">
          <Brandlogos />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
};
