import React from 'react';
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Uses from './components/Uses';
import MyWork from './components/MyWork';
import SoftwareUses from './components/SoftwareUses';
import Footer from './components/Footer';

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
    </>
  );
};

export default App;
