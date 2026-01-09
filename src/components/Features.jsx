
export default function Features() {
  const features = [
    {
      title: "Unified Conversation Capture",
      desc: "Automatically collect calls, chats, emails, and feedback into one intelligence layer."
    },
    {
      title: "Customer Intent Intelligence",
      desc: "AI extracts pain points, objections, sentiment, and buying signals in real time."
    },
    {
      title: "Revenue Signal Engine",
      desc: "Surface patterns that predict churn, conversion, and expansion opportunities."
    },
    {
      title: "Workflow Activation",
      desc: "Route insights directly into CRM, Slack, Notion, or product backlogs."
    },
    {
      title: "Team-Level Visibility",
      desc: "Align sales, marketing, and product on one shared source of customer truth."
    },
    {
      title: "Enterprise-grade Trust",
      desc: "Built with security, privacy, and scalability at the core."
    }
  ];

  return (
    <section className="section">
      <h2 style={{ textAlign: "center" }}>Built for modern revenue teams</h2>
      <p style={{ textAlign: "center", maxWidth: 620, margin: "12px auto 56px" }}>
        Ryze turns unstructured conversations into structured intelligence your teams can act on.
      </p>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
