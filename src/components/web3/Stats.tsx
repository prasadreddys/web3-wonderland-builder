const stats = [
  { value: "$12.4B", label: "Total Value Locked" },
  { value: "1.2M+", label: "Daily Transactions" },
  { value: "180k", label: "Active Wallets" },
  { value: "0.001s", label: "Avg Block Time" },
];

export function Stats() {
  return (
    <section id="stats" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center transition hover:border-primary/40">
            <div className="text-3xl font-bold tracking-tight md:text-4xl text-gradient">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
