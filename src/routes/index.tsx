import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Palette,
  Layers,
  Leaf,
  Star,
  Package,
  Globe,
  Zap,
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Globe2,
  MessageCircle,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "HH Textiles | Premium Textile Manufacturer — Scarves, Bags & Dresses | Noida, India",
      },
      {
        name: "description",
        content:
          "HH Textiles is a premium textile manufacturer based in Noida with 50+ years of heritage. We manufacture custom scarves, bags, dresses, and accessories using block printing, screen printing & digital printing. AZO-free dyes. Flexible MOQ.",
      },
      {
        property: "og:title",
        content: "HH Textiles | Premium Textile Manufacturer — Noida, India",
      },
      {
        property: "og:description",
        content:
          "50+ years of artisan heritage. Custom scarves, bags, dresses and accessories.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const products = [
  {
    name: "Cotton Quilted Bags",
    desc: "Handcrafted quilted bags in custom sizes, prints, and designs — made with premium organic cotton.",
  },
  {
    name: "Scarves",
    desc: "Custom scarves in silk, cotton, modal, wool, linen, viscose, and sustainable fabrics — available in all sizes and finishes.",
  },
  {
    name: "Dresses",
    desc: "Artisan-crafted dresses and garments with intricate prints and exceptional fabric quality.",
  },
  {
    name: "Pouches & Cosmetic Bags",
    desc: "Block-printed and screen-printed pouches and travel bags in any size or design.",
  },
  {
    name: "Tote Bags",
    desc: "Sustainable, stylish cotton tote bags with full-custom print options.",
  },
  {
    name: "Fashion Accessories",
    desc: "Complete textile accessories — from sarongs to fashion pieces — built to your brand vision.",
  },
];

const capabilities = [
  {
    title: "Block Printing",
    icon: Scissors,
    desc: "Rooted in artisan heritage, block printing has been a part of our journey for generations. Traditional handcrafted techniques combined with modern manufacturing create textiles of authenticity and character.",
  },
  {
    title: "Screen Printing",
    icon: Layers,
    desc: "As our journey evolved from traditional craftsmanship to modern manufacturing, screen printing became a natural extension — combining precision, vibrant detailing, and scalability.",
  },
  {
    title: "Digital Printing",
    icon: Palette,
    desc: "Blending creativity with modern technology, our digital printing capabilities create highly detailed, vibrant, and precise textiles with exceptional colour accuracy. Ideal for long production runs and intricate designs.",
  },
];

const whyUs = [
  {
    icon: Star,
    title: "50+ Years of Artisan Heritage",
    desc: "Built on generations of textile craftsmanship, quality, and trust.",
  },
  {
    icon: Scissors,
    title: "Complete Customisation Support",
    desc: "From scarves and dresses to bags and pouches, every product developed as per your brand vision.",
  },
  {
    icon: Layers,
    title: "Wide Range of Printing Techniques",
    desc: "Block Printing, Screen Printing, Digital Printing, Embroidery, Foil Work, and handcrafted detailing.",
  },
  {
    icon: Package,
    title: "Access to Thousands of Fabrics",
    desc: "Silk, cotton, modal, wool, linen, viscose, sustainable, and organic fabric options.",
  },
  {
    icon: Palette,
    title: "Pantone Colour Matching",
    desc: "Accurate colour development and sampling support for brand consistency.",
  },
  {
    icon: Zap,
    title: "Flexible MOQ & Development",
    desc: "Designed to support both emerging labels and established global brands.",
  },
  {
    icon: Leaf,
    title: "Sustainable Approach",
    desc: "AZO-free dyes, responsible sourcing, and long-standing artisan collaborations.",
  },
  {
    icon: Globe,
    title: "Concept to Production",
    desc: "We transform creative ideas into refined textile products with precision, craftsmanship, and reliability.",
  },
];

