import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import agent4 from "@/assets/agent-4.jpg";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "Our Agents — E-Z Sell Realty Queens NY" },
      {
        name: "description",
        content:
          "Meet the licensed Queens real estate associates of E-Z Sell Realty — specialists in Forest Hills, Rego Park, and beyond.",
      },
      { property: "og:title", content: "Meet Our Agents — E-Z Sell Realty" },
      {
        property: "og:description",
        content: "30+ specialized associates serving Queens, NY since 2002.",
      },
    ],
  }),
  component: AgentsPage,
});

const agents = [
  {
    name: "Igor Volshteyn",
    title: "Founder & Principal Broker",
    photo: agent1,
    bio: "Two decades guiding Queens buyers and sellers with quiet confidence and sharp negotiation.",
    phone: "(718) 396-6666",
    email: "igor@ezsellrealty.com",
    areas: ["Forest Hills", "Rego Park", "Kew Gardens"],
  },
  {
    name: "Marina Petrov",
    title: "Senior Associate Broker",
    photo: agent2,
    bio: "Marketing-driven listings specialist known for record-setting condo and co-op sales.",
    phone: "(718) 396-6666",
    email: "marina@ezsellrealty.com",
    areas: ["Forest Hills", "Briarwood", "Jamaica Estates"],
  },
  {
    name: "Daniel Rivera",
    title: "Sales Associate",
    photo: agent3,
    bio: "First-time buyer advocate fluent in English and Spanish. Patient, thorough, and detail-obsessed.",
    phone: "(718) 396-6666",
    email: "daniel@ezsellrealty.com",
    areas: ["Elmhurst", "Woodside", "Jackson Heights"],
  },
  {
    name: "Sofia Hernandez",
    title: "Luxury Property Specialist",
    photo: agent4,
    bio: "Curates discreet, white-glove service for Queens' premier single-family and townhouse market.",
    phone: "(718) 396-6666",
    email: "sofia@ezsellrealty.com",
    areas: ["Forest Hills Gardens", "Jamaica Estates"],
  },
];

function AgentsPage() {
  return (
    <SiteLayout>
      <section className="py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-gold uppercase text-xs font-bold tracking-widest">
            Our Team
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mt-4 leading-tight">
            The associates behind <span className="italic">every sale</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thirty-plus licensed professionals. One Queens-rooted brokerage. Meet a few of
            the people who make E-Z Sell Realty the neighborhood's trusted name.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {agents.map((a) => (
            <article key={a.name} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <h2 className="font-serif text-xl">{a.name}</h2>
                <div className="text-[10px] uppercase tracking-widest font-bold text-gold mt-1">
                  {a.title}
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.bio}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  <span className="uppercase tracking-widest font-bold text-foreground">
                    Areas:
                  </span>{" "}
                  {a.areas.join(" • ")}
                </div>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <a
                    href={`tel:${a.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Phone className="size-3.5" strokeWidth={1.75} /> {a.phone}
                  </a>
                  <a
                    href={`mailto:${a.email}`}
                    className="flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    <Mail className="size-3.5" strokeWidth={1.75} /> {a.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gold-soft">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif mb-4">Want to join the team?</h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for driven licensed agents who love Queens as much as we do.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-foreground text-primary-foreground px-10 py-5 uppercase text-xs tracking-widest font-bold hover:bg-gold hover:text-foreground transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
