import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About E-Z Sell Realty — Queens NY Brokerage Since 2002" },
      {
        name: "description",
        content:
          "Founded in 2002, E-Z Sell Realty has grown every month for two decades, with 30+ associates serving Queens, NY clients with knowledge and efficiency.",
      },
      { property: "og:title", content: "About E-Z Sell Realty" },
      {
        property: "og:description",
        content: "A trusted Queens brokerage since 2002.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="text-gold uppercase text-xs font-bold tracking-widest">
            Our Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 leading-tight">
            Two decades of trust in <span className="italic">Queens, NY</span>.
          </h1>
          <div className="mt-12 grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-muted-foreground">
            <p>
              Welcome to E-Z Sell Realty. The company was founded in 2002 in New York City
              and has experienced growth for every single month of its existence. Today, our
              team of over 30 associates assists clients with greater efficiency and care
              than ever before.
            </p>
            <p>
              Their knowledge and experience continue to make us a leading brokerage in
              Queens — from Forest Hills to Rego Park, and every neighborhood in between.
              We believe excellent real estate is built on relationships, not transactions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { v: "2002", l: "Founded in NYC" },
              { v: "264", l: "Months of consecutive growth" },
              { v: "30+", l: "Specialized associates" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-6xl font-serif text-gold">{s.v}</div>
                <div className="mt-4 uppercase tracking-widest text-xs font-bold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif mb-6">Let's discuss your next move.</h2>
          <p className="text-muted-foreground mb-8">
            Stop by our Rego Park office or schedule a private consultation with one of our
            senior associates.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-foreground text-primary-foreground px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-gold hover:text-foreground transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
