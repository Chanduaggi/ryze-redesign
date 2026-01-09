import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Header />
      <section className="section">
        <h1>Pricing</h1>
        <p>Simple, transparent pricing designed to scale with your team.</p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24,marginTop:32}}>
          <div className="card">
            <h3>Starter</h3>
            <p>For early teams testing revenue intelligence.</p>
            <p><strong>$29 / month</strong></p>
            <button>Get Started</button>
          </div>

          <div className="card">
            <h3>Growth</h3>
            <p>For scaling teams.</p>
            <p><strong>$99 / month</strong></p>
            <button>Book Demo</button>
          </div>

          <div className="card">
            <h3>Enterprise</h3>
            <p>Custom workflows and integrations.</p>
            <p><strong>Custom</strong></p>
            <button>Contact Sales</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
