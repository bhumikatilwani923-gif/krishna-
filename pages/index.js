// pages/index.js
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export default function KrishnaStore() {
  const whatsappNumber = "918764020205";
  const instagramLink = "https://instagram.com/krishnaanand534";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const goldText = { color: "#d4af37" };
  const sectionPadding = { padding: "3rem 2rem" };

  const categories = [
    {
      name: "Daily Wear",
      products: [
        { name: "Cotton Kurti", image: "/product1.jpg" },
        { name: "Simple Kurti", image: "/product2.jpg" },
      ],
    },
    {
      name: "Festive Wear",
      products: [
        { name: "Embroidered Kurti", image: "/product3.jpg" },
        { name: "Silk Kurti", image: "/product4.jpg" },
      ],
    },
    {
      name: "Indo Western",
      products: [
        { name: "Fusion Dress", image: "/product5.jpg" },
        { name: "Cape Kurti", image: "/product6.jpg" },
      ],
    },
    {
      name: "Dress Material",
      products: [
        { name: "Cotton Dress Material", image: "/product7.jpg" },
        { name: "Silk Dress Material", image: "/product8.jpg" },
      ],
    },
    {
      name: "Pants & Leggings",
      products: [
        { name: "Cotton Pants", image: "/product9.jpg" },
        { name: "Churidar Leggings", image: "/product10.jpg" },
      ],
    },
  ];

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
          <a href={`${whatsappLink}?text=Hi Krishna!`} target="_blank" rel="noreferrer">
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
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(to bottom, #1a2a1f, #3b1a1a, #12261c)",
        position: "relative",
        overflow: "hidden"
      }}>
        <img src="/rose-top-left.jpg" alt="Rose" style={{
          position: "absolute",
          top: "-30px",
          left: "-30px",
          width: "100px",
          opacity: 0.3,
          pointerEvents: "none"
        }} />
        <img src="/rose-bottom-right.jpg" alt="Rose" style={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          width: "100px",
          opacity: 0.3,
          pointerEvents: "none"
        }} />
        <img src="/petal.jpg" alt="Petal" style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "40px",
          transform: "rotate(30deg)",
          opacity: 0.2,
          pointerEvents: "none"
        }} />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#d4af37" }}>
            Where Tradition Drapes Elegance
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem", color: "#f0e6c8" }}>
            Handpicked daily & festive kurtis inspired by Indian palaces, warm candlelight, and timeless grace.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <section key={category.name} style={sectionPadding}>
          <h2 style={{ ...goldText, fontSize: "2rem", marginBottom: "2rem" }}>{category.name}</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem"
          }}>
            {category.products.map((product) => (
              <Card key={product.name} style={{ background: "#1a2a1f", border: "2px solid #d4af37" }}>
                <CardContent>
                  <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "0.5rem" }} />
                  <h3 style={{ color: "#d4af37", marginTop: "0.5rem" }}>{product.name}</h3>
                  <a href={`${whatsappLink}?text=Hi Krishna! I want to order ${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">
                    <button style={{
                      backgroundColor: "#7a1f2b",
                      color: "#d4af37",
                      padding: "0.5rem 1rem",
                      border: "2px solid #d4af37",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                      marginTop: "0.5rem"
                    }}>
                      Order on WhatsApp
                    </button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      {/* Trust Section */}
      <section style={{ ...sectionPadding, textAlign: "center" }}>
        <h2 style={{ ...goldText, fontSize: "2rem", marginBottom: "1rem" }}>Handpicked & Best Quality</h2>
        <p style={{ color: "#f0e6c8" }}>Every product is carefully selected to ensure premium quality and craftsmanship.</p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem", textAlign: "center", color: "#f0e6c8", borderTop: "2px solid #d4af37" }}>
        © 2025 Krishna – The Lord of Fashion
      </footer>

    </div>
  );
}
