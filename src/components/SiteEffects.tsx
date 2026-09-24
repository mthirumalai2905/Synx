"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const cards = [...document.querySelectorAll<HTMLElement>(".bento .card")];
    const onMove = (event: Event) => {
      const mouse = event as MouseEvent;
      const card = mouse.currentTarget as HTMLElement;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${mouse.clientX - box.left}px`);
      card.style.setProperty("--my", `${mouse.clientY - box.top}px`);
    };
    cards.forEach((card) => card.addEventListener("mousemove", onMove));

    const questions = [...document.querySelectorAll<HTMLDetailsElement>(".faq details")];
    const onToggle = (event: Event) => {
      const item = event.currentTarget as HTMLDetailsElement;
      if (!item.open) return;
      questions.forEach((other) => {
        if (other !== item) other.open = false;
      });
    };
    questions.forEach((item) => item.addEventListener("toggle", onToggle));

    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
    }

    return () => {
      cards.forEach((card) => card.removeEventListener("mousemove", onMove));
      questions.forEach((item) => item.removeEventListener("toggle", onToggle));
    };
  }, []);

  return null;
}
