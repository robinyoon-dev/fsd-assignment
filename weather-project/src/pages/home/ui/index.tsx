export function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Weather Dashboard
      </h1>
      <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
        Your project is now organized with Feature-Sliced Design. Build features
        in `features`, domain models in `entities`, and compose screens in
        `pages`.
      </p>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-4 text-sm text-slate-300">
        Start here: `src/pages/home`
      </div>
    </main>
  )
}
