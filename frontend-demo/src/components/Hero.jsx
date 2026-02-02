import "../styles/hero.css";
import "../styles/layout.css";
import "../styles/ui.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>
          Secure Every Application.
          <br />
          Control Every Risk.
        </h1>

        <p>
          KOI gives security teams complete visibility into software,
          AI tools, and browser extensions — so nothing goes unnoticed.
        </p>

        <div className="hero-actions">
          <Link to="/demo" className="btn btn-primary">
            Request Demo
          </Link>

          <Link to="/platform" className="btn btn-outline">
            Explore Platform
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
