import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rian O'Neill Garden Sheds, Killarney" },
      {
        name: "description",
        content:
          "Request a quote for a hand-built garden shed in Killarney, Co. Kerry. Call, email, or send us your project details.",
      },
      { property: "og:title", content: "Contact Rian O'Neill Garden Sheds" },
      { property: "og:description", content: "Get a quote for a bespoke timber shed in Kerry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <SiteLayout>
      <Toaster position="top-center" />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Tell us about your<br />
          <em className="font-light italic">garden.</em>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A few details is all we need to get started. We'll come back to you
          within a working day with sketches, sizes and a fair price.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6 lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Town / County" name="location" placeholder="e.g. Killarney, Co. Kerry" />

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Type of shed
              </label>
              <select
                name="type"
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>Choose one…</option>
                <option>Timber</option>
                <option>Metal</option>
                <option>Premium Metal</option>
                <option>Bespoke / Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Tell us a bit more
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Rough size, intended use, timeframe…"
                className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-primary disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </button>
          </form>

          {/* Details */}
          <aside className="lg:col-span-2 lg:pl-8">
            <div className="rounded-lg bg-secondary/50 p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Or reach us directly
              </p>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Call the workshop</p>
                    <a href="tel:+353000000000" className="text-muted-foreground hover:text-foreground">
                      +353 (0) 87 446 2026
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@rianoneilsheds.ie" className="text-muted-foreground hover:text-foreground">
                      rianoneill76@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Workshop</p>
                    <p className="text-muted-foreground">Killarney, Co. Kerry, Ireland</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground">Mon–Sat · 8:30 – 17:30</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none"
      />
    </div>
  );
}
