export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--gradient-primary)] text-primary-foreground">◆</span>
          NOVA<span className="text-gradient">CHAIN</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition">Docs</a>
          <a href="#" className="hover:text-foreground transition">GitHub</a>
          <a href="#" className="hover:text-foreground transition">Discord</a>
          <a href="#" className="hover:text-foreground transition">X / Twitter</a>
        </div>
        <p>© 2026 NovaChain Labs</p>
      </div>
    </footer>
  );
}
