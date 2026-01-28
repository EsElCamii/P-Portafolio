import LightRays from "./components/LightRays/LightRays.jsx";
import ShinyText from "./components/ShinyText.jsx";

const Home = () => (
  <section className="section hero" id="home" style={{ backgroundColor: "#121212" }}>
    <div className="rays-container" style={{ width: "100vw", height: "100vh" }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1} 
        lightSpread={1.5}
        rayLength={2.9}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
      />
      <div className="rays-overlay">
      <div className="content-container">
        <ShinyText
          fontSize="clamp(2.6rem, 7vw, 5rem)"
          text="Camilo Quirós M."
          speed={2.9}
          delay={0}
          color="#d6d6d6ff"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        <div className="hero-subline">
          <p style={{ fontFamily: "SFPro, sans-serif", fontSize: "clamp(1rem, 3vw, 1.35rem)", color: "#b5b5b5" }}>
            Full Stack Developer
          </p>
          <div className="hero-icons" aria-label="Social links">
            <a
              className="hero-icon"
              href="https://github.com/EsElCamii"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1.75c-5.66 0-10.25 4.59-10.25 10.25 0 4.53 2.94 8.38 7.02 9.73.51.09.7-.22.7-.49 0-.24-.01-1.02-.02-1.86-2.86.62-3.46-1.21-3.46-1.21-.47-1.2-1.15-1.52-1.15-1.52-.94-.64.07-.63.07-.63 1.04.07 1.58 1.07 1.58 1.07.93 1.58 2.43 1.12 3.02.85.09-.67.36-1.12.65-1.38-2.28-.26-4.68-1.14-4.68-5.08 0-1.12.4-2.03 1.06-2.75-.11-.26-.46-1.3.1-2.71 0 0 .86-.28 2.82 1.05a9.6 9.6 0 0 1 2.57-.35c.87 0 1.74.12 2.57.35 1.96-1.33 2.82-1.05 2.82-1.05.56 1.41.21 2.45.1 2.71.66.72 1.06 1.63 1.06 2.75 0 3.95-2.4 4.82-4.69 5.08.37.32.7.95.7 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.19.59.71.49A10.27 10.27 0 0 0 22.25 12C22.25 6.34 17.66 1.75 12 1.75Z" />
              </svg>
            </a>
            <a
              className="hero-icon"
              href="https://www.linkedin.com/in/camilo-quir%C3%B3s-mendoza-90b817390/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.42v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              className="hero-icon"
              href="mailto:camiloquiros@icloud.com"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.75 5.5h16.5c.97 0 1.75.78 1.75 1.75v9.5c0 .97-.78 1.75-1.75 1.75H3.75A1.75 1.75 0 0 1 2 16.75v-9.5C2 6.28 2.78 5.5 3.75 5.5Zm0 1.5c-.14 0-.26.05-.36.14L12 12.2l8.61-5.06a.5.5 0 0 0-.36-.14H3.75Zm16.5 9.5V8.9l-7.9 4.64a1.5 1.5 0 0 1-1.7 0L2.75 8.9v7.6c0 .14.11.25.25.25h16.5c.14 0 .25-.11.25-.25Z" />
              </svg>
            </a>
          </div>
        </div>
        <button
          className="scroll-cta"
          type="button"
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
        >
          Click to see full portfolio
          <span aria-hidden="true" className="scroll-cta-arrow">↓</span>
        </button>

      </div>
    </div>
    </div>
  </section>
);

export default Home;
