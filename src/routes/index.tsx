import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/data/listings";
import heroImg from "@/assets/hero-queens.jpg";
import { Star, Award, Home, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Z Sell Realty — Premier Queens NY Real Estate Since 2002" },
      {
        name: "description",
        content:
          "E-Z Sell Realty: Queens, NY's trusted real estate brokerage since 2002. 30+ associates, 3,935+ Google reviews. Buy, sell, and invest in Forest Hills, Rego Park, and beyond.",
      },
      { property: "og:title", content: "E-Z Sell Realty — Premier Queens NY Real Estate" },
      {
        property: "og:description",
        content: "Queens' trusted brokerage since 2002. 3,935+ Google reviews.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-foreground/20 z-10" />
        <img
          src={heroImg}
          alt="Queens NY skyline at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="max-w-3xl animate-fade-up">
            <span className="text-primary-foreground uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block font-semibold">
              Queens, New York • Established 2002
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl font-serif leading-[1.05] mb-8">
              The Premier Standard
              <br />
              in <span className="italic text-gold">Queens Real Estate</span>
            </h1>
            <p className="text-primary-foreground/90 max-w-xl text-lg mb-10 leading-relaxed">
              Two decades of consistent growth. Over 30 expert associates. Thousands of
              satisfied homeowners across Forest Hills, Rego Park, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/listings"
                className="bg-gold text-foreground px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-foreground hover:text-primary-foreground transition-colors text-center"
              >
                View Listings
              </Link>
              <Link
                to="/contact"
                className="bg-background/10 backdrop-blur-md text-primary-foreground border border-primary-foreground/30 px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-background hover:text-foreground transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gold-soft py-12 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center md:text-left">
          {[
            { value: "3,935", label: "Google Reviews" },
            { value: "22+ Years", label: "Local Expertise" },
            { value: "30+", label: "Professional Associates" },
            { value: "5.0 / 5.0", label: "Zillow Satisfaction" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`${i < 3 ? "md:border-r md:border-gold/20" : ""} md:pr-4`}
            >
              <div
                className={`text-2xl md:text-3xl font-serif font-bold ${
                  s.value.includes("/") ? "text-gold" : ""
                }`}
              >
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Curated Queens Portfolio</h2>
              <p className="text-muted-foreground max-w-md">
                Discover exceptional living spaces in the heart of Forest Hills, Rego Park,
                and beyond.
              </p>
            </div>
            <Link
              to="/listings"
              className="text-xs font-bold uppercase tracking-widest border-b border-gold pb-1 self-start"
            >
              View All Listings →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {listings.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-gold-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-xs uppercase font-bold tracking-widest">
              The E-Z Sell Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">
              Built on Trust, Delivered with Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: Award, title: "22+ Years Local", desc: "Two decades of unbroken growth in the Queens market." },
              { icon: Users, title: "30+ Associates", desc: "A specialized team for every neighborhood and need." },
              { icon: Home, title: "Local Mastery", desc: "Forest Hills, Rego Park, and Queens specialists." },
              { icon: Star, title: "5-Star Service", desc: "Thousands of verified five-star reviews." },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <f.icon className="size-10 mx-auto text-gold mb-4" strokeWidth={1.25} />
                <h3 className="font-serif text-xl mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Spotlight */}
      <section className="bg-foreground text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="text-gold mb-8 text-2xl tracking-widest">★★★★★</div>
          <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed italic mb-10">
            "Sold my house quickly, answered all my questions, professionalism at its
            best! Working with Igor and the staff at E-Z Sell was a seamless experience
            from start to finish."
          </blockquote>
          <cite className="not-italic">
            <div className="font-bold uppercase tracking-widest text-xs">Verified Homeowner</div>
            <div className="text-primary-foreground/60 text-xs mt-2 italic font-serif">
              Rego Park, NY
            </div>
          </cite>
          <Link
            to="/reviews"
            className="mt-12 inline-block text-xs font-bold uppercase tracking-widest border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Read All Reviews →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to make your move in Queens?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Whether you're buying your first home or selling a multi-family property, our
            team is ready to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17183966666"
              className="bg-foreground text-primary-foreground px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-gold hover:text-foreground transition-colors"
            >
              Call (718) 396-6666
            </a>
            <Link
              to="/contact"
              className="border border-foreground px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-foreground hover:text-primary-foreground transition-colors"
            >
              Get a Free Valuation
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
