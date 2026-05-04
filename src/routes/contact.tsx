import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact E-Z Sell Realty — Rego Park, Queens NY" },
      {
        name: "description",
        content:
          "Visit E-Z Sell Realty at 92-29 Queens Blvd CU18, Rego Park, NY 11374. Call (718) 396-6666 or request a free home valuation.",
      },
      { property: "og:title", content: "Contact E-Z Sell Realty" },
      {
        property: "og:description",
        content: "Located in Rego Park. Call (718) 396-6666.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-gold uppercase text-xs font-bold tracking-widest">
              Sell With Us
            </span>
            <h1 className="text-5xl md:text-6xl font-serif mt-4 leading-tight">
              Let's talk about your <span className="italic">property</span>.
            </h1>
            <p className="text-muted-foreground mt-6 text-lg">
              Whether you're ready to list, just exploring, or want a no-obligation home
              valuation — our Queens specialists are here to help.
            </p>

            <div className="mt-12 space-y-6">
              <ContactRow icon={Phone} label="Phone">
                <a href="tel:+17183966666" className="hover:text-gold transition-colors">
                  (718) 396-6666
                </a>
              </ContactRow>
              <ContactRow icon={MapPin} label="Office">
                Queens Boulevard Towers Condominium
                <br />
                92-29 Queens Blvd CU18, Rego Park, NY 11374
              </ContactRow>
              <ContactRow icon={Clock} label="Hours">
                Mon–Fri: 9 AM – 7 PM
                <br />
                Sat: 10 AM – 5 PM • Sun: By Appointment
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href="mailto:info@ezsellrealty.com" className="hover:text-gold transition-colors">
                  info@ezsellrealty.com
                </a>
              </ContactRow>
            </div>
          </div>

          <div className="bg-gold-soft p-8 md:p-12 border border-border">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="text-gold text-3xl mb-4">★</div>
                <h3 className="font-serif text-2xl mb-3">Thank you.</h3>
                <p className="text-muted-foreground max-w-sm">
                  An associate will reach out within one business day. For urgent matters,
                  please call (718) 396-6666.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl mb-2">Request a Consultation</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form and we'll contact you shortly.
                </p>
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Property Address (optional)" name="address" />
                <div>
                  <label className="block uppercase text-[10px] tracking-widest font-bold mb-2">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-primary-foreground py-5 uppercase text-xs tracking-widest font-bold hover:bg-gold hover:text-foreground transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="size-5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
      <div>
        <div className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground mb-1">
          {label}
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block uppercase text-[10px] tracking-widest font-bold mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
