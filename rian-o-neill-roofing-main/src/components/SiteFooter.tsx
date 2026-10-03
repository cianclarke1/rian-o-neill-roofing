import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl tracking-tight">
              Rian O'Neill
              <span className="block text-base font-sans uppercase tracking-[0.25em] text-background/60">
                Garden Sheds
              </span>
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              Hand-built timber sheds, workshops and garden rooms,
              crafted in Killarney for homes across County Kerry and beyond.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Visit</p>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Killarney, Co. Kerry, Ireland</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+353874462026" className="hover:text-background">+353 (0) 87 446 2026</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:rianoneill76@gmail.com" className="hover:text-background">rianoneill76@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li><Link to="/range" className="hover:text-background">The Range</Link></li>
              <li><Link to="/about" className="hover:text-background">About</Link></li>
              <li><Link to="/contact" className="hover:text-background">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-background/15 pt-8 text-xs text-background/50 md:flex-row">
          <p>© {new Date().getFullYear()} Rian O'Neill Garden Sheds. Made in Kerry.</p>
          <p>Serving Killarney, Tralee, Kenmare & all of Munster.</p>
        </div>
      </div>
    </footer>
  );
}
