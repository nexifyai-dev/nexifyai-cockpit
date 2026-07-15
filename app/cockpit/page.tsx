import Link from "next/link"

const services = [
  { name: "Paperclip", port: 3100, status: "ok", url: "http://localhost:3100" },
  { name: "9Router", port: 20128, status: "ok", url: "http://localhost:20128" },
  { name: "Hermes Gateway", port: 8644, status: "warn", url: "https://dashboard.nexifyai.cloud" },
  { name: "AgentMemory", port: 3113, status: "ok", url: "https://agentmemory.nexifyai.cloud" },
  { name: "LightRAG", port: 9621, status: "ok", url: "https://rag.nexifyai.cloud" },
  { name: "Prometheus", port: 9090, status: "ok", url: "http://localhost:9090" },
  { name: "Grafana", port: 3030, status: "ok", url: "http://localhost:3030" },
  { name: "GitLab CE", port: 8922, status: "ok", url: "https://srv1243952.hstgr.cloud:8922" },
  { name: "Dashboard", port: 8880, status: "err", url: "https://admin.nexifyai.cloud" },
]

const kpis = [
  { label: "Aktive Services", value: "19/20", trend: "+1", color: "green" },
  { label: "Offene Tasks", value: "98", trend: "-5", color: "yellow" },
  { label: "RAM Nutzung", value: "88%", trend: "+2%", color: "yellow" },
  { label: "Disk Frei", value: "266 GB", trend: "—", color: "green" },
  { label: "Uptime", value: "8 Tage", trend: "—", color: "green" },
  { label: "Docker", value: "20", trend: "—", color: "green" },
]

export default function CockpitPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Cockpit Übersicht
      </h2>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="border border-white/10 bg-white/[0.03] rounded-xl p-4 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">{kpi.label}</div>
            <div className={`text-2xl font-bold ${
              kpi.color === "green" ? "text-green-400" : 
              kpi.color === "yellow" ? "text-yellow-400" : "text-red-400"
            }`}>{kpi.value}</div>
            <div className="text-xs text-zinc-600 mt-1">{kpi.trend}</div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Services</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.map((svc) => (
          <div key={svc.name} className="border border-white/10 bg-white/[0.03] rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-sm">{svc.name}</div>
              <div className="text-xs text-zinc-600">{svc.url}</div>
            </div>
            <span className={`text-xs font-medium uppercase px-2 py-0.5 rounded-full ${
              svc.status === "ok" ? "bg-green-500/10 text-green-400" :
              svc.status === "warn" ? "bg-yellow-500/10 text-yellow-400" :
              "bg-red-500/10 text-red-400"
            }`}>{svc.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
