# Master prompt: RealTimeWeb.org encyclopedia (for UX + content assist)

Copy everything below the line to your UX designer (or paste it into their LLM together with the two sources).

---

## Charter (put this on the website, at the top, on every page)

This website is **free**. It exists so any human, and any AI agent, can learn and explain the Real Time Web.

**The Real Time Web is a gift to humankind by Paal Kristian Levang.**

Hard rules for the product and the UI:

- **No ads.** No ad slots, sponsors, affiliate units, or tracking pixels used to sell.
- **No sales links.** No pricing, plans, checkout, “buy”, “subscribe”, or “get a demo”.
- **Do not promote products.** Morph.Space and Synx tools (and any similar product) must **not** be marketed here. Name them only as **learning references**: historical or conceptual examples so a reader can understand the architecture. Never as Join / Operate / Sign up CTAs. Never in the header or footer as product promotion.
- **No account. No login. No newsletter funnel.** Knowledge is the only offering.

Reuse a short **gift banner** on every page, above the article:

The Real Time Web is a gift to humankind by Paal Kristian Levang. This site is free. No ads. No sales.

## Role

You are a senior UX designer, information architect, and encyclopedia editor.

You are designing **RealTimeWeb.org**: the **acting knowledge base** for the Real Time Web. It is a Wikipedia-like encyclopedia that can also be read as a book of lessons. People come here to **understand**, with **worked examples**. It is not a product app, not a marketplace, not an operations console, and not a storefront.

Three readers must succeed on the same pages:

1. **Non-technical humans** who need stories, analogies, and a plain first paragraph.
2. **Technical humans** who need precise terms, diagrams, and layer models.
3. **AI agents / crawlers** who need stable URLs, first-sentence definitions, glossary links, status flags, and HTML that does not require a login or a click to exist.

## Sources you must use (in this order)

1. **Notion workspace (human browsing, diagrams, extra pages):**
   https://app.notion.com/p/Synx-3dc33bfa265480d2a857c7cd9ea5b60b?source=copy_link
2. **Canonical LLM / crawl corpus (treat this as the book manuscript):**
   `trw/content/therealweb.md`
   If you have a local checkout, that path is the concatenated export of the Notion text. Prefer quoting it over paraphrasing. Do not invent past this corpus.
3. **Reference briefs only (never promote these products on this site):**
   - `trw/content/morphspace.md` — how a marketplace implementation was described in source
   - `trw/content/synxtools.md` — how an operator stack was described in source

If Notion and the markdown disagree, **mark the conflict**. Do not silently pick a prettier story.

## What this website is

- **Acting knowledge base** for the Real Time Web. Users come here to learn, not to buy.
- Teach with **examples** on every chapter: one human-scale story, then the same idea in technical terms.
- Conceptual encyclopedia for **how live bidirectional resource relationships work**.
- **Free. No ads. No sales. No product promotion.**
- **No account. No login. No signup. No domain purchase. No checkout.**
- Gift line on every page: The Real Time Web is a gift to humankind by Paal Kristian Levang.

## What this website is not

- Not the World Wide Web, and not a replacement for the Internet.
- Not Morph.Space, Synx tools, or any other product, promoted or sold.
- Not Morph.Space screens, forms, or marketplace checkout.
- Not Synx Cat command tables as the primary UX.
- Not invented REST APIs, token JSON, wire formats, or onboarding click-paths.
- Not investor metrics (60x cost, 1000x faster, 95% less development time) as FAQ facts. Those live in research/HIVE Q&A with “research in progress” status.

## Voice

Specification and teaching. Informal visionary. Open, simple, reciprocal.

No em dashes in user-facing copy.

Brand lines allowed:

- Eternal widespread ownership of the Web
- Enable an open ecosystem for the Real Time Web
- Let anyone connect anything to the present
- Do not let unknown platforms govern your data
- Make amazing things together

Every article opens with a **plain-language lead** (2–4 sentences a non-technical adult can read aloud), then an **example**, then optional technical sections. Never open with jargon. Never teach a concept with no example.

## Design and brand guidelines

