export default function MarqueeBadges() {
  const badges = [
    "Baddie 😎",
    "Angel 🪽",
    "Dreamgirl 💫",
    "Sweetheart 💖",
    "Icon ✨",
    "Stunner 🌸",
    "Sunshine ☀️",
    "Queen 👑",
    "Cutie 🥹",
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-pink-100/60 bg-white/40 my-10 backdrop-blur-sm">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center gap-6">
          {badges.map((b, i) => (
            <span key={i} className="text-sm font-semibold tracking-wide text-neutral-600 px-4 py-1.5 rounded-full bg-pink-50/70 border border-pink-100 whitespace-nowrap">
              {b}
            </span>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center gap-6">
          {badges.map((b, i) => (
            <span key={`clone-${i}`} className="text-sm font-semibold tracking-wide text-neutral-600 px-4 py-1.5 rounded-full bg-pink-50/70 border border-pink-100 whitespace-nowrap">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
