import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TikTokEmbed } from "@/components/TikTokEmbed";
import { ArrowRight, Hammer, TreePine, ShieldCheck, Quote } from "lucide-react";
import heroShed from "@/assets/hero-shed.jpg";
import craftHands from "@/assets/craft-hands.jpg";
import timberShed from "@/assets/timber-shed.jpeg.asset.json";
import metalShed from "@/assets/metal-shed.jpeg.asset.json";
import premiumMetalShed from "@/assets/premium-metal-shed.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rian O'Neill Garden Sheds — Hand-built in Killarney, Co. Kerry" },
      {
        name: "description",
        content:
          "Bespoke, hand-built timber garden sheds, workshops and garden rooms — crafted in Killarney, Co. Kerry. Quality joinery, lifetime character.",
      },
      { property: "og:title", content: "Rian O'Neill Garden Sheds — Killarney, Kerry" },
      {
        property: "og:description",
        content: "Bespoke timber sheds, workshops and garden rooms hand-built in Kerry.",
      },
    ],
  }),
  component: HomePage,
});

const availableSheds = [
  { category: "Timber", brand: "Abwood", sizes: ["8×6", "10×6"], img: timberShed.url, alt: "Finished timber shed" },
  { category: "Metal", brand: "Globel", sizes: ["8×6", "10×7", "10×12"], img: metalShed.url, alt: "Finished metal shed" },
  { category: "Premium Metal", brand: "Satus", sizes: ["6×4", "9×6"], img: premiumMetalShed.url, alt: "White and grey premium metal shed with black trim" },
];

const tiktokVideos = [
  { url: "https://www.tiktok.com/@rianoneill76/video/7516293865817591062", id: "7516293865817591062" },
  { url: "https://www.tiktok.com/@rianoneill76/video/7604064126754671894", id: "7604064126754671894" },
  { url: "https://www.tiktok.com/@rianoneill76/video/7604268107212819734", id: "7604268107212819734" },
  { url: "https://www.tiktok.com/@rianoneill76/photo/7608626507052846359", id: "7608626507052846359" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="grain absolute inset-0 -z-10">
          <img
            src={heroShed}
            alt="A hand-built timber garden shed set against the misty mountains of Kerry"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
          <p className="fade-up text-xs uppercase tracking-[0.3em] text-background/90">
            Killarney · Co. Kerry · Est. since the days of good timber
          </p>
          <h1 className="fade-up fade-up-delay-1 mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-background text-balance sm:text-6xl lg:text-7xl">
            Garden sheds, hand-built<br />
            <em className="font-light italic">in the heart of Kerry.</em>
          </h1>
          <p className="fade-up fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-background/85">
            Bespoke timber sheds, workshops and garden rooms — built one at a time,
            with the kind of joinery that lasts a lifetime.
          </p>
          <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
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
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-3">
            Our Promise
          </p>
          <div className="md:col-span-9">
            <h2 className="font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
              A shed should outlast a generation. Ours are built<br className="hidden lg:block" />
              with the same patience the Kerry hills were carved with.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              No flat-pack. No shortcuts. Every Rian O'Neill shed is hand-crafted
              from premium Irish and Scandinavian timber, framed to take whatever
              an Atlantic winter throws at it, and finished by hand on-site.
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
                Sheds available now.
              </h2>
            </div>
            <Link
              to="/range"
              className="hidden items-center gap-2 text-sm text-primary hover:gap-3 sm:inline-flex"
            >
              See the full range <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {availableSheds.map((shed) => (
              <article
                key={shed.brand}
                className="rounded-lg border border-border bg-background p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  {shed.category}
                </p>
                <h3 className="mt-3 font-display text-3xl">{shed.brand}</h3>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {shed.sizes.map((size) => (
                    <li key={size} className="flex items-center gap-3">
                      <span className="h-px w-6 bg-primary" />
                      {size} ft
                    </li>
                  ))}
                </ul>
                <div className="mt-6 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <img
                    src={shed.img}
                    alt={shed.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-foreground p-10 text-center text-background md:p-14">
            <h3 className="font-display text-3xl text-balance sm:text-4xl">
              Garden shed assembly — call for a free quote!
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
              We deliver and assemble across Kerry, Cork and Limerick. Tell us the
              shed and the spot, and we'll take care of the rest.
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

      {/* TikTok videos */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            On TikTok
          </p>
          <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
            Watch Our Shed Builds
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Follow the workshop in action — real builds, real timber, no shortcuts.
            Play them right here.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiktokVideos.map((video) => (
            <TikTokEmbed key={video.id} url={video.url} videoId={video.id} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.tiktok.com/@rianoneill76"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
          >
            Follow @rianoneill76 on TikTok <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src={craftHands}
              alt="A craftsman shaping timber by hand"
              loading="lazy"
              width={1080}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The Difference
            </p>
            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              Crafted by hand.<br />Delivered to your door.
            </h2>
            <div className="mt-12 space-y-8">
              {[
                { Icon: Hammer, title: "Hand-built joinery", body: "Mortise, tenon, and a maker who answers his own phone." },
                { Icon: TreePine, title: "Sustainable timber", body: "Premium FSC-certified pine, cedar and larch." },
                { Icon: ShieldCheck, title: "10-year guarantee", body: "Treated, sealed and stress-tested for Irish weather." },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
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
            "Rian built us a shed that looks like it grew out of the garden.
            Ten years on, it's still the proudest thing on the lawn."
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-background/60">
            Aoife M. — Muckross, Killarney
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 rounded-2xl bg-secondary/60 p-10 md:grid-cols-2 md:items-center md:p-16">
          <div>
            <h2 className="font-display text-4xl text-balance sm:text-5xl">
              Got a corner of the garden in mind?
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us the rough size, the use, and the look. We'll come back with
              sketches and a fair price — no obligation.
            </p>
          </div>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
            >
              Start your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
