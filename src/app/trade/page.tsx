import type { Metadata } from "next";
import { ToolView, tools } from "@/components/ToolView";

const tool = tools.trade;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.lead,
  alternates: { canonical: "/trade" },
  openGraph: { title: `${tool.name} — Synx tools`, description: tool.lead, url: "/trade" },
};

export default function Page() {
  return <ToolView tool={tool} />;
}
