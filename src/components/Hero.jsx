
export default function Hero(){
  return(
    <section className="section hero">
      <div className="hero-content">
        <h1>Turn conversations into revenue intelligence.</h1>
        <p>
          Ryze listens, understands, and activates customer signals so teams close faster and build smarter.
        </p>

        <div style={{
  marginTop:24,
  display:"flex",
  gap:16,
  flexWrap:"wrap"
}}>

          <button>Book a Demo</button>
          <button className="secondary">Watch Overview</button>
        </div>
      </div>
    </section>
  )
}
