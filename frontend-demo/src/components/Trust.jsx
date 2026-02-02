import "../styles/trust.css";
import "../styles/layout.css";
import Reveal from "./Reveal";

function Trust() {
  return (
    <section className="trust section-sm">
      <div className="container trust-inner">
        <Reveal>
          <h3>Trusted by security-first teams</h3>
        </Reveal>

        <div className="trust-logos">
          {["FINTECH", "HEALTH", "ENTERPRISE", "AI LABS", "GLOBAL IT"].map(
            (logo, i) => (
              <Reveal key={logo} delay={i * 0.05}>
                <div className="trust-logo">{logo}</div>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Trust;
