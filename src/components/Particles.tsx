import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';
import type { Engine, Container } from 'tsparticles-engine';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {
      background: {
        color: '#0a0a0a',
      },
      fpsLimit: 120,
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#FFF',
        },
        links: {
          enable: true,
          distance: 200,
          color: {
            value: '#581c87',
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };
  }, []);

  // const particlesInit = async (engine: Engine) => {
  //   loadSlim(engine);
  // };
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  // <div className='w-full h-full bg-red-200 '>
  return (
    <Particles
      id='tsparticles'
      init={particlesInit as any}
      options={options}
      loaded={particlesLoaded}
    />
  );
  // </div>
};

export default ParticlesComponent;
