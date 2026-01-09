
export default function Pricing() {
  return (
    <section className="section">
      <h2 style={{ textAlign: "center" }}>Simple, transparent pricing</h2>
      <p style={{ textAlign: "center", maxWidth: 520, margin: "12px auto 48px" }}>
        Choose a plan that fits your team. Upgrade anytime as you scale.
      </p>

      <div className="pricing-grid">

        {/* Starter */}
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">$29<span>/mo</span></p>
          <p className="muted">For early teams</p>
          <ul>
            <li>Conversation capture</li>
            <li>Basic AI insights</li>
            <li>1 workspace</li>
            <li>Email support</li>
          </ul>
          <button className="secondary">Get Started</button>
        </div>

        {/* Growth */}
        <div className="pricing-card popular">
          <span className="badge">Most Popular</span>
          <h3>Growth</h3>
          <p className="price">$99<span>/mo</span></p>
          <p className="muted">For scaling teams</p>
          <ul>
            <li>Everything in Starter</li>
            <li>Advanced AI intelligence</li>
            <li>CRM integrations</li>
            <li>Priority support</li>
          </ul>
          <button>Book a Demo</button>
        </div>

        {/* Enterprise */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <p className="muted">For large organizations</p>
          <ul>
            <li>Custom workflows</li>
            <li>Dedicated success manager</li>
            <li>Private deployment</li>
            <li>24/7 support</li>
          </ul>
          <button className="secondary">Contact Sales</button>
        </div>

      </div>
    </section>
  );
}

