import Header from "../components/Header";
import Counter from "../components/Counter";
import MarqueeBadges from "../components/MarqueeBadges";
import MemoryGrid from "../components/MemoryGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between pb-12">
      <div className="w-full flex flex-col items-center">
        {/* Top Header */}
        <Header />

        {/* Live Age / Time Counter */}
        <div className="mt-4 mb-2">
          <Counter birthDateString="2002-08-02T00:00:00" />
        </div>

        {/* Sliding Badges Ticker */}
        <MarqueeBadges />

        {/* Image Grid with Cards */}
        <MemoryGrid />
      </div>

      <footer className="mt-16 text-center text-xs text-neutral-400">
        Made with ❤️ for you
      </footer>
    </main>
  );
}
