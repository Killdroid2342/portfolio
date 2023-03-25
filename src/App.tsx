import React, { useEffect, useRef } from 'react';
import FrontPage from './components/FrontPage/FrontPage';
import AboutMe from './components/AboutMe/AboutMe';
import MyWork from './components/MyWork';
import Footer from './components/Footer';
import Contact from './components/Contact';

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

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (this: any, e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className='ring-cursor' ref={cursorRef}></div>
      <FrontPage />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
