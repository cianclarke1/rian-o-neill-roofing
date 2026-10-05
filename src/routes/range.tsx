import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import timberShed from "@/assets/timber-shed.jpeg";
import metalShed from "@/assets/metal-shed.jpeg";
import premiumMetalShed from "@/assets/premium-metal-shed.webp";

const shedPhotos: Record<string, { src: string; alt: string }> = {
  Abwood: { src: timberShed, alt: "Finished timber shed" },
  Globel: { src: metalShed, alt: "Finished metal shed" },
  Satus: { src: premiumMetalShed, alt: "White and grey premium metal shed with black trim" },
};

export const Route = createFileRoute("/range")({
  head: () => ({
    meta: [
      { title: "The Range — Rian O'Neill Garden Sheds" },
      {
        name: "description",
        content:
          "Timber, metal and premium metal garden sheds supplied and assembled across Kerry, Cork and Limerick. Call for a free quote.",
      },
      { property: "og:title", content: "The Range — Rian O'Neill Garden Sheds" },
      {
        property: "og:description",
        content: "Garden shed assembly across Kerry, Cork and Limerick — timber, metal and premium metal sheds.",
      },
    ],
  }),
  component: RangePage,
});

const ranges = [
  {
    category: "Timber",
    brand: "Abwood",
    sizes: ["8×6", "10×6"],
    description:
      "Classic timber sheds with natural warmth and character. A sturdy, good-looking home for tools, bikes and everything in between.",
  },
  {
    category: "Metal",
    brand: "Globel",
    sizes: ["8×6", "10×7", "10×12"],
    description:
      "Low-maintenance metal sheds built to shrug off Irish weather. Practical, secure storage in a range of sizes.",
  },
  {
    category: "Premium Metal",
    brand: "Satus",
    sizes: ["6×4", "9×6"],
    description:
      "The top tier of metal sheds — heavier gauge steel, refined finishes and extra durability for the long haul.",
  },
];

function RangePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Range</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Garden shed assembly.<br />
          <em className="font-light italic">Call for a free quote.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Serving Kerry, Cork and Limerick. Choose from timber, metal and premium
          metal sheds — we deliver and assemble, start to finish.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-8 md:grid-cols-3">
          {ranges.map((r) => (
            <article
              key={r.brand}
              className="flex flex-col rounded-lg border border-border bg-secondary/40 p-8"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {r.category}
              </p>
              <h2 className="mt-3 font-display text-3xl">{r.brand}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {r.sizes.map((size) => (
                  <li key={size} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-primary" />
                    {size} ft
                  </li>
                ))}
              </ul>
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img
                  src={shedPhotos[r.brand].src}
                  alt={shedPhotos[r.brand].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
                >
                  Enquire about {r.brand} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-foreground p-10 text-center text-background md:p-16">
          <h2 className="font-display text-3xl text-balance sm:text-4xl">
            Not sure which shed suits your garden?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
            Tell us the space you have and what you need to store — we'll point you
            to the right shed and give you a free quote.
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
