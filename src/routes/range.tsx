import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import timberShed from "@/assets/timber-shed.jpeg";

export const Route = createFileRoute("/range")({
  head: () => ({
    meta: [
      {
        title: "Timber Garden Sheds in Kerry, Cork & Limerick | Rian O'Neill",
      },
      {
        name: "description",
        content:
          "Quality timber garden sheds supplied, delivered and professionally installed across Kerry, Cork and Limerick by Rian O'Neill Garden Sheds.",
      },
      {
        property: "og:title",
        content:
          "Timber Garden Sheds in Kerry, Cork & Limerick | Rian O'Neill Garden Sheds",
      },
      {
        property: "og:description",
        content:
          "Timber garden sheds supplied, delivered and professionally installed across Kerry, Cork and Limerick.",
      },
    ],
  }),
  component: RangePage,
});

const shed = {
  category: "Timber",
  brand: "Abwood",
  sizes: ["8×6", "10×6"],
  description:
    "Classic timber garden sheds with natural warmth and character. A practical, attractive space for tools, bikes, gardening equipment and more.",
};

function RangePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          The Range
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Timber garden sheds,
          <br />
          <em className="font-light italic">supplied & installed.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Serving Kerry, Cork and Limerick. Quality timber garden sheds —
          supplied, delivered and professionally installed from start to
          finish.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <article className="grid overflow-hidden rounded-lg border border-border bg-secondary/40 md:grid-cols-2">
          <div className="aspect-[4/3] bg-muted md:aspect-auto">
            <img
              src={timberShed}
              alt="Finished timber garden shed"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col p-8 lg:p-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              {shed.category}
            </p>

            <h2 className="mt-3 font-display text-4xl">{shed.brand}</h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {shed.description}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Sizes available
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {shed.sizes.map((size) => (
                <li key={size} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-primary" />
                  {size} ft
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
              >
                Enquire about {shed.brand}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>

        <div className="mt-20 rounded-2xl bg-foreground p-10 text-center text-background md:p-16">
          <h2 className="font-display text-3xl text-balance sm:text-4xl">
            Not sure which size suits your garden?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
            Tell us about the space you have and what you need to store —
            we'll help you choose the right size and provide a free quote.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Request a free quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}