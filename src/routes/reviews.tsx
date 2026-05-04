import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const reviews = [
  {
    quote:
      "Sold my house quickly, answered all my questions, professionalism at its best!",
    name: "Verified Homeowner",
    location: "Rego Park, NY",
    source: "Google",
  },
  {
    quote:
      "Good experience working with Igor and staff from E-Z Sell Realty. Their knowledge and efficiency made the difference.",
    name: "Zillow Reviewer",
    location: "Forest Hills, NY",
    source: "Zillow",
  },
  {
    quote:
      "The team handled every detail of our sale with care. We felt informed and supported the entire way.",
    name: "Repeat Client",
    location: "Queens, NY",
    source: "Google",
  },
  {
    quote:
      "After 20+ years in the neighborhood, they knew exactly how to position our home. Closed above asking.",
    name: "Long-time Resident",
    location: "Rego Park, NY",
    source: "Facebook",
  },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — E-Z Sell Realty Queens NY" },
      {
        name: "description",
        content:
          "Read 3,935+ Google reviews and 5-star Zillow ratings from E-Z Sell Realty clients across Queens, New York.",
      },
      { property: "og:title", content: "Reviews — E-Z Sell Realty" },
      {
        property: "og:description",
        content: "3,935+ Google reviews. 5/5 on Zillow. Trusted across Queens.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="bg-foreground text-primary-foreground py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold uppercase text-xs font-bold tracking-widest">
            Verified Reviews
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 leading-tight">
            Trusted by thousands of <span className="italic text-gold">Queens neighbors</span>.
          </h1>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { v: "3,935", l: "Google" },
              { v: "5.0/5", l: "Zillow" },
              { v: "4.4/5", l: "Facebook" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-serif text-gold">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest mt-2 text-primary-foreground/60 font-bold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="border border-border p-10 bg-background hover:border-gold transition-colors"
            >
              <div className="text-gold mb-6 tracking-widest">★★★★★</div>
              <blockquote className="font-serif text-xl italic leading-relaxed mb-8">
                "{r.quote}"
              </blockquote>
              <div className="flex justify-between items-end pt-6 border-t border-border">
                <div>
                  <div className="font-bold uppercase tracking-widest text-xs">{r.name}</div>
                  <div className="text-muted-foreground text-xs mt-1 italic">
                    {r.location}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  via {r.source}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
