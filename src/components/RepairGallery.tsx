import repairBefore from "@/assets/repair-before.jpg";
import repairDuring from "@/assets/repair-during.jpg";
import repairAfter from "@/assets/repair-after.jpg";

const photos = [
  {
    label: "Before",
    src: repairBefore,
    alt: "Old garden shed before repair, with weathered cladding and a broken timber floor",
  },
  {
    label: "During",
    src: repairDuring,
    alt: "Shed during repair, stripped back to a new timber frame and decking floor",
  },
  {
    label: "After",
    src: repairAfter,
    alt: "Repaired shed after the work, with new cladding, roof and covered porch",
  },
];

export function RepairGallery() {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {photos.map((photo, i) => (
        <figure key={photo.label}>
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
              {i + 1}
            </span>
            {photo.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
