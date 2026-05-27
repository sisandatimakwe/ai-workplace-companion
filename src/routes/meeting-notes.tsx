import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { AiToolPage } from "@/components/AiToolPage";

export const Route = createFileRoute("/meeting-notes")({
  head: () => ({ meta: [{ title: "Meeting Notes Summarizer — AI Workplace" }] }),
  component: () => (
    <AiToolPage
      icon={<FileText className="h-6 w-6" />}
      title="Meeting Notes Summarizer"
      description="Paste raw meeting notes or a transcript and get a clean, structured summary."
      inputLabel="Paste your raw notes or transcript"
      inputPlaceholder="Paste meeting notes, transcript, or bullet points here…"
      system="You are an expert meeting summarizer. Always return well-structured markdown with these sections: '## Summary' (2-4 sentences), '## Key Decisions' (bullets), '## Action Items' (bullets with owner and due date if available), and '## Open Questions' (bullets)."
      buildPrompt={(input) => `Summarize the following meeting notes:\n\n${input}`}
      ctaLabel="Summarize Notes"
    />
  ),
});
