import { Link } from "@tanstack/react-router";
import fairHousingLogo from "@/assets/fair-housing.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-3 gap-16">
        <div>
          <div className="text-xl font-serif font-bold uppercase mb-6">
            E-Z Sell <span className="text-gold">Realty</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Since 2002, our knowledge and experience have fueled our growth every single
            month. We pride ourselves on the efficiency and professionalism of our 30+
            associates.
          </p>
          <div className="text-xs font-bold text-gold tracking-widest">
            LICENSED NEW YORK BROKERAGE
          </div>
        </div>
        <div>
          <h4 className="uppercase text-xs tracking-widest font-bold mb-6">Headquarters</h4>
          <address className="not-italic text-sm text-muted-foreground leading-loose">
            Queens Boulevard Towers Condominium
            <br />
            92-29 Queens Blvd CU18
            <br />
            Rego Park, NY 11374
          </address>
          <a
            href="https://www.google.com/maps/search/?api=1&query=92-29+Queens+Blvd+CU18+Rego+Park+NY+11374"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-bold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Get Directions
          </a>
        </div>
        <div>
          <h4 className="uppercase text-xs tracking-widest font-bold mb-6">Open Hours</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex justify-between">
              <span>Monday – Friday</span>
              <span>9 AM – 7 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>10 AM – 5 PM</span>
            </li>
            <li className="flex justify-between text-gold font-semibold">
              <span>Sunday</span>
              <span>By Appointment</span>
            </li>
          </ul>
          <a
            href="tel:+17183966666"
            className="mt-6 inline-block text-sm font-bold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            (718) 396-6666
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 text-[10px] text-muted-foreground uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between gap-4">
          <span>© 2002–{new Date().getFullYear()} E-Z Sell Realty. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/contact">Contact</Link>
            <a
              href="https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
              aria-label="Fair Housing Act information"
            >
              <img
                src={fairHousingLogo}
                alt="Equal Housing Opportunity"
                width={20}
                height={20}
                loading="lazy"
                className="size-5"
              />
              <span>Fair Housing</span>
            </a>
            <span>Equal Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
