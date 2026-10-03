import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import shedClassic from "@/assets/shed-classic.jpg";
import shedModern from "@/assets/shed-modern.jpg";
import shedCabin from "@/assets/shed-cabin.jpg";

export const Route = createFileRoute("/range")({
  head: () => ({
    meta: [
      { title: "The Range — Rian O'Neill Garden Sheds" },
      {
        name: "description",
        content:
          "Explore our range of hand-built timber sheds, garden studios and log cabins — bespoke designs crafted in Killarney, Co. Kerry.",
      },
      { property: "og:title", content: "The Range — Rian O'Neill Garden Sheds" },
      { property: "og:description", content: "Hand-built sheds, studios and cabins from Kerry." },
      { property: "og:image", content: shedClassic },
    ],
  }),
  component: RangePage,
});

const designs = [
  {
    img: shedClassic,
    name: "The Classic Apex",
    sizes: "From 6×4 to 12×8 ft",
    price: "From €1,450",
    description:
      "Our signature traditional shed. Pitched roof, tongue-and-groove cladding, single hand-hung door and a window or two. The kind your grandfather had — only better made.",
    features: ["Pressure-treated frame", "Felted slate-look roof", "Stained or painted finish"],
  },
  {
    img: shedModern,
    name: "The Studio",
    sizes: "From 10×8 to 18×12 ft",
    price: "From €4,850",
    description:
      "A garden room for working, reading or simply escaping the house. Insulated walls, double glazing, and clean architectural lines that flatter any modern garden.",
    features: ["Fully insulated", "Double-glazed sliders", "Charred timber cladding option"],
  },
  {
    img: shedCabin,
    name: "The Cabin",
    sizes: "From 12×10 to 20×14 ft",
    price: "From €6,200",
    description:
      "Log-style retreat with all the romance of an old-world bothy. Built for weekends, summer guests, or that long-overdue art studio.",
    features: ["44mm solid log walls", "Stone chimney option", "Insulated floor & roof"],
  },
];

function RangePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Range</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Three foundations.<br />
          <em className="font-light italic">Endless variations.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Every shed begins with one of three honest forms — then we shape it
          around your garden, your taste, and the way you'll really use it.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-32 lg:px-10 lg:space-y-32">
        {designs.map((d, i) => (
          <article
            key={d.name}
            className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {d.sizes}
              </p>
              <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
                {d.name}
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{d.description}</p>
              <ul className="mt-8 space-y-2 text-sm">
                {d.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <span className="font-display text-2xl">{d.price}</span>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
                >
                  Enquire about {d.name.split(" ").slice(-1)} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
