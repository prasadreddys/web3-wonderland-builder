import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            ◆
          </span>
          <span className="text-lg">NOVA<span className="text-gradient">CHAIN</span></span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#stats" className="hover:text-foreground transition">Network</a>
          <a href="#cta" className="hover:text-foreground transition">Build</a>
        </div>
        <Button className="rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 hover:scale-105 transition">
          Launch App
        </Button>
      </nav>
    </header>
  );
}