The look is **modern, Vercel-like, dark-themed documentation**. Inspired by Vercel’s design philosophy, not a Vercel clone and not their logo.

Think: Vercel Docs / Next.js docs at night. Calm. Sharp. Almost no chrome. The teaching is the product.

### Theme

- **Default is dark.** Near-black page (`#000` or `#0A0A0A`). Surfaces a half-step up (`#111`).
- Text: off-white primary, muted zinc secondary.
- Hairline borders: `1px` zinc at low opacity. No thick frames.
- **Accent is rare.** One accent only (cool white, or a single zinc highlight) for the current nav item, links, and status. Do not rainbow the UI.
- Code and defined terms: tabular / mono, still muted.
- Optional light theme is accessibility only. Design dark first. Do not ship a colorful marketing theme.

### Type

- One geometric sans for UI and body (Geist / Inter / similar). One mono for commands, slugs, ghostId, XML.
- Tight, sharp headings. Generous line-height in the lesson column.
- Do not use display fonts, serifs, or “startup gradient text”.

### Surfaces and motion

- Flat. No drop shadows. No glassmorphism. No glow.
- No gradients except a barely-there hairline if needed on the top bar.
- Motion: 150–200ms opacity/translate on nav highlight and on-this-page spy. Nothing decorative.
- Radius: small (6–8px) on cards and code blocks. Not pills everywhere.

### The three-column shell in this theme

- Left nav: same near-black, active row with a quiet fill and a 1px left mark.
- Middle: max readable measure (about 720–800px). The lesson is the brightest text on the page.
- Right “On this page”: smaller, quieter type. Active heading uses the same accent as the left nav.
- Gift banner: a thin top bar or a one-line note under the header. Not a colorful campaign strip.

### What it must not look like

- Not a SaaS dashboard.
- Not a consumer magazine.
- Not a Morph.Space or Synx marketing site.
- Not light-grey Bootstrap docs.
- Not neon cyberpunk.

### Components in this language

Buttons in the docs chrome are ghost or hairline (Copy page, Previous, Next). Never primary “Get started” sales buttons.

Status pills: outline only (published / draft / pending / unanswered), not candy colors.

Example blocks: a left hairline + muted label **Example**, then the story. Same dark surface, not a yellow callout.

Diagrams: black field, white strokes, zinc labels. High contrast so they print in the reader’s mind.

### Brand lines still apply

Open, simple, reciprocal. Informal visionary. The dark UI is quiet so the gift line and the examples can be read without noise.

## Page layout (this is the UI)

Match a documentation knowledge-base shell, like a docs product (left nav, article, on-this-page). Not a marketing landing page. Not a dashboard.

```
+------------------+---------------------------+------------------+
| LEFT             | MIDDLE                    | RIGHT            |
| Chapters         | The lesson                | On this page     |
| and sections     | Title, lead, example,     | Sub contents     |
| of the book      | body, diagrams            | (h2 / h3)        |
+------------------+---------------------------+------------------+
```

**Left column: book navigation**

- Nested tree: Volume → Chapter → Section.
- Current chapter is highlighted.
- Sections under the open chapter are visible without leaving the page tree.
- This is how a human walks the whole knowledge base in order.
- Collapse volumes that are not active. Keep the current trail expanded.
- Search sits above the tree.
- Mobile: the tree becomes a drawer. Do not drop it.

**Middle column: the lesson (primary)**

- Gift banner, then article title, status pill, then content.
- **Copy page** is allowed. No ads. No product buttons.
- Teaching order inside the article, always:
  1. Plain lead (what this is)
  2. **Example** (a person, a lamp, a message, a sensor: something someone can picture)
  3. How it works (the architecture)
  4. Diagram if the chapter has a slot
  5. What to remember
  6. Related lessons
- Prev / Next chapter at the bottom of the middle column only.

**Right column: on-this-page**

- Heading: **On this page**.
- Auto list of the article’s `h2` / `h3` sub contents.
- Scroll-spy highlight as the reader moves.
- This is the in-page outline, not a second copy of the book tree.
- Hide the right column only below a narrow breakpoint. Never hide the headings from the HTML (agents still need them).

