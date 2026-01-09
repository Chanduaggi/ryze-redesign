
export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect your ecosystem",
      desc: "Plug Ryze into your calls, chats, CRM, and feedback tools in minutes."
    },
    {
      step: "02",
      title: "Ryze learns your customers",
      desc: "AI structures every interaction into intent, pain, sentiment, and opportunity."
    },
    {
      step: "03",
      title: "Your teams act on signals",
      desc: "Insights flow into sales, marketing, and product workflows automatically."
    }
  ];

  return (
    <section className="section">
      <h2 style={{ textAlign: "center" }}>How Ryze works</h2>
      <p style={{ textAlign: "center", maxWidth: 600, margin: "12px auto 56px" }}>
        A simple three-layer system that compounds customer intelligence every day.
      </p>

      <div className="steps-grid">
        {steps.map((s, i) => (
          <div key={i} className="step-card">
            <span className="step-number">{s.step}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

