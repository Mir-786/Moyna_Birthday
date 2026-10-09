'use client';

import Image from 'next/image';

const photos = [
  { id: 1, label: "Cutie 🥹", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80" },
  { id: 2, label: "Baddie 😎", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80" },
  { id: 3, label: "Pretty ✨", src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80" },
  { id: 4, label: "My Love 🤍", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80" },
  { id: 5, label: "Sunshine ☀️", src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=80" },
  { id: 6, label: "Angel 🪽", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80" },
  { id: 7, label: "Beautiful 🌸", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80" },
  { id: 8, label: "Dream Girl 💫", src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80" },
  { id: 9, label: "Queen 👑", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80" },
];

export default function MemoryGrid() {
  return (
    <section className="w-full max-w-5xl px-4 mx-auto my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 tracking-tight">Memories</h2>
        <p className="text-sm text-neutral-500 mt-1">Made just for you ✿</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-pink-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100">
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-semibold text-neutral-800 text-sm">{item.label}</span>
              <span className="text-rose-500 text-sm">❤️</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
