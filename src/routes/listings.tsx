import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ListingCard } from "@/components/ListingCard";
import { listings } from "@/data/listings";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Featured Listings — E-Z Sell Realty Queens NY" },
      {
        name: "description",
        content:
          "Browse exceptional homes and condos for sale across Forest Hills, Rego Park, and Queens, NY. Curated by E-Z Sell Realty.",
      },
      { property: "og:title", content: "Queens NY Listings — E-Z Sell Realty" },
      {
        property: "og:description",
        content: "Hand-picked homes across Forest Hills and Rego Park.",
      },
    ],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  return (
    <SiteLayout>
      <section className="bg-gold-soft py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-gold uppercase text-xs font-bold tracking-widest">
            Current Inventory
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 max-w-3xl leading-tight">
            Featured Properties Across Queens
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
            From high-floor condos with skyline terraces to classic colonials, every
            listing is hand-selected by our local experts.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
