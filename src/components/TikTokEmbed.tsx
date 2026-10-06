export function TikTokEmbed({
  videoId,
}: {
  videoId: string;
}) {
  return (
    <div className="flex justify-center">
      <iframe
        src={`https://www.tiktok.com/player/v1/${videoId}?lang=en-GB`}
        title="TikTok video"
        className="w-full max-w-[325px] overflow-hidden rounded-lg"
        style={{ height: "740px" }}
        allow="fullscreen"
      />
    </div>
  );
}

