import { useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateAiText } from "@/lib/ai.functions";
import { toast } from "sonner";
import { ResponsibleAiNote } from "./ResponsibleAiNote";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  system: string;
  buildPrompt: (input: string) => string;
  ctaLabel?: string;
}

export function AiToolPage({
  icon,
  title,
  description,
  inputLabel,
  inputPlaceholder,
  system,
  buildPrompt,
  ctaLabel = "Generate",
}: Props) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const run = useServerFn(generateAiText);

  const onGenerate = async () => {
    if (!input.trim()) {
      toast.error("Please enter some input first.");
      return;
    }
    setLoading(true);
    try {
      const res = await run({ data: { system, prompt: buildPrompt(input) } });
      setOutput(res.text);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Generation failed";
      if (msg.includes("429")) toast.error("Rate limit hit — try again shortly.");
      else if (msg.includes("402")) toast.error("AI credits exhausted. Add credits in Workspace settings.");
      else toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  const onCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-6 md:p-8">
      <header className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{inputLabel}</CardTitle>
            <CardDescription>Provide as much detail as you can for the best result.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={inputPlaceholder}
              className="min-h-64 resize-none"
            />
            <Button onClick={onGenerate} disabled={loading} className="w-full">
              {loading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating…</>
              ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> {ctaLabel}</>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-base">AI Output</CardTitle>
              <CardDescription>Editable — refine before sending.</CardDescription>
            </div>
            {output && (
              <Button variant="outline" size="sm" onClick={onCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <Textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              placeholder="Your AI-generated draft will appear here…"
              className="min-h-64 resize-none font-mono text-sm"
            />
          </CardContent>
        </Card>
      </div>

      <ResponsibleAiNote />
    </div>
  );
}
