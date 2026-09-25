import type { Metadata } from "next";
import { ToolView, tools } from "@/components/ToolView";

const tool = tools.pass;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.lead,
  alternates: { canonical: "/pass" },
  openGraph: { title: `${tool.name} — Synx tools`, description: tool.lead, url: "/pass" },
};

export default function Page() {
  return <ToolView tool={tool} />;
}
