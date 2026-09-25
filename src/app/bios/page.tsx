import type { Metadata } from "next";
import { ToolView, tools } from "@/components/ToolView";

const tool = tools.bios;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.lead,
  alternates: { canonical: "/bios" },
  openGraph: { title: `${tool.name} — Synx tools`, description: tool.lead, url: "/bios" },
};

export default function Page() {
  return <ToolView tool={tool} />;
}
