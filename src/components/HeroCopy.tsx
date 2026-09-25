"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const line = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.95, ease } },
};

const lines = ["Run it live.", "Keep it yours."];

function BetaSketch() {
  return (
    <svg className="beta-sketch" viewBox="0 0 180 130" aria-hidden="true">
      <g transform="rotate(-8 128 28)">
        <text className="beta-script" x="72" y="38">Beta</text>
      </g>
      <path className="beta-arrow" pathLength="1" d="M122 42C160 56 154 90 118 102C88 112 70 108 56 122" />
      <path className="beta-head" pathLength="1" d="M70 108L50 128L74 118" />
    </svg>
  );
}

export function HeroCopy() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span> The operating tools for a Real Time Web domain<BetaSketch /></div>
        <h1>Run it live. Keep it yours.</h1>
        <p className="lede">Synx is the tool suite for domain owners, developers, and consumers. It configures, secures, and operates the network, while each role keeps the layer that belongs to them.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#suite">See the tools</a>
          <a className="btn btn-ghost" href="#process">How it works</a>
        </div>
        <div className="logo-row" id="connected">
          <span>Connected to</span>
          <div className="marks">
            <a href="https://realtimeweb.org" target="_blank" rel="noreferrer"><img src="/img/realtimeweb.png" alt="Real Time Web" /></a>
            <a href="https://morph.space" target="_blank" rel="noreferrer"><img src="/img/morphspace.png" alt="Morph Space" /></a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="wrap"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
    >
      <motion.div className="eyebrow" variants={rise}>
        <span className="dot"></span> The operating tools for a Real Time Web domain
        <BetaSketch />
      </motion.div>
      <h1>
        {lines.map((text) => (
          <span className="hero-line" key={text}>
            <motion.span variants={line}>{text}</motion.span>
          </span>
        ))}
      </h1>
      <motion.p className="lede" variants={rise}>
        Synx is the tool suite for domain owners, developers, and consumers. It configures, secures, and operates the network, while each role keeps the layer that belongs to them.
      </motion.p>
      <motion.div className="hero-cta" variants={rise}>
        <a className="btn btn-primary" href="#suite">See the tools</a>
        <a className="btn btn-ghost" href="#process">How it works</a>
      </motion.div>
      <motion.div className="logo-row" id="connected" variants={rise}>
        <span>Connected to</span>
        <div className="marks">
          <a href="https://realtimeweb.org" target="_blank" rel="noreferrer"><img src="/img/realtimeweb.png" alt="Real Time Web" /></a>
          <a href="https://morph.space" target="_blank" rel="noreferrer"><img src="/img/morphspace.png" alt="Morph Space" /></a>
        </div>
      </motion.div>
    </motion.div>
  );
}
