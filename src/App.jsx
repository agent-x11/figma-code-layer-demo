import { useState } from 'react'

// Fiktive Demo-Daten – keine echten Personen
const CASES = [
  { id: 'F-1042', name: 'Muster, Anna', status: 'offen', due: '12.11.2026', owner: 'J. Weber' },
  { id: 'F-1043', name: 'Beispiel, Tom', status: 'in Prüfung', due: '14.11.2026', owner: 'S. Kaya' },
  { id: 'F-1044', name: 'Test, Lena', status: 'abgeschlossen', due: '02.11.2026', owner: 'J. Weber' },
  { id: 'F-1045', name: 'Demo, Paul', status: 'offen', due: '20.11.2026', owner: 'M. Roth' },
]

const STATUS_STYLES = {
  offen: 'bg-amber-100 text-amber-800',
  'in Prüfung': 'bg-brand-50 text-brand-600',
  abgeschlossen: 'bg-emerald-100 text-emerald-800',
}

function StatusBadge({ status }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  )
}

function CaseCard({ item }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-slate-500">{item.id}</p>
          <h3 className="mt-0.5 font-semibold text-slate-900">{item.name}</h3>
        </div>
        <StatusBadge status={item.status} />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-slate-500">Fällig</dt>
          <dd className="text-slate-800">{item.due}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Zuständig</dt>
          <dd className="text-slate-800">{item.owner}</dd>
        </div>
      </dl>
    </article>
  )
}

export default function App() {
  const [filter, setFilter] = useState('alle')
  const filters = ['alle', 'offen', 'in Prüfung', 'abgeschlossen']
  const visible = filter === 'alle' ? CASES : CASES.filter((c) => c.status === filter)

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold text-slate-900">Fallübersicht</h1>
          <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600">
            Neuer Fall
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1 text-sm ${
                filter === f
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}
