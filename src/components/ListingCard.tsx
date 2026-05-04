import type { Listing } from "@/data/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-6 bg-muted aspect-[4/3]">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-gold text-[10px] uppercase font-bold tracking-widest">
            {listing.status}
          </span>
          <h3 className="text-2xl font-serif mt-1">{listing.title}</h3>
          <p className="text-muted-foreground text-sm mt-2 italic">{listing.description}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xl font-serif">{listing.price}</div>
          <div className="text-[10px] uppercase text-muted-foreground font-semibold mt-1">
            {listing.beds} Bed • {listing.baths} Bath
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border grid grid-cols-3 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
        <span>{listing.beds} Bed</span>
        <span>{listing.baths} Bath</span>
        <span>{listing.sqft.toLocaleString()} sqft</span>
      </div>
    </div>
  );
}
