export default function Home() {
  return (
    <div style={styles.page}>
      
      {/* Decorative Roses */}
      <img
        src="/rose-top-left.png"
        alt="Rose"
        style={styles.roseTopLeft}
      />

      <img
        src="/rose-bottom-right.png"
        alt="Rose"
        style={styles.roseBottomRight}
      />

      {/* Floating Petals */}
      <img src="/petals.png" alt="Petal" style={styles.petal1} />
      <img src="/petals.png" alt="Petal" style={styles.petal2} />
      <img src="/petals.png" alt="Petal" style={styles.petal3} />

      {/* Top Right Buttons */}
      <div style={styles.socials}>
        <a
          href="https://wa.me/918764020205"
          target="_blank"
          style={styles.whatsapp}
        >
          WA
        </a>

        <a
          href="https://instagram.com/krishnaanand534"
          target="_blank"
          style={styles.instagram}
        >
          IG
        </a>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.title}>KRISHNA</h1>
        <p style={styles.subtitle}>The Lord of Fashion</p>

        <div style={styles.categories}>
          {[
            "Daily Wear",
            "Festive Wear",
            "Indo Western",
            "Dress Material",
            "Pants & Leggings",
          ].map((cat) => (
            <div key={cat} style={styles.card}>
              <h3>{cat}</h3>
              <a
                href={`https://wa.me/918764020205?text=Hi, I want to order from ${cat}`}
                target="_blank"
                style={styles.orderBtn}
              >
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <p style={styles.trust}>
          ✨ Handpicked • Premium Quality • Made with Love
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f1f17",
    color: "#d4af37",
    position: "relative",
    overflow: "hidden",
    fontFamily: "serif",
  },

  roseTopLeft: {
    position: "absolute",
    top: "-20px",
    left: "-20px",
    width: "120px",
    pointerEvents: "none",
  },

  roseBottomRight: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    width: "120px",
    pointerEvents: "none",
  },

  petal1: {
    position: "absolute",
    top: "40%",
    left: "10%",
    width: "40px",
    animation: "float 4s ease-in-out infinite",
  },

  petal2: {
    position: "absolute",
    top: "60%",
    right: "15%",
    width: "35px",
    animation: "float 5s ease-in-out infinite",
  },

  petal3: {
    position: "absolute",
    top: "25%",
    right: "40%",
    width: "30px",
    animation: "float 6s ease-in-out infinite",
  },

  socials: {
    position: "absolute",
    top: "15px",
    right: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    zIndex: 20,
  },

  whatsapp: {
    background: "#b11226",
    color: "#fff",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "6px",
  },

  instagram: {
    background: "#b11226",
    color: "#fff",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "6px",
  },

  content: {
    textAlign: "center",
    paddingTop: "120px",
  },

  title: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "40px",
  },

  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #d4af37",
    padding: "20px",
    borderRadius: "10px",
  },

  orderBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 14px",
    background: "#d4af37",
    color: "#0f1f17",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  trust: {
    marginTop: "40px",
    fontSize: "14px",
  },
};
