"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Tool } from "@/components/ToolView";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1.15, ease } },
};

export function ToolHero({ tool }: { tool: Tool }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="wrap">
        <img className="tool-logo" src={`/img/${tool.slug}.png`} alt="" />
        <p className="tool-tag">{tool.tag}</p>
        <h1>{tool.name}</h1>
        <p className="lede">{tool.lead}</p>
      </div>
    );
  }

  return (
    <motion.div
      className="wrap"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
    >
      <motion.img className="tool-logo" src={`/img/${tool.slug}.png`} alt="" variants={rise} />
      <motion.p className="tool-tag" variants={rise}>{tool.tag}</motion.p>
      <motion.h1 variants={rise}>{tool.name}</motion.h1>
      <motion.p className="lede" variants={rise}>{tool.lead}</motion.p>
    </motion.div>
  );
}
