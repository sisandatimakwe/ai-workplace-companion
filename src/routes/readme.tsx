import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Lightbulb,
  Puzzle,
  Wrench,
  FileCode,
  CheckCircle,
  AlertTriangle,
  Code2,
  Layers,
  Zap,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ResponsibleAiNote } from "@/components/ResponsibleAiNote";

export const Route = createFileRoute("/readme")({
  head: () => ({
    meta: [
      { title: "About & Documentation — AI Workplace" },
      { name: "description", content: "Project overview, tools, architecture and documentation for the AI Workplace Productivity Assistant." },
    ],
  }),
  component: ReadmePage,
});

const techStack = [
  { category: "Framework & Routing", items: ["TanStack Start v1 — full-stack React framework with SSR support", "TanStack Router — file-based routing with type-safe navigation", "Vite 7 — build tool and dev server"] },
  { category: "Frontend", items: ["React 19 — UI library", "Tailwind CSS v4 — utility-first styling", "shadcn/ui — accessible, composable UI components", "Lucide React — icon library"] },
  { category: "Backend & AI", items: ["TanStack Server Functions — createServerFn for server-side logic", "Lovable AI Gateway — AI model access without API keys", "Zod — input validation"] },
  { category: "Auth & Data", items: ["Lovable Cloud (Supabase) — managed backend", "Supabase Auth — user authentication", "Supabase Realtime — live data subscriptions"] },
  { category: "Dev Tooling", items: ["TypeScript — type safety", "ESLint — code quality", "Prettier — code formatting"] },
];

const features = [
  {
    title: "Smart Email Generator",
    desc: "Draft professional emails from a few notes. Supports recipient selection, tone control, length options, and a live editable output preview.",
  },
  {
    title: "Meeting Notes Summarizer",
    desc: "Turn raw meeting notes into clean summaries with action items, key decisions, and owner assignments.",
  },
  {
    title: "AI Task Planner",
    desc: "Break goals into prioritized, scheduled tasks with deadlines and effort estimates.",
  },
  {
    title: "AI Research Assistant",
    desc: "Get structured briefs on any topic in seconds, with citations-ready formatting and bullet-point summaries.",
  },
  {
    title: "AI Chatbot",
    desc: "Conversational assistant for anything work-related, with conversation history and multi-turn context.",
  },
];

