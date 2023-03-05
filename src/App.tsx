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

const scrollToElement = (id: any, duration: number = 1000) => {
  const element = document.getElementById(id);
  if (element) {
    const startPosition = window.pageYOffset;
    const endPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const distance = endPosition - startPosition;
    let startTime: number | null = null;

    const scrollAnimation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = (progress: number) =>
        progress < 0.5
          ? 2 * progress * progress
          : 1 - 2 * (1 - progress) * (1 - progress);
      const newPosition = startPosition + distance * ease(progress);
      window.scrollTo(0, newPosition);

      if (elapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
};

const toSecondHead = () => {
  scrollToElement('aboutHeader', 1000);
};

const toContact = () => {
  scrollToElement('contact', 2500);
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
