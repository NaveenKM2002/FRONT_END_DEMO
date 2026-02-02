import "../styles/story.css";
import "../styles/layout.css";
import Reveal from "./Reveal";

// Lottie imports
import Lottie from "lottie-react";
import aiAnim from "../assets/lottie/ai-security.json";

function Story() {
  return (
    <section className="story section">
      <div className="container story-grid">
        
        {/* LEFT: PROBLEM + LOTTIE */}
        <Reveal>
          <div className="story-block">
            {/* LOTTIE ANIMATION */}
            <Lottie
              animationData={aiAnim}
              loop
              style={{ height: 260, marginBottom: 24 }}
            />

            <h2>The Problem</h2>
            <p>
              Modern organizations use hundreds of applications, AI tools,
              and browser extensions — most of them invisible to security
              teams. This creates blind spots and security risk.
            </p>
          </div>
        </Reveal>

        {/* RIGHT: SOLUTION */}
        <Reveal delay={0.1}>
          <div className="story-block">
            <h2>The KOI Solution</h2>
            <p>
              KOI continuously discovers software usage, analyzes risk in
              real time, and enforces policy automatically — giving
              security teams full control without slowing innovation.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Story;
