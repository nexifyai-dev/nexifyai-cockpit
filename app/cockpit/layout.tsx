import Link from "next/link"

const departments = [
  { href: "/cockpit", label: "Übersicht", icon: "◉" },
  { href: "/cockpit/leitung", label: "Leitung", icon: "◆" },
  { href: "/cockpit/vertrieb", label: "Vertrieb", icon: "💰" },
  { href: "/cockpit/marketing", label: "Marketing", icon: "📢" },
  { href: "/cockpit/kunden", label: "Kunden", icon: "👥" },
  { href: "/cockpit/projekte", label: "Projekte", icon: "📋" },
  { href: "/cockpit/entwicklung", label: "Entwicklung", icon: "⚙" },
  { href: "/cockpit/design", label: "Design", icon: "🎨" },
  { href: "/cockpit/support", label: "Support", icon: "🛟" },
  { href: "/cockpit/buchhaltung", label: "Buchhaltung", icon: "📊" },
  { href: "/cockpit/operations", label: "Operations", icon: "🔧" },
  { href: "/cockpit/recht", label: "Recht", icon: "⚖" },
  { href: "/cockpit/system", label: "System", icon: "🖥" },
]

export default function CockpitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      <aside className="w-64 border-r border-white/10 bg-white/[0.02] fixed left-0 top-0 h-screen overflow-y-auto">
        <div className="p-4 border-b border-white/10">
          <h1 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            NeXifyAI
          </h1>
          <p className="text-xs text-zinc-500 mt-1">Unified Cockpit</p>
        </div>
        <nav className="py-2">
          {departments.map((dept) => (
            <Link
              key={dept.href}
              href={dept.href}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>{dept.icon}</span>
              <span>{dept.label}</span>
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="text-xs text-zinc-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>System Live</span>
            </div>
            <div>Port 8901 · VPS-native</div>
          </div>
        </div>
      </aside>
      <main className="flex-1 ml-64 p-6">
        {children}
      </main>
    </div>
  )
}
