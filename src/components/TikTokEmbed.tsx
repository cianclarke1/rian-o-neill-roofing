import { useEffect, useRef } from "react";

declare global {
  interface Window {
    tiktokEmbed?: { load: (el?: HTMLElement) => void };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTikTokScript(): Promise<void> {
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.tiktok.com/embed.js"]',
      );
      if (existing) {
        existing.addEventListener("load", () => resolve(), { once: true });
        if (window.tiktokEmbed) resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

export function TikTokEmbed({ url, videoId }: { url: string; videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    loadTikTokScript().then(() => {
      if (!cancelled) window.tiktokEmbed?.load(containerRef.current ?? undefined);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: 325, minWidth: 280 }}
      >
        <section>
          <a target="_blank" rel="noreferrer" href={url}>
            Watch on TikTok
          </a>
        </section>
      </blockquote>
    </div>
  );
}