Home / landing can be slightly wider. **Every lesson page uses this three-column shell.**

## Dual reading model

The left tree **is** book mode. Clicking a chapter still yields a standalone encyclopedia URL. Do not build two separate sites.

Wikipedia-like: search, inbound links, see also. Book-like: start at Chapter 1 and finish. Classroom-like: every idea has an example.

## Crawlability and AI-agent contract (non-negotiable)

Agents should be able to fetch the full meaning **without executing a product SPA**.

Implement (or specify in the design system):

- Semantic HTML. Real `<h1>`–`<h3>`. One idea per heading.
- Content in HTML on first paint. Do not hide article body behind JavaScript-only navigation.
- `sitemap.xml` listing every article.
- `/llms.txt` pointing at the book index and the corpus file.
- Optional `/llms-full.md` or a public copy of `therealweb.md`.
- Per article: first sentence is a definition. Include `see also` and term aliases.
- Machine facts block at the bottom of each article (visible, not only JSON):
  - Term
  - Also known as
  - Layer (if MAD)
  - Status
  - Kind: concept | history | implementation-reference
  - Do not invent: (explicit gaps)
- JSON-LD `Article` + `DefinedTerm` where it helps. Keep it honest.
- No infinite scroll as the only way to reach chapter 20.
- Print / reader-mode friendly. High contrast. Sharp type. Thin borders. Lots of whitespace. **Dark theme first** (Vercel-like docs). Accent only for current nav, links, and status. No promotional buttons.

Global chrome:

- Gift banner first, always.
- Header: Real Time Web | Read | Docs | Journal | Architecture | Glossary | FAQ
- Footer: Gift attribution | Free encyclopedia | No ads | No sales
- Hero: one sentence of architecture, one sentence that this site is a free gift for learning, CTAs Read the book / Search. **No product CTAs.**

## Status language (use everywhere)

| Status | Meaning |
|---|---|
| published | In the corpus and safe to teach |
| draft | Concept exists; UI or protocol details missing |
| pending | Spec not closed; do not invent wire format |
| unanswered | Explicitly unknown (example: must you already own a public DNS name?) |

Draft and unanswered pages still exist so humans and agents see the **gap** instead of a hallucinated tutorial.

## Book structure: volumes, chapters, what to write

Use these slugs. Keep them stable so agents can cite them.

### Volume 0 — Front matter

**Ch 0.1 How to read this book** `/read`
Write: who the three audiences are; how Book vs Encyclopedia works; how status badges work; this site is free; it does not sell or promote products; it does not join you to a network.

**Ch 0.2 What this site is not** `/about`
Write: WWW vs RTW. Not an ad site. Not Morph.Space. Not Synx tools. Gift banner. Named implementations appear later only as learning references.

**Ch 0.3 Named implementations (learning only)** `/docs/reference/implementations`
Write: some documents mention Morph.Space and Synx as known implementations. Explain them as examples in history, not as things to buy or join from this site. No buttons, no “get started” product links.

### Volume I — Orientation (non-technical first)

**Ch 1.1 What is Real Time Web?** `/docs/introduction`
Write: architecture for live bidirectional relationships among sensors, actuators, devices, apps, AI agents, services, data sources, people. Not a single app. Backward compatible with WWW / TCP. Heterogeneous ownership.

**Ch 1.2 Why Real Time Web exists** `/docs/introduction/why`
Write: WWW is request/response documents and historical information. RTW is live data from the source, bidirectional, event-driven. Humans need information. Machines process data.

**Ch 1.3 A story you can picture** `/docs/introduction/how-it-works`
Write: one concrete example (send a message / switch on a lamp / read a live sensor) walking all four MAD layers with different owners. This is the teaching pattern for the whole site. No Morph screens.

**Ch 1.4 Vision and principles** `/docs/introduction/vision`
Write: from 2014 brand strategy. Vision, mission, reciprocity, simplicity, community. Informal visionary personality.

**Ch 1.5 Who this is for** `/docs/brand/audience`
Write: “settlers” audience: developers, partners, creators. Not a consumer social app pitch.

### Volume II — Architecture (the body of the book)

