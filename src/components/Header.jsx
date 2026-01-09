
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <strong>RYZE</strong>

      {/* Desktop nav */}
      <nav className="desktop-nav">
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/solutions">Solutions</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
      </nav>

      <div className="desktop-cta">
        <button>Book a Demo</button>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <NavLink to="/product" onClick={() => setOpen(false)}>Product</NavLink>
          <NavLink to="/solutions" onClick={() => setOpen(false)}>Solutions</NavLink>
          <NavLink to="/pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
          <button style={{ marginTop: 16 }}>Book a Demo</button>
        </div>
      )}
    </header>
  );
}




