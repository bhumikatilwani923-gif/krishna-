     // pages/index.js
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { Button } from "../components/ui/Button";
import { ShoppingBag, Instagram, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function KrishnaStore() {
  const whatsappLink = "https://wa.me/918764020205?text=Hello%20Krishna%20-%20The%20Lord%20of%20Fashion";
  const instagramLink = "https://instagram.com/krishnaanand534";

  // Inline styles
  const goldText = { color: "#d4af37" };
  const sectionPadding = { padding: "4rem 2rem" };
  const cardStyle = {
    background: "linear-gradient(to bottom right, #244735, #3b1a1a, #1a2a1f)",
    border: "2px solid #d4af37",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    overflow: "hidden"
  };
  const buttonStyleSmall = {
    backgroundColor: "transparent",
    color: "#d4af37",
    padding: "0.3rem 0.6rem",
    border: "1px solid #d4af37",
    borderRadius: "0.3rem",
    cursor: "pointer",
    fontSize: "0.8rem",
    display: "flex",
    alignItems: "center",
    gap: "0.2rem"
  };
  const buttonStyle = {
    backgroundColor: "#7a1f2b",
    color: "#d4af37",
    padding: "0.7rem 1.5rem",
    border: "2px solid #d4af37",
    borderRadius: "0.5rem",
    cursor: "pointer",
    marginTop: "1rem"
  };

  return (
    <div style={{ fontFamily: "serif", backgroundColor: "#0f1f17", position: "relative" }}>
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#1a2a1f",
        borderBottom: "2px solid #d4af37",
        position: "relative"
      }}>
        <div>
          <h1 style={{ ...goldText, fontSize: "2rem" }}>Krishna</h1>
          <p style={{ ...goldText, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Lord of Fashion
          </p>
        </div>
        {/* Small buttons on the top-right corner */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href={instagramLink} target="_blank" rel="noreferrer">
            <button style={buttonStyleSmall}><Instagram style={{ fontSize: "1rem" }} /> Instagram</button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button style={buttonStyleSmall}><MessageCircle style={{ fontSize: "1rem" }} /> WhatsApp</button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        ...sectionPadding,
        textAlign: "center",
        background: "linear-gradient(to bottom, #1a2a1f, #3b1a1a, #12261c)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Rose petals */}
        <img src="/rose-top-left.png" alt="Rose" style={{ position: "absolute", top: "-30px", left: "-30px", width: "100px", opacity: 0.3, pointerEvents: "none" }} />
        <img src="/rose-bottom-right.png" alt="Rose" style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "100px", opacity: 0.3, pointerEvents: "none" }} />
        <img src="/petal.png" alt="Petal" style={{ position: "absolute", top: "40%", left: "20%", width: "40px", transform: "rotate(30deg)", opacity: 0.2, pointerEvents: "none" }} />
        <img src="/petal.png" alt="Petal" style={{ position: "absolute", top: "30%", right: "25%", width: "35px", transform: "rotate(-45deg)", opacity: 0.2, pointerEvents: "none" }} />
        
        {/* Golden sparkle hints */}
        <div style={{ position: "absolute", top: "10%", left: "50%", width: "2px", height: "2px", backgroundColor: "#ffd700", borderRadius: "50%", opacity: 0.6 }}></div>
        <div style={{ position: "absolute", bottom: "20%", right: "40%", width: "2px", height: "2px", backgroundColor: "#ffd700", borderRadius: "50%", opacity: 0.5 }}></div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem", ...goldText }}>Where Tradition Drapes Elegance</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#f0e6c8" }}>
            Handpicked daily & festive kurtis inspired by Indian palaces, warm candlelight, and timeless grace.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <button style={buttonStyle}><ShoppingBag style={{ marginRight: "0.5rem" }} /> Order on WhatsApp</button>
          </a>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section style={{ ...sectionPadding, backgroundColor: "#12261c", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
          {["Handpicked Designs", "Premium Quality Fabrics", "Trusted by 1000+ Women"].map((item) => (
            <div key={item} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <CheckCircle style={{ color: "#d4af37", fontSize: "2rem" }} />
              <p style={{ ...goldText }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection */}
      <section id="collection" style={{ ...sectionPadding, backgroundColor: "#1b3326" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "2rem", ...goldText }}>Our Collections</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "2rem" }}>
          {["Daily Wear Kurtis", "Festive Kurtis", "New Arrivals"].map((cat) => (
            <Card key={cat} style={cardStyle}>
              <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "#d4af37" }}>Image</div>
              <CardContent style={{ padding: "1rem" }}>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", ...goldText }}>{cat}</h4>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  <button style={buttonStyle}>Order on WhatsApp</button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ ...sectionPadding, backgroundColor: "#12261c", maxWidth: "800px", margin: "0 auto" }}>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem", ...goldText }}>About Krishna</h3>
        <p style={{ color: "#f0e6c8", lineHeight: "1.6" }}>
          Krishna is a celebration of Indian femininity and craftsmanship. Each kurti is chosen
          with care — reflecting palace-era richness, earthy tones, and the warmth of tradition.
          From everyday comfort to festive charm, we dress women in grace.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", backgroundColor: "#0a140f", borderTop: "2px solid #d4af37", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", position: "relative" }}>
        {/* Subtle golden sparkle */}
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "2px", height: "2px", backgroundColor: "#ffd700", borderRadius: "50%", opacity: 0.6 }}></div>
        <p style={{ ...goldText, fontSize: "0.9rem" }}>© {new Date().getFullYear()} Krishna — The Lord of Fashion</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={instagramLink} target="_blank" rel="noreferrer"><Instagram style={{ color: "#d4af37", fontSize: "1.5rem" }} /></a>
          <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle style={{ color: "#d4af37", fontSize: "1.5rem" }} /></a>
        </div>
      </footer>
    </div>
  );
            } 