const customise = {
  Fabrics: [
    "Silk",
    "Cotton",
    "Modal",
    "Wool",
    "Linen",
    "Viscose",
    "Organic Cotton",
    "Sustainable Blends",
  ],
  Techniques: [
    "Block Printing",
    "Screen Printing",
    "Digital Printing",
    "Embroidery",
    "Foil Work",
    "Handcrafted Detailing",
  ],
  Finishes: [
    "Fringes",
    "Tassels",
    "Custom Labels",
    "Luxury Packaging",
    "Pantone Colour Matching",
    "Custom Sizes",
  ],
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        {/* HERO */}
        <section
          className="relative min-h-screen flex items-center texture-linen overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--olive-deep) 0%, var(--olive) 55%, var(--olive-deep) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              background:
                "radial-gradient(900px 500px at 80% 20%, var(--gold), transparent 60%), radial-gradient(700px 400px at 10% 80%, var(--cream), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 texture-linen opacity-40" aria-hidden />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 md:py-40 w-full">
            <Reveal>
              <span className="inline-block text-cream/70 tracking-[0.32em] text-xs font-medium uppercase border-b border-cream/30 pb-1">
                Est. Noida · India
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-display font-semibold text-cream leading-[1.02] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl">
                Crafted by Heritage. <br />
                <span className="italic font-medium text-[color:var(--gold)]">
                  Built for the World.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 text-cream/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                Premium textile manufacturing from Noida, India — scarves, bags,
                dresses & more, tailored to your brand.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="bg-cream text-[color:var(--olive-deep)] px-7 py-4 rounded-full font-medium hover:bg-white transition-colors inline-flex items-center gap-2"
                >
                  Explore Our Products <ArrowRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="border border-cream/40 text-cream px-7 py-4 rounded-full font-medium hover:bg-cream/10 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 text-xs tracking-[0.3em]">
            SCROLL
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-24 md:py-36 texture-paper"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <Reveal>
              <span className="text-accent tracking-[0.3em] text-xs font-medium uppercase">
                Our Story
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Three generations of textile artistry.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-10 text-foreground/80 text-lg leading-[1.85]">
                HH Textiles was born from generations of craftsmanship. More than 50 years
                ago, our grandparents began their journey as textile artisans with a dream
                of building a manufacturing company rooted in trust, transparency, and
                quality. Our journey started with handcrafted textiles and slowly expanded
                to international markets, where our first clients in France believed in
                our craftsmanship and vision. Long before sustainability became an
                industry trend, we were already working with AZO-free dyes and
                artisan-made fabrics. Today, HH Textiles offers complete textile
                manufacturing solutions with block printing, screen printing, digital
                printing, and access to thousands of fabrics — all transformed into
                scarves, bags, dresses, and fashion accessories.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-10 font-display italic text-2xl md:text-3xl text-primary">
                HH Textiles <span className="text-accent">—</span> Quality · Craft · Trust
              </p>
            </Reveal>

            <div className="mt-16 grid sm:grid-cols-3 gap-6">
              {[
                { n: "50+ Years", l: "Heritage" },
                { n: "3 Continents", l: "Clients Served" },
                { n: "1000s", l: "Fabrics Available" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 120}>
                  <div className="bg-white border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="font-display text-4xl md:text-5xl text-primary">
                      {s.n}
                    </div>
                    <div className="mt-2 text-sm tracking-[0.25em] uppercase text-foreground/60">
                      {s.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="py-24 md:py-36 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-accent tracking-[0.3em] text-xs font-medium uppercase">
                  Our Products
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                  What we craft.
                </h2>
                <p className="mt-5 text-foreground/70 text-lg">
                  A glimpse of what we craft — every piece fully customisable to your
                  brand.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 100}>
                  <article className="group border border-border rounded-2xl overflow-hidden bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                    <div
                      className="aspect-[4/5] relative overflow-hidden"
                      role="img"
                      aria-label={`${p.name} placeholder`}
                    >
                      <div
                        className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-110 texture-linen"
                        style={{
                          background: `linear-gradient(${135 + i * 25}deg, var(--olive-deep), var(--olive) 60%, var(--olive-light))`,
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-30 mix-blend-overlay"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 30%, var(--gold), transparent 55%)",
                        }}
                      />
                      <div className="absolute bottom-5 left-5 text-cream/85 font-display text-sm tracking-[0.3em] uppercase">
                        {String(i + 1).padStart(2, "0")} · {p.name.split(" ")[0]}
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-2xl text-primary">{p.name}</h3>
                      <p className="mt-3 text-foreground/70 leading-relaxed text-sm">
                        {p.desc}
                      </p>
                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-accent text-sm font-medium group/link"
                      >
                        Learn More
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-1"
                        />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="py-24 md:py-36 texture-linen relative"
          style={{ backgroundColor: "var(--olive-deep)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-[color:var(--gold)] tracking-[0.3em] text-xs font-medium uppercase">
                  Capabilities
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                  Our Printing Capabilities
                </h2>
                <p className="mt-5 text-cream/70 text-lg">
                  Three expert techniques, one commitment to quality.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={i * 130}>
                    <div className="h-full rounded-2xl p-8 border border-cream/15 bg-white/5 backdrop-blur-sm hover:border-[color:var(--gold)]/60 hover:bg-white/8 transition-all duration-500">
                      <div className="w-14 h-14 rounded-xl border border-[color:var(--gold)]/50 flex items-center justify-center text-[color:var(--gold)] mb-6">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl text-cream">{c.title}</h3>
                      <p className="mt-4 text-cream/70 leading-relaxed text-sm">
                        {c.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section
          id="why"
          className="py-24 md:py-36"
          style={{ backgroundColor: "var(--cream)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-accent tracking-[0.3em] text-xs font-medium uppercase">
                  Why Us
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                  Why HH Textiles?
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-2">
              {whyUs.map((w, i) => {
                const Icon = w.icon;
                return (
                  <Reveal key={w.title} delay={(i % 2) * 100}>
                    <div className="py-7 border-b border-primary/15 flex gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center text-primary">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-primary">{w.title}</h3>
                        <p className="mt-2 text-foreground/70 text-sm leading-relaxed">
                          {w.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CUSTOMISE */}
        <section
          className="py-24 md:py-32"
          style={{
            background:
              "linear-gradient(180deg, var(--cream) 0%, color-mix(in oklab, var(--olive) 12%, var(--cream)) 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Reveal>
              <div className="max-w-2xl">
                <span className="text-accent tracking-[0.3em] text-xs font-medium uppercase">
                  Customisation
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                  What We Can Customise
                </h2>
                <p className="mt-5 text-foreground/70 text-lg">
                  Every HH Textiles product is made to order — tailored to your exact
                  brand requirements from fabric to finish.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {(Object.keys(customise) as Array<keyof typeof customise>).map((key, i) => (
                <Reveal key={key} delay={i * 120}>
                  <div className="bg-white rounded-2xl p-8 border border-border h-full">
                    <h3 className="font-display text-2xl text-primary border-b border-border pb-4">
                      {key}
                    </h3>
                    <ul className="mt-6 space-y-3.5">
                      {customise[key].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-foreground/80 text-[15px]"
                        >
                          <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-24 md:py-36 texture-linen"
          style={{ backgroundColor: "var(--olive)" }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              <Reveal>
                <span className="text-[color:var(--gold)] tracking-[0.3em] text-xs font-medium uppercase">
                  Contact
                </span>
                <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                  Let's Create Together.
                </h2>
                <p className="mt-6 text-cream/80 text-lg leading-relaxed max-w-lg">
                  Whether you are developing a new collection or expanding an existing
                  one, HH Textiles is your trusted manufacturing partner for premium,
                  fully customised textile products.
                </p>

                <ul className="mt-10 space-y-5 text-cream/90">
                  <li className="flex items-start gap-4">
                    <Globe2 className="text-[color:var(--gold)] shrink-0 mt-0.5" size={20} />
                    <a
                      href="https://www.hariharatextiles.com"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[color:var(--gold)] transition-colors"
                    >
                      www.hariharatextiles.com
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <MessageCircle className="text-[color:var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div className="flex flex-col gap-1">
                      <a
                        href="https://wa.me/919506815940"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[color:var(--gold)] transition-colors"
                      >
                        WhatsApp: +91-9506815940
                      </a>
                      <a
                        href="https://wa.me/919773828007"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[color:var(--gold)] transition-colors"
                      >
                        WhatsApp: +91-9773828007
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="text-[color:var(--gold)] shrink-0 mt-0.5" size={20} />
                    <span>E-40, 2nd Floor, Sector 8, Noida 201301, India</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="text-[color:var(--gold)] shrink-0 mt-0.5" size={20} />
                    <a
                      href="tel:+919506815940"
                      className="hover:text-[color:var(--gold)] transition-colors"
                    >
                      +91 95068 15940
                    </a>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={150}>
                <div className="rounded-2xl border border-cream/15 bg-[color:var(--olive-deep)]/60 backdrop-blur-sm p-8 md:p-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="text-cream"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <div className="font-display font-bold text-2xl">
              HH<span className="text-[color:var(--gold)]">·</span>TEXTILES
            </div>
            <p className="mt-2 text-cream/60 tracking-[0.25em] text-xs uppercase">
              Quality · Craft · Trust
            </p>
            <p className="mt-6 text-cream/65 text-sm leading-relaxed max-w-xs">
              Premium textile manufacturer based in Noida, India. Crafting scarves,
              bags, dresses & accessories for global brands since 1974.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-[color:var(--gold)]">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {["About", "Products", "Capabilities", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "")}`}
                    className="hover:text-[color:var(--gold)] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-[color:var(--gold)]">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>E-40, 2nd Floor, Sector 8</li>
              <li>Noida 201301, India</li>
              <li>
                <a
                  href="https://wa.me/919506815940"
                  className="hover:text-[color:var(--gold)] transition-colors"
                >
                  +91-9506815940
                </a>
              </li>
              <li>
                <a
                  href="https://www.hariharatextiles.com"
                  className="hover:text-[color:var(--gold)] transition-colors"
                >
                  www.hariharatextiles.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 text-xs text-cream/55 flex flex-col md:flex-row gap-2 md:justify-between">
            <span>
              © 2025 HH Textiles. All rights reserved. | Manufacturer of Scarves, Bags,
              Dresses &amp; More | Noida, India
            </span>
            <span>Made with craft.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
