import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";

export type Listing = {
  id: string;
  title: string;
  neighborhood: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  image: string;
  status: "New Listing" | "In Contract" | "Featured";
};

export const listings: Listing[] = [
  {
    id: "forest-hills-gem",
    title: "Forest Hills Gem",
    neighborhood: "Forest Hills, Queens",
    price: "$359,000",
    beds: 1,
    baths: 1,
    sqft: 850,
    description:
      "Move-in ready with massive private terrace, high-floor views, and southern exposure.",
    image: listing1,
    status: "New Listing",
  },
  {
    id: "rego-park-tower",
    title: "Queens Boulevard Towers",
    neighborhood: "Rego Park, Queens",
    price: "$649,000",
    beds: 2,
    baths: 2,
    sqft: 1120,
    description:
      "Luxurious condo with renovated kitchen, custom walk-in closets, and skyline views.",
    image: listing2,
    status: "Featured",
  },
  {
    id: "rego-park-colonial",
    title: "Rego Park Colonial",
    neighborhood: "Rego Park, Queens",
    price: "$1,180,000",
    beds: 3,
    baths: 2,
    sqft: 2200,
    description:
      "Classic colonial with garage, finished basement, and a beautifully landscaped yard.",
    image: listing3,
    status: "Featured",
  },
];
