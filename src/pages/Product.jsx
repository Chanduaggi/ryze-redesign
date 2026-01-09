import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Product() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="section hero">
        <div className="hero-content">
          <h1>The Ryze Platform</h1>
          <p>
            Ryze is a revenue intelligence system that transforms customer
            conversations into real-time signals for sales, product, and
            marketing teams.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button>Book a Demo</button>
            <button className="secondary">View Platform Overview</button>
          </div>
        </div>
      </section>

      {/* Product pillars */}
      <section className="section">
        <h2 style={{ textAlign: "center" }}>A complete customer intelligence system</h2>
        <p style={{ textAlign: "center", maxWidth: 680, margin: "12px auto 64px" }}>
          Ryze works as a three-layer platform that continuously learns from
          conversations and compounds insight across your organization.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Capture</h3>
            <p>
              Connect calls, chats, emails, reviews, and feedback tools into one
              unified intelligence layer.
            </p>
          </div>

          <div className="feature-card">
            <h3>Understand</h3>
            <p>
              AI structures every interaction into intent, pain, sentiment,
              objections, and opportunity.
            </p>
          </div>

          <div className="feature-card">
            <h3>Activate</h3>
            <p>
              Push insights directly into CRM, Slack, product roadmaps, and
              decision workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Deep features */}
      <section className="section">
        <h2 style={{ textAlign: "center" }}>What you can do with Ryze</h2>

        <div className="steps-grid">

          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Conversation Intelligence</h3>
            <p>
              Automatically analyze every customer interaction to surface
              themes, risks, and opportunities.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Revenue Signal Detection</h3>
            <p>
              Identify churn risk, buying intent, expansion potential, and
              feature demand before it’s obvious.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Cross-team Intelligence</h3>
            <p>
              Give sales, marketing, and product teams a shared source of
              customer truth.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h3>Workflow Automation</h3>
            <p>
              Trigger alerts, CRM updates, product tickets, and insights
              pipelines automatically.
            </p>
          </div>

        </div>
      </section>

      {/* Platform value strip */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2>Built to scale with your company</h2>
        <p style={{ maxWidth: 720, margin: "12px auto 36px" }}>
          Whether you’re an early-stage team or an enterprise organization,
          Ryze adapts to your data, workflows, and growth model.
        </p>

        <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
          <div className="card">
            <h3>Enterprise Security</h3>
            <p>SOC-ready architecture, role-based access, data isolation.</p>
          </div>

          <div className="card">
            <h3>Fast Integrations</h3>
            <p>Plug into your stack in minutes, not months.</p>
          </div>

          <div className="card">
            <h3>Action-first Design</h3>
            <p>Insights don’t live in dashboards — they move teams.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <h2>See Ryze in action</h2>
        <p style={{ maxWidth: 600, margin: "12px auto 32px" }}>
          Book a personalized walkthrough and see how Ryze fits your revenue engine.
        </p>
        <button>Book a Demo</button>
      </section>

      <Footer />
    </>
  );
}
