import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, Hammer, Wrench } from "lucide-react";
import craftHands from "@/assets/craft-hands.jpg";
import { RepairGallery } from "@/components/RepairGallery";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Shed Repairs & Timber Work in Kerry, Cork & Limerick | Rian O'Neill",
      },
      {
        name: "description",
        content:
          "Shed repairs and general timber work across Kerry, Cork and Limerick. Rian O'Neill repairs existing garden sheds and takes on all kinds of timber jobs. Free quotes.",
      },
      {
        property: "og:title",
        content: "Shed Repairs & Timber Work | Rian O'Neill Garden Sheds",
      },
      {
        property: "og:description",
        content:
          "Repairs to existing garden sheds and general timber work across Kerry, Cork and Limerick.",
      },
    ],
  }),
  component: ServicesPage,
});

const repairs = [
  "Roof and felt repairs",
  "Replacing rotten or damaged boards and floors",
  "Doors, hinges and locks",
  "Weatherproofing and timber treatment",
];

const steps = [
  {
    title: "Tell us what you need",
    body: "Get in touch with a short description of the job. A photo or two helps us understand it quickly.",
  },
  {
    title: "Get a free quote",
    body: "Rian will talk it through with you and give you a clear, honest price before any work starts.",
  },
  {
    title: "Job done properly",
    body: "The work is carried out with care, and you're left with a shed or timber job built to last.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Services
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
          Shed repairs &
          <br />
          <em className="font-light italic">timber work.</em>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          As well as supplying and installing new timber sheds, Rian repairs
          existing sheds and takes on all kinds of timber work across Kerry,
          Cork and Limerick.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Recent repair
        </p>

        <h2 className="mt-3 font-display text-3xl text-balance sm:text-4xl">
          Before, during & after.
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A tired, weathered shed rebuilt on a new timber frame and floor,
          with fresh cladding, a new roof and a covered porch.
        </p>

        <div className="mt-10">
          <RepairGallery />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <article className="flex flex-col rounded-lg border border-border bg-secondary/40 p-8 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Wrench className="h-5 w-5" />
            </div>

            <h2 className="mt-6 font-display text-3xl sm:text-4xl">
              Shed repairs
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Don&apos;t replace a shed that can be saved. Whether it&apos;s
              leaking, rotting or just showing its age, Rian can repair your
              existing shed and get it back in good shape.
            </p>

            <ul className="mt-6 space-y-2 text-sm">
              {repairs.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-px w-6 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
              >
                Ask about a repair
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="flex flex-col rounded-lg border border-border bg-secondary/40 p-8 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Hammer className="h-5 w-5" />
            </div>

            <h2 className="mt-6 font-display text-3xl sm:text-4xl">
              General timber work
            </h2>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              If it&apos;s made of timber, ask Rian. From small fixes to
              bigger jobs around the garden and home, get in touch and
              we&apos;ll talk through what you need.
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              Not sure if it&apos;s something we do? Just ask. If we can
              help, we will.
            </p>

            <div className="mt-auto pt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm text-primary hover:gap-3"
              >
                Ask about timber work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

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
              How it works
            </p>

            <h2 className="mt-3 font-display text-4xl text-balance sm:text-5xl">
              Simple from start to finish.
            </h2>

            <ol className="mt-12 space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg text-primary">
                    {i + 1}
                  </div>

                  <div>
                    <h3 className="font-display text-xl">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-2xl bg-foreground p-10 text-center text-background md:p-16">
          <h2 className="font-display text-3xl text-balance sm:text-4xl">
            Got a shed that needs fixing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/70">
            Or another timber job in mind? Tell us about it and we&apos;ll get
            back to you with a free quote.
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
