import "../styles/platform.css";
import "../styles/layout.css";

function Platform() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="platform-hero">
        <h1>Complete Application Security Platform</h1>
        <p>
          Gain full visibility, detect risks, and enforce policies across
          every application and AI tool in your organization.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section className="platform-section">
        <h2>Core Capabilities</h2>

        <div className="platform-grid">
          <div className="platform-card">
            <h3>Application Discovery</h3>
            <p>
              Automatically discover every application, package, and
              browser extension in use.
            </p>
          </div>

          <div className="platform-card">
            <h3>Risk Analysis</h3>
            <p>
              Identify vulnerable, malicious, or non-compliant software
              before it becomes a threat.
            </p>
          </div>

          <div className="platform-card">
            <h3>Policy Enforcement</h3>
            <p>
              Define and enforce security policies across teams and devices.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="platform-section">
        <h2>How It Works</h2>

        <ol className="platform-steps">
          <li>
            <strong>Discover</strong> — Identify all software and AI usage.
          </li>
          <li>
            <strong>Analyze</strong> — Detect risks using intelligent analysis.
          </li>
          <li>
            <strong>Control</strong> — Enforce policies and reduce exposure.
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="platform-cta">
        <h2>See the Platform in Action</h2>
        <p>Request a demo to understand how KOI secures modern software.</p>
        <a href="/demo" className="cta-btn">Request Demo</a>
      </section>
    </div>
  );
}

export default Platform;
