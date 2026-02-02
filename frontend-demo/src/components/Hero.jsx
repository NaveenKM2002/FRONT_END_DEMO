import "../styles/hero.css";
import "../styles/layout.css";
import "../styles/ui.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

import heroImage from "../assets/images/hero-ai.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "40px", alignItems: "center" }}>
        
        {/* TEXT */}
        <div>
          <Reveal>
            <h1>
              Secure Every Application.
              <br />
              Control Every Risk.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              KOI gives security teams complete visibility into software,
              AI tools, and browser extensions.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hero-actions">
              <Link to="/demo" className="btn btn-primary">
                Request Demo
              </Link>
              <Link to="/platform" className="btn btn-outline">
                Explore Platform
              </Link>
            </div>
          </Reveal>
        </div>

        {/* IMAGE */}
        <Reveal delay={0.3}>
          <img
            src={heroImage}
            alt="AI Security Visualization"
            style={{
              width: "100%",
              maxWidth: "520px",
              filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.5))",
            }}
          />
        </Reveal>

      </div>
    </section>
  );
}

export default Hero;
