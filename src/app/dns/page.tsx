import type { Metadata } from "next";
import { ToolView, tools } from "@/components/ToolView";

const tool = tools.dns;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.lead,
  alternates: { canonical: "/dns" },
  openGraph: { title: `${tool.name} — Synx tools`, description: tool.lead, url: "/dns" },
};

export default function Page() {
  return <ToolView tool={tool} />;
}
