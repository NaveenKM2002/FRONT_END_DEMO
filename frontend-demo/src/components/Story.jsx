import "../styles/story.css";
import "../styles/layout.css";

function Story() {
  return (
    <section className="story section">
      <div className="container story-grid">
        {/* PROBLEM */}
        <div className="story-block">
          <h2>The Problem</h2>
          <p>
            Modern organizations use hundreds of applications, AI tools,
            and browser extensions — most of them invisible to security
            teams. This creates blind spots, compliance risks, and
            security exposure.
          </p>
        </div>

        {/* SOLUTION */}
        <div className="story-block">
          <h2>The KOI Solution</h2>
          <p>
            KOI continuously discovers software usage, analyzes risk in
            real time, and enforces policies automatically — giving
            security teams control without slowing innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Story;
