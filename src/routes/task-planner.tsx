import { createFileRoute } from "@tanstack/react-router";
import { ListTodo } from "lucide-react";
import { AiToolPage } from "@/components/AiToolPage";

export const Route = createFileRoute("/task-planner")({
  head: () => ({ meta: [{ title: "AI Task Planner — AI Workplace" }] }),
  component: () => (
    <AiToolPage
      icon={<ListTodo className="h-6 w-6" />}
      title="AI Task Planner"
      description="Describe a goal or project — get a prioritized, actionable plan."
      inputLabel="What do you want to plan?"
      inputPlaceholder="e.g. Launch a new product landing page in 2 weeks with design, copy, and analytics setup."
      system="You are a senior project planner. Return a markdown plan with: '## Objective' (1 sentence), '## Milestones' (numbered with target dates relative to today), '## Task Breakdown' (table or grouped bullets with priority High/Med/Low and estimated effort), and '## Risks & Mitigations'."
      buildPrompt={(input) => `Create a task plan for the following goal:\n\n${input}`}
      ctaLabel="Generate Plan"
    />
  ),
});
