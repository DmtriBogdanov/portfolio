import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: false,
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: { value: 10, density: { enable: true, area: 800 } },
        color: { value: ["#608af5"] },
        shape: { type: "circle" },
        opacity: { value: 1, random: true },
        size: { value: { min: 10, max: 30 }, random: true },
        move: {
          enable: true,
          speed: 5,
          direction: MoveDirection.none,
          outModes: { default: OutMode.out },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <div
      id="particles-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      <style>{`
        #tsparticles canvas {
          filter: blur(25px);
        }
      `}</style>
    </div>
  );
};
