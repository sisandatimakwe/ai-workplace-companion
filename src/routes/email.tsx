import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { AiToolPage } from "@/components/AiToolPage";

export const Route = createFileRoute("/email")({
  head: () => ({ meta: [{ title: "Smart Email Generator — AI Workplace" }] }),
  component: () => (
    <AiToolPage
      icon={<Mail className="h-6 w-6" />}
      title="Smart Email Generator"
      description="Describe the email you need and get a polished, professional draft."
      inputLabel="What's the email about?"
      inputPlaceholder="e.g. Follow up with a client about the Q3 proposal, polite but assertive, asking for a decision by Friday."
      system="You are an expert business email writer. Produce a single, ready-to-send email with a clear subject line, professional tone, concise structure, and appropriate sign-off. Output format: 'Subject: ...' on the first line, blank line, then the body."
      buildPrompt={(input) => `Write an email for the following request:\n\n${input}`}
      ctaLabel="Generate Email"
    />
  ),
});
