import "../styles/features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose KOI</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Complete Visibility</h3>
          <p>See every application, package, and AI tool in use.</p>
        </div>

        <div className="feature-card">
          <h3>Risk Detection</h3>
          <p>Identify risky software before it becomes a threat.</p>
        </div>

        <div className="feature-card">
          <h3>Policy Control</h3>
          <p>Enforce security policies across your organization.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