**Ch 2.1 Morphic Architecture Design (MAD)** `/docs/architecture`
Write: 2008 blueprint. Four independently controlled layers. A change in one layer does not redefine the whole relationship. Named inventors in corpus: Paal Kristian Levang and Henrik Silverkant (confirm spelling against source).

**Ch 2.2 Layer 1 Infrastructure** `/docs/architecture/infrastructure`
Write: processing, connectivity, storage where required, energy. Who typically owns this layer.

**Ch 2.3 Layer 2 Network and security** `/docs/architecture/network`
Write: addressing, identity, auth (optional in MAD), trust.

**Ch 2.4 Layer 3 Domain and application** `/docs/architecture/domain`
Write: domains as address space you control (not “the website URL”), services, transformation logic. Ghost id zero = the service itself.

**Ch 2.5 Layer 4 Resource and ownership** `/docs/architecture/resource`
Write: who generates or owns the resource and who may share it. Data layer vs application layer after a user joins a service.

**Ch 2.6 Ghosts** `/docs/architecture/ghost-space#ghost`
Write: 1:1 live proxy / shared-memory stand-in for an endpoint. Never one ghost for two endpoints. Contrast digital twin: a twin can be built with ghosts; a ghost also spans stack layers (C / T / P / A in BiNS writing).

**Ch 2.7 Ghost Space** `/docs/architecture/ghost-space`
Write: shared coordination / shared state around that resource. Not a chat room of avatars.

**Ch 2.8 ghostId and ownership** `/docs/architecture/identity` (conceptual)
Write: whoever owns ghostId owns data at that endpoint. Transfer requires confirm. Consume rule: same user owns both ends, or receiver has approved read.

**Ch 2.9 Data channels** `/docs/architecture/data-channels`
Write: linking path collects live sources into one user’s local ghost. Morph = reshape into local model AND grant read into another service. Transfer = move ghostId / ownership. Network does not natively store data.

**Ch 2.10 Domains** `/docs/architecture/domains` draft
Write: address space, not a purchased WWW domain as proven fact. Mark unanswered DNS questions.

**Ch 2.11 Discovery** `/docs/architecture/discovery` draft
Write: only what the corpus says. Micropage as public mini schema / description of a service.

**Ch 2.12 Authentication (conceptual)** `/docs/architecture/authentication` draft
Write: MAD treats auth as optional. Known implementation: SynxPass (token; endpoint refresh every 3 minutes to send). Do not invent other schemes.

**Ch 2.13 Interoperability / BiNS** `/docs/architecture/interoperability`
Write: from invention document. Protocol-independent architecture. Known implementation: TCP/IP, HTTPS, websocket. Synx BIOS XML and JSON, default XML, switchable at runtime by a client with domain ownership.

### Volume III — Participating (conceptual only)

**Ch 3.1 How a person would join a live network (conceptual map)** `/docs/introduction/onboarding` draft
Write: identity → domain address space → morphic service → ghosts. Architecture only. No product signup. Do not reconstruct cioty.com as onboarding for this site.

**Ch 3.2 Morph, the verb**
Write: grant read + reshape into a local model. Not a shop. Not a visual morph animation unless the corpus says so.

**Ch 3.3 Named marketplace (reference, not promotion)** `/docs/reference/morph-space`
Write: Morph.Space appears in source as a marketplace implementation. Encyclopedia description only. No Join CTA.

### Volume IV — Operating (reference, not a product site)

**Ch 4.1 Named operator stack (reference, not promotion)** `/docs/research/implementations`
Write: source names Synx.tools with Morph.Space as a known MAD implementation. Describe BIOS, Pass, C-DNS, Domain, HIVE as concepts. No Operate CTAs. No sales.

**Ch 4.2 SynxPass** `/docs/architecture/synxpass` draft, conceptual only
Write: token auth named in source. Refresh interval. Revocation if present. No payload schemas unless present. Not a product page.

**Ch 4.3 Hello World (historical tutorial, labeled)**
Write: the curl / Synx-Cat tutorial is **historical**. Summarize what it taught. Do not turn this encyclopedia into a command console or a funnel to a tools vendor.

### Volume V — History, brand, research