function ReadmePage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 p-6 md:p-8">
      {/* Header */}
      <section className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/30 p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
          <BookOpen className="h-3.5 w-3.5" /> Documentation
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          AI Workplace Productivity Assistant
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A modern, responsive web application that helps professionals automate everyday workplace tasks using AI.
        </p>
      </section>

      {/* Problem Statement */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Problem Statement</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Modern professionals spend a significant portion of their workday on repetitive, low-value tasks — writing emails, summarising meetings, planning tasks, and conducting research. These activities:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Drain productive hours that could be spent on strategic, high-impact work.</li>
                <li>Lead to inconsistent output quality due to fatigue and time pressure.</li>
                <li>Fragment focus, making deep work nearly impossible.</li>
                <li>Create bottlenecks when multiple people are waiting on simple deliverables (drafts, summaries, briefs).</li>
              </ul>
              <p>
                There is a clear need for an integrated, easy-to-use assistant that handles these routine tasks so professionals can focus on what matters most.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Solution Overview */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Lightbulb className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Solution Overview</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                The <strong className="text-foreground">AI Workplace Productivity Assistant</strong> is a unified dashboard of AI-powered tools designed to automate the five most common workplace productivity bottlenecks. Instead of switching between multiple apps or learning complex prompt engineering, users get structured, one-click AI assistance for:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-3 rounded-lg border border-border p-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{f.title}</p>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Every tool produces editable AI output — users are always in control and can refine results before using them.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tools Used */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/30">
            <Wrench className="h-4 w-4 text-accent-foreground" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Tools & Technologies</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {techStack.map((group) => (
            <Card key={group.category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Code2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Solution */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Puzzle className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Solution Architecture</h2>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Layers className="h-4 w-4 text-primary" /> Frontend Layer
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The UI is built with React 19 and Tailwind CSS, using shadcn/ui components for a consistent, accessible design system. TanStack Router provides type-safe, file-based routing. The sidebar navigation gives quick access to all tools, and every page is fully responsive from mobile to desktop.
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Zap className="h-4 w-4 text-primary" /> AI Layer
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                AI calls are made through Lovable AI Gateway, which provides access to powerful models without requiring users to supply their own API keys. Each tool sends a structured prompt (built from user form inputs) to the AI and receives a formatted response. The gateway handles model selection, rate limiting, and response streaming.
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Shield className="h-4 w-4 text-primary" /> Backend & Auth Layer
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Lovable Cloud (powered by Supabase) provides the managed backend. Supabase Auth handles user sign-up, login, and session management. TanStack Server Functions (createServerFn) run server-side logic securely, with auth middleware to protect user-specific data. Row-Level Security (RLS) policies ensure users can only access their own data.
              </p>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <FileCode className="h-4 w-4 text-primary" /> Key Design Decisions
              </h3>
              <ul className="ml-5 list-disc space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Structured prompts</strong> — Each tool uses carefully crafted prompt templates with user inputs injected, ensuring consistent, high-quality AI output.</li>
                <li><strong className="text-foreground">Editable outputs</strong> — AI responses are rendered in editable text areas so users can refine content before copying or sending.</li>
                <li><strong className="text-foreground">Responsive sidebar</strong> — Collapsible sidebar that works on all screen sizes, with tooltips and active-state indicators.</li>
                <li><strong className="text-foreground">Responsible AI</strong> — A visible disclaimer reminds users that AI outputs may be inaccurate and should always be reviewed.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Documentation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-4 w-4 text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight">Documentation</h2>
        </div>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Getting Started</h3>
              <ol className="ml-5 list-decimal space-y-2 text-sm text-muted-foreground">
                <li>Navigate to any tool from the sidebar or dashboard cards.</li>
                <li>Fill in the structured form (e.g., recipient, subject, tone for emails).</li>
                <li>Click <strong className="text-foreground">Generate</strong> to send the prompt to the AI.</li>
                <li>Edit the AI output directly in the text area if needed.</li>
                <li>Copy the final result to your clipboard using the copy button.</li>
              </ol>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Folder Structure</h3>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
{`src/
  routes/                    # Page routes (file-based routing)
    index.tsx               # Dashboard home
    email.tsx               # Smart Email Generator
    meeting-notes.tsx       # Meeting Notes Summarizer
    task-planner.tsx        # AI Task Planner
    research.tsx            # AI Research Assistant
    chatbot.tsx             # AI Chatbot
    readme.tsx              # This documentation page
  components/
    AiToolPage.tsx          # Reusable tool page shell
    AppSidebar.tsx          # Navigation sidebar
    ResponsibleAiNote.tsx   # AI disclaimer component
    ui/                     # shadcn/ui components
  lib/
    ai-gateway.server.ts    # AI Gateway server integration
    ai.functions.ts         # Server functions for AI calls
  integrations/supabase/     # Supabase client & auth setup
  styles.css                # Tailwind theme tokens`}
              </pre>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Environment Variables</h3>
              <p className="text-sm text-muted-foreground">
                The following variables are required (auto-configured by Lovable Cloud):
              </p>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li><code className="rounded bg-muted px-1 py-0.5 text-xs">VITE_SUPABASE_URL</code> — Supabase project URL</li>
                <li><code className="rounded bg-muted px-1 py-0.5 text-xs">VITE_SUPABASE_PUBLISHABLE_KEY</code> — Public anon key</li>
                <li><code className="rounded bg-muted px-1 py-0.5 text-xs">SUPABASE_SERVICE_ROLE_KEY</code> — Server-side admin key</li>
              </ul>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Adding a New Tool</h3>
              <ol className="ml-5 list-decimal space-y-2 text-sm text-muted-foreground">
                <li>Create a new route file in <code className="rounded bg-muted px-1 py-0.5 text-xs">src/routes/</code> (e.g., <code className="rounded bg-muted px-1 py-0.5 text-xs">my-tool.tsx</code>).</li>
                <li>Use <code className="rounded bg-muted px-1 py-0.5 text-xs">AiToolPage</code> as the page shell for consistent layout.</li>
                <li>Define your structured prompt inputs and build a prompt template.</li>
                <li>Call the AI via <code className="rounded bg-muted px-1 py-0.5 text-xs">createServerFn</code> or reuse the existing gateway function.</li>
                <li>Add the tool to <code className="rounded bg-muted px-1 py-0.5 text-xs">AppSidebar.tsx</code> and <code className="rounded bg-muted px-1 py-0.5 text-xs">src/routes/index.tsx</code> dashboard cards.</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      <ResponsibleAiNote />
    </div>
  );
}
