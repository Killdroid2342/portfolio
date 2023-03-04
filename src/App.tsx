import React, { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Uses from './components/Uses';
import MyWork from './components/MyWork';
import SoftwareUses from './components/SoftwareUses';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
}
const scrollToElement = (id: any) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const toSecondHead = () => {
  scrollToElement('aboutHeader');
};

const toContact = () => {
  scrollToElement('contact');
};
const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className='ring-cursor' ref={cursorRef}></div>
      <Nav toContact={toContact} />
      <FrontPage toSecondHead={toSecondHead} />
      <AboutMe />
      <Uses />
      <MyWork />
      <SoftwareUses />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