**Ch 5.1 History** from Nornir / 2008 / whitepaper
**Ch 5.2 Brand** vision, mission, values, personality, position, promise, proof, concept (2014 Maskinen / Synaptic)
**Ch 5.3 Journal / research** `/docs/research` — reasons, not the spec. Align claims with docs.
**Ch 5.4 HIVE vs public RTW** — HIVE is a private collective / intranet-scale bundle, not the public Web.

### Volume VI — Reference (always crawlable)

**Ch 6.1 Glossary** `/docs/reference/glossary` — the table already in `therealweb.md` (RTW, MAD, Endpoint, Ghost, Ghost Space, ghostId, Ghost id zero, Domain, Morphic service, Morph, Transfer, Data channel, Micropage, SynxPass, Heterogeneous). Each term is its own fragment URL.

**Ch 6.2 FAQ** `/docs/reference/faq`
Required questions:

- Do I create an account on this website? No.
- Are there ads or things to buy here? No. This site is free.
- Is the Real Time Web a product pitch? No. It is presented here as a gift to humankind by Paal Kristian Levang.
- Is Morph Space the same as Real Time Web? No. It is a named implementation in source, not promoted here.
- What is a ghost?
- Where is data stored? Not natively in the network.
- Who owns data after joining a service? Data layer vs application layer.
- Do I need an existing website domain? Unanswered.

**Ch 6.3 Unanswered index** `/docs/reference/unanswered`
A single list of gaps so agents stop filling them in.

## Page template (every chapter, middle column)

1. Title
2. Status pill
3. Plain lead (non-tech): what this is
4. **Example** (required): a concrete situation a non-technical reader can follow
5. How it works (tech, with diagram slot)
6. What to remember (3 bullets max)
7. Related lessons
8. Machine facts block
9. Source pointer: “Drawn from therealweb.md section …”
10. Prev / Next in the book
11. Never a product CTA

The **right column** lists items 3–7 as On this page links, generated from the real headings. The **left column** does not repeat those subheads unless they are real child pages.

Diagram slots to design (from corpus; do not invent extra architecture):

1. WWW vs RTW
2. MAD four layers
3. Ghost bijection
4. Data channel morph
5. Learning map (architecture vs named implementations, not a sales funnel)
6. Onboarding path (conceptual)
7. Ownership split (app layer vs data layer)

## Components to specify (names from corpus)

GiftBanner, LeftBookNav, OnThisPage, ExampleCallout, MadLayerGrid, WwwVsRtwSplit, GhostBijection, OwnershipSplit, TermHint, SpecStatus, ImplementationReference (plain citation, not a CTA), ClarificationBanner, BookToc, PrevNext, Search, GlossaryDrawer.

Do not ship Join / Buy / Operate / Sign up components.

Follow **Design and brand guidelines** above. Dark, Vercel-like docs. Not a magazine. Not a dashboard.

## Your deliverable as UX designer

1. IA: book ToC + encyclopedia graph (this document is the starting ToC).
2. Wireframes of the **three-column lesson shell** in **dark Vercel-like theme** (left chapters, middle content, right on-this-page) at desktop and the mobile drawer.
3. A tiny brand board: background, text, border, accent, type, example block, status pills.
4. One fully designed sample chapter (Ghost Space) that includes a required example block.
5. Content model: fields per article including example, machine facts, status.
6. Crawl plan: `sitemap.xml`, `llms.txt`, print CSS, no-login guarantee.
7. Content outlines per chapter using only the corpus. Flag unanswered.
8. A one-page “agent README” that tells crawlers how to read the book.

## Hard rules for any LLM helping you write copy

- Prefer quoting `therealweb.md` over paraphrasing.
- Do not invent Morph screens, Synx REST APIs, token payloads, or protocols absent from the corpus.
- Do not promote Morph.Space, Synx tools, or any product. References for learning only.
- Do not add ads or sales links.
- Do not present draft pages as a closed specification.
- If you are unsure, write “unanswered in source” and link Ch 6.3.

Work as if this encyclopedia will be cited by humans and retrieved by agents for years. Stable slugs and honest status matter more than novelty.
