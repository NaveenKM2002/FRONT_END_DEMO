import "../styles/how.css";
import "../styles/layout.css";
import Reveal from "./Reveal";

function HowItWorks() {
  return (
    <section className="how section">
      <div className="container">
        <Reveal>
          <div className="how-header">
            <h2>How KOI Works</h2>
            <p>Visibility, analysis, and control — unified.</p>
          </div>
        </Reveal>

        <div className="how-steps">
          {[
            { t: "Discover", d: "Identify all software and AI usage." },
            { t: "Analyze", d: "Detect risk and policy violations." },
            { t: "Control", d: "Enforce rules without friction." },
          ].map((step, i) => (
            <Reveal key={step.t} delay={i * 0.1}>
              <div className="how-step">
                <div className="step-number">Step {`0${i + 1}`}</div>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
