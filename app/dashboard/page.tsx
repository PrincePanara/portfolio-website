import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { LayoutDashboard, Users, MessageSquare, FileText, TrendingUp, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard for Prince Panara's portfolio.",
};

const mockStats = [
  { label: "Total Visitors", value: "12,482", change: "+18.2%", icon: Eye, color: "#6C47FF" },
  { label: "Contact Requests", value: "47", change: "+5.1%", icon: MessageSquare, color: "#00D4FF" },
  { label: "Project Views", value: "4,219", change: "+9.7%", icon: TrendingUp, color: "#4ECDC4" },
];

const recentContacts = [
  { name: "Alex M.", email: "alex@novatech.io", subject: "SaaS Project Inquiry", date: "2024-12-01", status: "new" },
  { name: "Sarah C.", email: "sarah@luminary.co", subject: "UI/UX Design Quote", date: "2024-11-30", status: "replied" },
  { name: "Marcus J.", email: "marcus@launchkit.app", subject: "Flutter App Development", date: "2024-11-28", status: "replied" },
  { name: "Priya S.", email: "priya@brandwave.in", subject: "Brand Website Design", date: "2024-11-26", status: "closed" },
];

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-secondary)]">
      <div className="container-xl py-10">
        {/* Header */}
        <FadeIn className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard size={18} className="text-[var(--accent-primary)]" />
              <h1 className="text-heading-md font-display font-extrabold text-[var(--text-primary)]">
                Dashboard
              </h1>
            </div>
            <p className="text-[13px] text-[var(--text-secondary)]">
              Your portfolio analytics at a glance.
            </p>
          </div>
          <span className="tag">Private</span>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {mockStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.color}20` }}
                  >
                    <stat.icon size={16} style={{ color: stat.color }} />
                  </div>
                  <span className="text-[11px] font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-[24px] font-display font-extrabold text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Recent Contacts */}
        <FadeIn>
          <div className="card overflow-hidden">
            <div className="p-5 border-b border-[var(--border)]">
              <h2 className="font-display font-bold text-[16px] text-[var(--text-primary)]">
                Recent Contact Requests
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left px-5 py-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Name</th>
                    <th className="text-left px-5 py-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Subject</th>
                    <th className="text-left px-5 py-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Date</th>
                    <th className="text-left px-5 py-3 text-[11px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContacts.map((contact, i) => (
                    <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-fast">
                      <td className="px-5 py-3.5">
                        <div className="text-[13px] font-semibold text-[var(--text-primary)]">{contact.name}</div>
                        <div className="text-[11px] text-[var(--text-tertiary)]">{contact.email}</div>
                      </td>
                      <td className="px-5 py-3.5 text-[13px] text-[var(--text-secondary)]">{contact.subject}</td>
                      <td className="px-5 py-3.5 text-[12px] text-[var(--text-tertiary)] font-mono">{contact.date}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full capitalize ${
                          contact.status === "new" ? "bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]" :
                          contact.status === "replied" ? "bg-green-500/20 text-green-400" :
                          "bg-gray-500/20 text-gray-400"
                        }`}>
                          {contact.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
