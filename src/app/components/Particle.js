import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

//Particles for home screen, purple, slow movement
const Particle = () => {
    const [init, setInit] = useState(false);
  
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        fullScreen: {
          enable: true,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#8e24aa",
          },
          links: {
            color: "#8e24aa",
            distance: 100, 
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150, 
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "circle", 
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false,
      }),
      []
    );
  
    if (init) {
      return (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      );
    }
  
    return <></>;
  };
  
  export default Particle;