
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Ryze changed how we understand customers. Our demo-to-close rate jumped 32% in 60 days.",
    name: "Sarah Mitchell",
    role: "Head of Sales, NovaTech"
  },
  {
    quote: "Instead of guessing what users want, we now see real patterns across every interaction.",
    name: "Arjun Rao",
    role: "Product Lead, Cloudify"
  },
  {
    quote: "Sales, product, and marketing are finally aligned on one source of customer truth.",
    name: "Emily Carter",
    role: "Growth Director, BrightOps"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <h2 style={{ textAlign: "center" }}>What teams are saying</h2>
      <p style={{ textAlign: "center", maxWidth: 620, margin: "12px auto 56px" }}>
        Real results from modern revenue teams using Ryze.
      </p>

      <div className="testimonial-slider">
        <div key={index} className="testimonial-animated">
          <p className="quote">“{testimonials[index].quote}”</p>
          <h4>{testimonials[index].name}</h4>
          <span>{testimonials[index].role}</span>
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
