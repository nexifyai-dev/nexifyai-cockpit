const services = [
  { name: "Paperclip", port: 3100, url: "http://localhost:3100", desc: "Control Plane" },
  { name: "9Router", port: 20128, url: "http://localhost:20128", desc: "LLM Router" },
  { name: "Hermes Gateway", port: 8644, url: "https://dashboard.nexifyai.cloud", desc: "Kommunikation" },
  { name: "AgentMemory", port: 3113, url: "https://agentmemory.nexifyai.cloud", desc: "Gedachtnis" },
  { name: "LightRAG", port: 9621, url: "https://rag.nexifyai.cloud", desc: "Vektor-RAG" },
  { name: "Prometheus", port: 9090, url: "http://localhost:9090", desc: "Metriken" },
  { name: "Grafana", port: 3030, url: "http://localhost:3030", desc: "Dashboards" },
  { name: "GitLab CE", port: 8922, url: "https://srv1243952.hstgr.cloud:8922", desc: "VCS/CI" },
  { name: "Dashboard", port: 8880, url: "https://admin.nexifyai.cloud", desc: "Command Center" },
]

export default function SystemPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">System</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {services.map((svc) => (
          <div key={svc.name} className="border border-white/10 bg-white/[0.03] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm">{svc.name}</span>
              <code className="text-xs bg-zinc-900 px-2 py-0.5 rounded">:{svc.port}</code>
            </div>
            <div className="text-xs text-zinc-500 mb-2">{svc.desc}</div>
            <a href={svc.url} target="_blank" rel="noreferrer" className="text-xs text-zinc-400 hover:text-white">
              {svc.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
