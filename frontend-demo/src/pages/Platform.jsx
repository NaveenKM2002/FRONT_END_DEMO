import "../styles/platform.css";
import "../styles/layout.css";
import Reveal from "../components/Reveal";

import workflowImg from "../assets/images/platform-workflow.png";

function Platform() {
  return (
    <main className="container">
      {/* HERO */}
      <section className="platform-hero">
        <Reveal>
          <h1>Complete Application Security Platform</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p>
            KOI provides deep visibility, intelligent risk analysis,
            and automated control across modern software and AI tools.
          </p>
        </Reveal>
      </section>

      {/* VISUAL WORKFLOW SECTION */}
      <section className="platform-visual section">
        <div className="platform-visual-grid">
          
          {/* LEFT: TEXT */}
          <Reveal>
            <div>
              <h2>See Risk Before It Becomes a Threat</h2>
              <p>
                KOI continuously maps your application ecosystem,
                analyzes risk signals, and enforces security policies
                in real time — without disrupting teams.
              </p>
            </div>
          </Reveal>

          {/* RIGHT: IMAGE */}
          <Reveal delay={0.2}>
            <img
              src={workflowImg}
              alt="Security workflow visualization"
              className="platform-image"
            />
          </Reveal>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="platform-section">
        <h2>Core Capabilities</h2>

        <div className="platform-grid">
          <div className="platform-card">
            <h3>Continuous Discovery</h3>
            <p>
              Automatically identify every application, AI tool,
              and extension in use.
            </p>
          </div>

          <div className="platform-card">
            <h3>Risk Intelligence</h3>
            <p>
              Analyze software behavior, vulnerabilities, and
              compliance posture.
            </p>
          </div>

          <div className="platform-card">
            <h3>Policy Enforcement</h3>
            <p>
              Enforce controls automatically without slowing work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Platform;
