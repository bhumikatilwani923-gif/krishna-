{/* Hero Section */}
<section style={{
  position: "relative",
  textAlign: "center",
  background: "linear-gradient(to bottom, #1a2a1f, #3b1a1a, #12261c)",
  padding: "4rem 2rem",
  overflow: "hidden"
}}>

  {/* Rose petals */}
  <img src="/rose-top-left.png" alt="Rose" style={{
    position: "absolute",
    top: "-30px",
    left: "-30px",
    width: "100px",
    opacity: 0.3,
    pointerEvents: "none"
  }} />
  <img src="/rose-bottom-right.png" alt="Rose" style={{
    position: "absolute",
    bottom: "-30px",
    right: "-30px",
    width: "100px",
    opacity: 0.3,
    pointerEvents: "none"
  }} />
  <img src="/petal.png" alt="Petal" style={{
    position: "absolute",
    top: "40%",
    left: "20%",
    width: "40px",
    transform: "rotate(30deg)",
    opacity: 0.2,
    pointerEvents: "none"
  }} />
  <img src="/petal.png" alt="Petal" style={{
    position: "absolute",
    top: "30%",
    right: "25%",
    width: "35px",
    transform: "rotate(-45deg)",
    opacity: 0.2,
    pointerEvents: "none"
  }} />

  {/* Golden sparkles */}
  <div style={{
    position: "absolute",
    top: "10%",
    left: "50%",
    width: "2px",
    height: "2px",
    backgroundColor: "#ffd700",
    borderRadius: "50%",
    opacity: 0.6
  }}></div>
  <div style={{
    position: "absolute",
    bottom: "20%",
    right: "40%",
    width: "2px",
    height: "2px",
    backgroundColor: "#ffd700",
    borderRadius: "50%",
    opacity: 0.5
  }}></div>

  {/* Hero Text */}
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
    <h2 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#d4af37" }}>
      Where Tradition Drapes Elegance
    </h2>
    <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#f0e6c8" }}>
      Handpicked daily & festive kurtis inspired by Indian palaces, warm candlelight, and timeless grace.
    </p>
    <a href="https://wa.me/918764020205?text=Hello%20Krishna%20-%20The%20Lord%20of%20Fashion" target="_blank" rel="noreferrer">
      <button style={{
        backgroundColor: "#7a1f2b",
        color: "#d4af37",
        padding: "0.7rem 1.5rem",
        border: "2px solid #d4af37",
        borderRadius: "0.5rem",
        cursor: "pointer",
        marginTop: "1rem"
      }}>
        <ShoppingBag style={{ marginRight: "0.5rem" }} /> Order on WhatsApp
      </button>
    </a>
  </motion.div>
</section>
