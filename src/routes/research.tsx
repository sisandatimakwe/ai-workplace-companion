import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { AiToolPage } from "@/components/AiToolPage";

export const Route = createFileRoute("/research")({
  head: () => ({ meta: [{ title: "AI Research Assistant — AI Workplace" }] }),
  component: () => (
    <AiToolPage
      icon={<Search className="h-6 w-6" />}
      title="AI Research Assistant"
      description="Get a structured brief on any topic — fast."
      inputLabel="What do you want to research?"
      inputPlaceholder="e.g. The current state of retrieval-augmented generation for enterprise knowledge bases."
      system="You are a thorough research analyst. Return markdown with: '## Overview' (3-5 sentences), '## Key Concepts' (bulleted definitions), '## Current Landscape' (bullets), '## Pros & Cons' (two columns or two bulleted lists), and '## Further Reading' (suggested search topics). Be factual; flag uncertainty explicitly. Do not fabricate citations."
      buildPrompt={(input) => `Produce a research brief on:\n\n${input}`}
      ctaLabel="Run Research"
    />
  ),
});
