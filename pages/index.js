// pages/index.js
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { Button } from "../components/ui/Button";
import { ShoppingBag, Instagram, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function KrishnaStore() {
  const whatsappLink = "https://wa.me/918764020205?text=Hello%20Krishna%20-%20The%20Lord%20of%20Fashion";
  const instagramLink = "https://instagram.com/krishnaanand534";

  return (
    <div className="min-h-screen bg-[#0f1f17] text-[#d4af37] font-serif">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#12261c] sticky top-0 z-50 border-b border-[#d4af37]/30">
        <div>
          <h1 className="text-3xl tracking-wide">Krishna</h1>
          <p className="text-xs uppercase tracking-widest">The Lord of Fashion</p>
        </div>
        <div className="flex gap-3">
          <a href={instagramLink} target="_blank">
            <Button className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f1f17]">
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </Button>
          </a>
          <a href={whatsappLink} target="_blank">
            <Button className="bg-[#7a1f2b] text-[#d4af37] hover:bg-[#5c1721]">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-20 items-center bg-gradient-to-b from-[#0f1f17] to-[#1b3326]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-5xl leading-tight mb-6">Where Tradition Drapes Elegance</h2>
          <p className="text-lg text-[#f0e6c8] mb-8">
            Handpicked daily & festive kurtis inspired by Indian palaces, warm candlelight, and timeless grace.
          </p>
          <div className="flex gap-4">
            <a href={whatsappLink} target="_blank">
              <Button size="lg" className="bg-[#7a1f2b] text-[#d4af37] hover:bg-[#5c1721]">
                <ShoppingBag className="mr-2 h-5 w-5" /> Order on WhatsApp
              </Button>
            </a>
            <a href="#collection">
              <Button size="lg" variant="outline" className="border-[#d4af37] text-[#d4af37]">Explore Collection</Button>
            </a>
          </div>
        </motion.div>
        <div className="rounded-2xl bg-[#1e3a2b] h-[420px] shadow-inner flex items-center justify-center">
          <span className="text-[#d4af37]/60">Hero Image (Palace / Ethnic Model)</span>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="px-8 py-10 bg-[#12261c]">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {["Handpicked Designs", "Premium Quality Fabrics", "Trusted by 1000+ Women"].map((item) => (
            <div key={item} className="flex flex-col items-center gap-3">
              <CheckCircle className="h-8 w-8" />
              <p className="tracking-wide">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="collection" className="px-8 py-16">
        <h3 className="text-3xl mb-10">Our Collections</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Daily Wear Kurtis", "Festive Kurtis", "New Arrivals"].map((cat) => (
            <Card key={cat} className="rounded-2xl overflow-hidden bg-[#1b3326] border border-[#d4af37]/30">
              <div className="h-56 bg-[#244735] flex items-center justify-center">Image</div>
              <CardContent className="p-5">
                <h4 className="text-xl mb-3">{cat}</h4>
                <a href={whatsappLink} target="_blank">
                  <Button className="w-full bg-[#7a1f2b] text-[#d4af37] hover:bg-[#5c1721]">Order on WhatsApp</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-8 py-20 bg-[#12261c]">
        <div className="max-w-3xl">
          <h3 className="text-3xl mb-6">About Krishna</h3>
          <p className="text-[#f0e6c8] leading-relaxed">
            Krishna is a celebration of Indian femininity and craftsmanship. Each kurti is chosen
            with care — reflecting palace-era richness, earthy tones, and the warmth of tradition.
            From everyday comfort to festive charm, we dress women in grace.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 bg-[#0a140f] border-t border-[#d4af37]/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Krishna — The Lord of Fashion</p>
        <div className="flex gap-4">
          <a href={instagramLink} target="_blank"><Instagram className="h-5 w-5" /></a>
          <a href={whatsappLink} target="_blank"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </footer>
    </div>
  );
}
