import "../styles/cta.css";
import "../styles/layout.css";
import "../styles/ui.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <h2>See Your Software Risk — Clearly</h2>
            <p>
              Join forward-thinking security teams using KOI to gain
              visibility, reduce risk, and control modern software usage.
            </p>

            <Link to="/demo" className="btn btn-primary">
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
