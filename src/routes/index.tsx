import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, FileText, ListTodo, Search, MessageSquare, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsibleAiNote } from "@/components/ResponsibleAiNote";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — AI Workplace" },
      { name: "description", content: "Your AI-powered productivity hub for everyday workplace tasks." },
    ],
  }),
  component: Dashboard,
});

const tools = [
  { to: "/email", icon: Mail, title: "Smart Email Generator", desc: "Draft professional emails from a few notes." },
  { to: "/meeting-notes", icon: FileText, title: "Meeting Notes Summarizer", desc: "Turn raw notes into clean summaries with action items." },
  { to: "/task-planner", icon: ListTodo, title: "AI Task Planner", desc: "Break goals into prioritized, scheduled tasks." },
  { to: "/research", icon: Search, title: "AI Research Assistant", desc: "Get structured briefs on any topic in seconds." },
  { to: "/chatbot", icon: MessageSquare, title: "AI Chatbot", desc: "Conversational assistant for anything work-related." },
] as const;

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 p-6 md:p-8">
      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/30 p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <Sparkles className="h-3.5 w-3.5" /> AI Workplace Productivity
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Work smarter, not harder.
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A suite of AI assistants for the everyday tasks that slow you down — emails, meetings,
          planning, research, and instant answers.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Your AI Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.to} to={t.to} className="group">
              <Card className="h-full transition-all hover:border-primary/40 hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="flex items-center justify-between text-base">
                    {t.title}
                    <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription>{t.desc}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <ResponsibleAiNote />
    </div>
  );
}
