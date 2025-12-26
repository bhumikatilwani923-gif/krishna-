// pages/index.js
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { Button } from "../components/ui/Button";
import { ShoppingBag, Instagram, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function KrishnaStore() {
  const whatsappLink = "https://wa.me/918764020205?text=Hello%20Krishna%20-%20The%20Lord%20of%20Fashion";
  const instagramLink = "https://instagram.com/krishnaanand534";

  const goldText = { color: "#d4af37" };
  const sectionPadding = { padding: "4rem 2rem" };
  const cardStyle = {
    background: "linear-gradient(to bottom right, #244735, #3b1a1a, #1a2a1f)",
    border: "2px solid #d4af37",
    borderRadius: "1rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    overflow: "hidden"
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
          <p style={{ ...goldText, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>The Lord of Fashion</p>
        </div>

        {/* Red vertical buttons */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          position: "absolute",
          top: "1rem",
          right: "1rem"
        }}>
          <a href={instagramLink} target="_blank" rel="noreferrer">
            <div style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#b91c1c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              <Instagram style={{ color: "#d4af37", fontSize: "1.2rem" }} />
            </div>
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer">
            <div style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#b91c1c",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              cursor: "pointer"
            }}>
              <MessageCircle style={{ color: "#d4af37", fontSize: "1.2rem" }} />
            </div>
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
          <a href={whatsappLink} target="_blank" rel="noreferrer">
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

      {/* Other sections (Trust, Collection, About, Footer) remain same as before */}

    </div>
  );
        }
