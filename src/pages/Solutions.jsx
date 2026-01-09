import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Solutions() {
  const [active, setActive] = useState("sales");

  const personas = {
    sales: {
      title: "Sales Teams",
      tagline: "Close more deals with real customer intelligence.",
      pain: "Sales teams lose deals because critical buying signals, objections, and intent get buried in conversations.",
      value: [
        "Detect buying intent automatically",
        "Understand objections before deals stall",
        "Improve win-rates with real conversation data",
        "Shorten sales cycles with AI-driven insights"
      ],
      impact: ["+32% win-rate", "-21% sales cycle", "Real-time deal risk alerts"]
    },

    product: {
      title: "Product Teams",
      tagline: "Build what customers are actually asking for.",
      pain: "Product teams rely on filtered feedback and opinions instead of real user evidence.",
      value: [
        "See real user pain across every channel",
        "Prioritize features with evidence, not opinions",
        "Spot churn signals early",
        "Validate roadmap decisions continuously"
      ],
      impact: ["Evidence-based roadmaps", "Reduced churn risk", "Faster product discovery"]
    },

    marketing: {
      title: "Marketing Teams",
      tagline: "Turn conversations into high-converting messaging.",
      pain: "Marketing teams struggle to turn customer language into campaigns that actually convert.",
      value: [
        "Extract real customer language",
        "Identify high-intent segments",
        "Discover new positioning opportunities",
        "Build campaigns grounded in reality"
      ],
      impact: ["Higher conversion rates", "Clearer positioning", "Faster campaign validation"]
    }
  };

  const current = personas[active];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="section hero">
        <div className="hero-content" style={{textAlign:"center"}}>
          <h1>Solutions for every growth team</h1>
          <p style={{maxWidth:680,margin:"12px auto 0"}}>
            Ryze adapts to how different teams work — while keeping everyone aligned
            around the same source of customer truth.
          </p>
        </div>
      </section>

      {/* Persona selector */}
      <section className="section">
        <div className="tabs">
          <button onClick={()=>setActive("sales")} className={active==="sales"?"tab active":"tab"}>Sales</button>
          <button onClick={()=>setActive("product")} className={active==="product"?"tab active":"tab"}>Product</button>
          <button onClick={()=>setActive("marketing")} className={active==="marketing"?"tab active":"tab"}>Marketing</button>
        </div>

        {/* Persona content */}
        <div className="usecase-card" style={{textAlign:"left"}}>

          <h2>{current.title}</h2>
          <p style={{fontSize:18, marginBottom:16}}><strong>{current.tagline}</strong></p>
          <p className="muted">{current.pain}</p>

          <ul style={{marginTop:24}}>
            {current.value.map((v,i)=>(
              <li key={i}>✓ {v}</li>
            ))}
          </ul>

          <div style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:24}}>
            {current.impact.map((m,i)=>(
              <span key={i} className="badge">{m}</span>
            ))}
          </div>

          <div style={{marginTop:32}}>
            <button>See it in action</button>
          </div>

        </div>
      </section>

      {/* Cross-team value */}
      <section className="section" style={{textAlign:"center"}}>
        <h2>One intelligence layer. Every team aligned.</h2>
        <p style={{maxWidth:720,margin:"12px auto 36px"}}>
          Ryze eliminates silos by turning every conversation into structured,
          shareable intelligence that compounds across the organization.
        </p>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24}}>
          <div className="card">
            <h3>Sales</h3>
            <p>Close with clarity, not guesses.</p>
          </div>
          <div className="card">
            <h3>Product</h3>
            <p>Build with evidence, not opinions.</p>
          </div>
          <div className="card">
            <h3>Marketing</h3>
            <p>Position with reality, not assumptions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{textAlign:"center"}}>
        <h2>Find out how Ryze fits your team</h2>
        <p style={{maxWidth:600,margin:"12px auto 32px"}}>
          Book a personalized walkthrough tailored to your goals and workflows.
        </p>
        <button>Book a Demo</button>
      </section>

      <Footer />
    </>
  );
}
