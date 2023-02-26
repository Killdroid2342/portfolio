import React from 'react';
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Uses from './components/Uses';
import MyWork from './components/MyWork';
import SoftwareUses from './components/SoftwareUses';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Nav />
      <FrontPage />
      <AboutMe />
      <Uses />
      <MyWork />
      <SoftwareUses />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
