export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24">
      <div className="animate-pulse space-y-6">
        <div className="h-4 w-28 rounded-full bg-ink/10" />
        <div className="h-12 w-2/3 max-w-xl rounded-xl bg-ink/10" />
        <div className="h-4 w-full max-w-2xl rounded-full bg-ink/8" />
        <div className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-56 rounded-2xl border border-ink/8 bg-ink/5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
