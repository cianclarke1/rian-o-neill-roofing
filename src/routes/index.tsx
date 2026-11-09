import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TikTokEmbed } from "@/components/TikTokEmbed";
import { RepairGallery } from "@/components/RepairGallery";
import { ArrowRight, Hammer, TreePine, ShieldCheck, Quote, Wrench } from "lucide-react";
import heroShed from "@/assets/hero-shed.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import timberShed from "@/assets/timber-shed.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Rian O'Neill Garden Sheds — Timber Shed Supply & Installation in Kerry",
      },
      {
        name: "description",
        content:
          "Quality timber garden sheds supplied and professionally installed, plus shed repairs and timber work, across Killarney, County Kerry and surrounding areas.",
      },
      {
        property: "og:title",
        content: "Rian O'Neill Garden Sheds — Supply & Installation",
      },
      {
        property: "og:description",
        content:
          "Quality timber garden sheds supplied, delivered and professionally installed across Kerry and surrounding areas.",
      },
    ],
  }),
  component: HomePage,
});

const featuredShed = {
  category: "Timber",
  brand: "Abwood",
  sizes: ["8×6", "10×6"],
  img: timberShed,
  alt: "Finished timber shed",
};

const tiktokVideos = [
  {
    url: "https://www.tiktok.com/@rianoneill76/video/7516293865817591062",
    id: "7516293865817591062",
  },
  {
    url: "https://www.tiktok.com/@rianoneill76/video/7604064126754671894",
    id: "7604064126754671894",
  },
  {
    url: "https://www.tiktok.com/@rianoneill76/video/7604268107212819734",
    id: "7604268107212819734",
  },
  {
    url: "https://www.tiktok.com/@rianoneill76/photo/7608626507052846359",
    id: "7608626507052846359",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[58vh] min-h-[520px] overflow-hidden">
          <img
            src={heroShed}
            alt="A garden shed set against the mountains of Kerry"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1280}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-foreground/10" />

          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-12">
              <p className="fade-up text-xs uppercase tracking-[0.3em] text-background/90">
                Killarney · Co. Kerry · Supply & Installation
              </p>

              <h1 className="fade-up fade-up-delay-1 mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-background text-balance sm:text-6xl lg:text-7xl">
                Quality garden sheds,
                <br />
                <em className="font-light italic">supplied & installed.</em>
              </h1>

              <p className="fade-up fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
                Quality timber garden sheds supplied, delivered and
                professionally installed across Killarney, County Kerry and
                the surrounding areas.
              </p>

              <div className="fade-up fade-up-delay-3 mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/range"
                  className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-background"
                >
                  Explore the Range
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-3">
            Our Service
          </p>

          <div className="md:col-span-9">
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
              Garden sheds made simple.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Rian O'Neill Garden Sheds supplies and installs quality timber
              garden sheds, built to suit your garden and storage needs. Rian
              also repairs existing sheds and takes on all kinds of timber
              work. With more than two years of
              experience, we provide a straightforward service from choosing
              your shed through to delivery and installation.
            </p>
          </div>
        </div>
      </section>

      {/* Sheds available */}
      <section className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                The Range
              </p>

              <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
                Our timber shed.
              </h2>
            </div>

            <Link
              to="/range"
              className="hidden items-center gap-2 text-sm text-primary hover:gap-3 sm:inline-flex"
            >
              See sizes & details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <article className="mt-16 grid overflow-hidden rounded-lg border border-border bg-background md:grid-cols-2">
            <div className="aspect-[4/3] bg-muted md:aspect-auto">
              <img
                src={featuredShed.img}
                alt={featuredShed.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {featuredShed.category}
              </p>

              <h3 className="mt-3 font-display text-4xl">
                {featuredShed.brand}
              </h3>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Classic timber garden sheds with natural warmth and character —
                a practical space for tools, bikes and garden equipment.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {featuredShed.sizes.map((size) => (
                  <li key={size} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-primary" />
                    {size} ft
                  </li>
                ))}
              </ul>

              <Link
                to="/range"
                className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:gap-3 sm:hidden"
              >
                See sizes & details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="mt-16 rounded-2xl bg-foreground p-10 text-center text-background md:p-14">
            <h3 className="font-display text-3xl text-balance sm:text-4xl">
              Supplied. Delivered. Installed.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
              Pick your size and we'll take care of the rest. We supply,
              deliver and professionally install timber garden sheds across Kerry and
              surrounding areas.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Get your free quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Repairs & timber work */}
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              More than new sheds
            </p>

            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              Repairs & timber work.
            </h2>
          </div>

          <Link
            to="/services"
            className="hidden items-center gap-2 text-sm text-primary hover:gap-3 sm:inline-flex"
          >
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12">
          <RepairGallery />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              Icon: Wrench,
              title: "Shed repairs",
              body: "Leaking roof, rotten boards or a door that won't close? Rian can repair your existing shed and get it back in good shape.",
            },
            {
              Icon: Hammer,
              title: "General timber work",
              body: "If it's made of timber, ask Rian. From small fixes to bigger jobs around the garden and home.",
            },
          ].map(({ Icon, title, body }) => (
            <Link
              key={title}
              to="/services"
              className="group flex gap-5 rounded-lg border border-border p-8 transition-colors hover:border-primary"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3">
                  Find out more <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TikTok videos */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            On TikTok
          </p>

          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            See Our Sheds
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See the latest garden sheds, installations and work from Rian
            O'Neill Garden Sheds.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiktokVideos.map((video) => (
            <TikTokEmbed key={video.id} videoId={video.id} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.tiktok.com/@rianoneill76"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
          >
            Follow @rianoneill76 on TikTok{" "}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={craftHands}
              alt="A craftsman working with timber"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Why Choose Us
            </p>

            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              Supplied by Rian.
              <br />
              Installed properly.
            </h2>

            <div className="mt-12 space-y-8">
              {[
                {
                  Icon: Hammer,
                  title: "Quality timber sheds",
                  body: "Well-built timber sheds in a choice of sizes to suit your garden.",
                },
                {
                  Icon: TreePine,
                  title: "Supply & installation",
                  body: "We take care of delivery and professional installation, making the process simple from start to finish.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Over 2 years' experience",
                  body: "Reliable service and practical advice to help you choose the right shed for your space.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-foreground py-24 text-background lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Quote className="mx-auto h-10 w-10 text-primary" />

          <blockquote className="mt-8 font-display text-3xl leading-snug text-balance sm:text-4xl">
            "Rian supplied and installed our garden shed and made the whole
            process simple from start to finish."
          </blockquote>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-background/60">
            Customer — Killarney
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 rounded-2xl bg-secondary/60 p-10 md:grid-cols-2 md:items-center md:p-16">
          <div>
            <h2 className="font-display text-4xl text-balance sm:text-5xl">
              Looking for a garden shed?
            </h2>

            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us what you're looking for and we'll help you choose the
              right shed for your garden. We can supply, deliver and install
              it for you.
            </p>
          </div>

          <div className="md:text-right">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}