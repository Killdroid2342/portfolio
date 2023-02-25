import React from 'react';
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Uses from './components/Uses';
import MyWork from './components/MyWork';
import SoftwareUses from './components/SoftwareUses';
import Footer from './components/Footer';
import Particles from './components/Particles';

const App = () => {
  return (
    <>
      <Nav />
      <FrontPage />
      <AboutMe />
      <Uses />
      <MyWork />
      <SoftwareUses />
      <Footer />
      <Particles />
    </>
  );
};

export default App;
