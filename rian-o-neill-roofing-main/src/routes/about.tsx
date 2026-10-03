import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";
import craftHands from "@/assets/craft-hands.jpg";
import heroShed from "@/assets/hero-shed.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rian O'Neill Garden Sheds, Killarney" },
      {
        name: "description",
        content:
          "Rian O'Neill has been building garden sheds in Killarney, Co. Kerry for over two decades. Honest joinery, local timber, and a love of the craft.",
      },
      { property: "og:title", content: "About Rian O'Neill Garden Sheds" },
      { property: "og:description", content: "A small workshop in Killarney with big standards." },
      { property: "og:image", content: craftHands },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          A small workshop in Killarney<br />
          <em className="font-light italic">with very big standards.</em>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={heroShed}
            alt="The Kerry landscape where every Rian O'Neill shed begins"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-3">
            The story
          </p>
          <div className="md:col-span-9 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Rian O'Neill started building sheds the way most good Kerry tradesmen
              start anything — out of a need, in a back garden, with a borrowed saw.
              Twenty years on, the workshop is bigger and the saws are his own,
              but the standards haven't shifted an inch.
            </p>
            <p>
              We're a small team. We don't ship flat-packs and we don't outsource a
              single cut. Every shed is drawn, framed, clad, finished and delivered
              by people whose name is over the door — people you'll meet on the
              day of install.
            </p>
            <p>
              Our timber comes from responsibly managed forests, our finishes are
              chosen to weather the wettest Atlantic winters, and our designs are
              shaped as much by the gardens of Killarney as by the great timber
              traditions of Scandinavia.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Where we work
              </p>
              <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
                Made in Kerry. Delivered across Munster.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Our home is Killarney, but we install regularly in Tralee, Kenmare,
                Cork, Limerick and the wider Munster region. Further afield? Get in
                touch — we'll travel for the right project.
              </p>
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
              >
                Talk to Rian
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={craftHands}
                alt="Craftsman's hands shaping timber"
                loading="lazy"
                width={1080}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
