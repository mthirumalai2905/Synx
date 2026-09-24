import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { JsonLd } from "@/components/JsonLd";
import { faq, siteDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Synx tools" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Synx tools",
    description: siteDescription,
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
      <Nav />
      <SiteEffects />
      <main id="top">
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span> The operating tools for a Real Time Web domain</div>
        <h1>Run it live. Keep it yours.</h1>
        <p className="lede">Synx is the tool suite for domain owners, developers, and consumers. It configures, secures, and operates the network, while each role keeps the layer that belongs to them.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#suite">See the tools</a>
          <a className="btn btn-ghost" href="#process">How it works</a>
        </div>
        <div className="logo-row" id="connected">
          <span>Connected to</span>
          <div className="marks">
            <a href="https://realtimeweb.org" target="_blank" rel="noreferrer">
              <img src="/img/realtimeweb.png" alt="Real Time Web" />
            </a>
            <a href="https://morph.space" target="_blank" rel="noreferrer">
              <img src="/img/morphspace.png" alt="Morph Space" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-glow" aria-hidden="true">
        <svg className="hero-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#22c55e" opacity="0.85">
            <animate attributeName="d" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" values="M0,150 C120,40 240,230 360,150 C480,70 600,240 720,150 C840,50 960,230 1080,150 C1200,70 1320,220 1440,150 L1440,320 L0,320 Z;M0,150 C120,240 240,50 360,150 C480,250 600,40 720,150 C840,240 960,60 1080,150 C1200,230 1320,50 1440,150 L1440,320 L0,320 Z;M0,150 C120,40 240,230 360,150 C480,70 600,240 720,150 C840,50 960,230 1080,150 C1200,70 1320,220 1440,150 L1440,320 L0,320 Z"/>
          </path>
          <path fill="#4ade80" opacity="0.55">
            <animate attributeName="d" dur="6.4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" values="M0,180 C160,250 320,90 480,180 C640,270 800,80 960,180 C1120,260 1280,100 1440,180 L1440,320 L0,320 Z;M0,180 C160,90 320,260 480,180 C640,80 800,270 960,180 C1120,100 1280,250 1440,180 L1440,320 L0,320 Z;M0,180 C160,250 320,90 480,180 C640,270 800,80 960,180 C1120,260 1280,100 1440,180 L1440,320 L0,320 Z"/>
          </path>
        </svg>
      </div>
    </section>

    <section id="tools">
      <div className="wrap">
        <div className="center">
          <div className="section-kicker">The suite</div>
          <h2>Why the stack stays with Synx</h2>
          <p className="sub">Four tools. One network. Real Time Web is the architecture. Morph Space is how people join. Synx is how you run it.</p>
        </div>
        <div className="bento">
          <article className="card bios">
            <h3>Synx BIOS</h3>
            <p>The network operating system. This is not a computer’s firmware BIOS. It is the command line for the layer you own: administer services, share or transfer a data source, and see what belongs to you.</p>
            <img className="tool-mark" src="/img/bios.png?v=2" alt="" />
            <div className="glow" aria-hidden="true"></div>
          </article>
          <article className="card dns">
            <h3>Synx DNS</h3>
            <p>Client DNS for the domain. Map an address to a root domain, subdomains, and Morphic services. Set data links, and change the structure when the service needs to.</p>
            <img className="tool-mark" src="/img/dns.png?v=2" alt="" />
            <div className="glow" aria-hidden="true"></div>
          </article>
          <article className="card pass">
            <h3>Synx Pass</h3>
            <p>Identity, authentication, and ownership. People, services, and machines are recognized here. Access follows the owner, and it can move when ownership moves.</p>
            <img className="tool-mark" src="/img/pass.png?v=2" alt="" />
            <div className="glow" aria-hidden="true"></div>
          </article>
          <article className="card trade">
            <h3>Synx Trade</h3>
            <p>Value stays with the creator. People keep ownership of what they make, and the majority of the revenue it generates. Because the source stays with its owner, data can move as a tradable commodity.</p>
            <img className="tool-mark" src="/img/trade.png?v=2" alt="" />
            <div className="glow" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>

    <section id="details">
      <div className="wrap">
        <div className="mosaic">
          <article className="tile span">
            <span className="kicker">Network</span>
            <h3>Share a source. The network does not keep a copy.</h3>
            <span className="arrow" aria-hidden="true"></span>
          </article>
          <article className="tile pass">
            <span className="kicker">Identity</span>
            <img src="/img/pass.png?v=2" alt="" />
            <h3>Synx Pass</h3>
            <p>People, services, and machines are recognized here. Access follows the owner, and it can move when ownership moves.</p>
          </article>
          <article className="tile feature bios">
            <span className="kicker">Runtime</span>
            <h3>Synx BIOS</h3>
            <p>The command line for the layer you own. XML is the default. A Synx command can switch a live connection to JSON.</p>
            <a className="orb" href="#suite" aria-label="See the tools"></a>
          </article>
          <article className="tile dns">
            <span className="kicker">Naming</span>
            <img src="/img/dns.png?v=2" alt="" />
            <h3>Synx DNS</h3>
            <p>A root domain, subdomains, and Morphic services. The structure can change when the service needs to.</p>
          </article>
          <article className="tile trade">
            <span className="kicker">Value</span>
            <h3>Creators keep what they make.</h3>
            <p>Synx Trade leaves ownership, and most of the revenue, with the person who made it.</p>
            <span className="arrow" aria-hidden="true"></span>
          </article>
          <article className="tile solid">
            <h3>Four tools. One network.</h3>
            <a className="arrow" href="#suite" aria-label="See the tools"></a>
          </article>
        </div>
      </div>
    </section>

    <section id="process">
      <div className="wrap">
        <div className="center">
          <div className="section-kicker">The path</div>
          <h2>Clear, then running</h2>
          <p className="sub">A root domain opens the tools. From there, services, links, and ownership are changed at runtime.</p>
        </div>
        <div className="steps">
          <article className="card">
            <img className="stage-art" src="/img/step-domain.png?v=1" alt="" />
            <div className="step-no">01</div>
            <h3>Establish the domain</h3>
            <p>Set up a root domain on a machine with a public address. That is the door into the Synx tools.</p>
          </article>
          <article className="card">
            <img className="stage-art" src="/img/step-services.png?v=1" alt="" />
            <div className="step-no">02</div>
            <h3>Shape the services</h3>
            <p>With Synx DNS, create subdomains and Morphic services, add links, and describe what the service offers.</p>
          </article>
          <article className="card">
            <img className="stage-art" src="/img/step-runtime.png?v=1" alt="" />
            <div className="step-no">03</div>
            <h3>Operate at runtime</h3>
            <p>Synx Pass checks who is connected. Synx BIOS changes ownership, links, and structure while the connection stays alive.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="layers">
      <div className="wrap split">
        <div className="copy">
          <div className="section-kicker">Ownership</div>
          <h2>Four layers. Four kinds of owner.</h2>
          <p className="sub" style={{ marginLeft: 0 }}>A change in one layer does not have to rewrite the others. The consumer controls the data. The service controls the application. Lower layers stay with the people who run them.</p>
        </div>
        <div className="card layers">
          <span className="sunray" aria-hidden="true"></span>
          <div className="layer"><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2.5" y="3" width="11" height="10" rx="1.4"/><path d="M2.5 6.2h11M6 6.2V13"/></svg></span><span><strong>Infrastructure</strong><span>Machines, connectivity, energy</span></span><i className="go"></i></div>
          <div className="layer"><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 2.2 13 4.2v4.1c0 3-2.1 4.6-5 5.5-2.9-.9-5-2.5-5-5.5V4.2L8 2.2z"/></svg></span><span><strong>Network and security</strong><span>Addressing, identity, trust</span></span><i className="go"></i></div>
          <div className="layer"><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11.5 8 3l5 8.5"/><path d="M5 8.5h6"/></svg></span><span><strong>Domain and application</strong><span>Services, links, transformation</span></span><i className="go"></i></div>
          <div className="layer"><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="6" r="2.2"/><path d="M3.2 13c.5-2.2 2.2-3.3 4.8-3.3s4.3 1.1 4.8 3.3"/></svg></span><span><strong>Resource and owner</strong><span>The source, and who may use it</span></span><i className="go"></i></div>
          <div className="glow" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section>
      <div className="wrap split reverse">
        <div className="copy">
          <div className="section-kicker">Links</div>
          <h2>Links, not a new API for every neighbor.</h2>
          <p className="sub" style={{ marginLeft: 0 }}>The network does not sit in the middle and store the stream. Data moves when someone is listening, and it arrives when the same owner holds both ends, or when read access has been granted.</p>
          <p className="sub" style={{ marginLeft: 0 }}>Clients speak HTTP, HTTPS, or websocket. XML is the default. A Synx command can switch a live connection to JSON.</p>
        </div>
        <div className="card panel">
          <span className="sunray" aria-hidden="true"></span>
          <img className="symbol" src="/img/symbol.png" alt="" />
          <h3>Nothing stored in the middle.</h3>
          <p>If you do not keep your own copy, the network does not keep one for you.</p>
          <div className="glow" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section id="roles">
      <div className="wrap">
        <div className="center">
          <div className="section-kicker">Who it is for</div>
          <h2>Each role keeps its own layer</h2>
          <p className="sub">Developers, domain owners, and consumers use the same tools. They do not receive the same access.</p>
        </div>
        <div className="roles">
          <article className="card role">
            <div className="step-no">Developers</div>
            <p className="quote">Build the service. Leave the private API behind.</p>
            <p>Recommend the tools, shape Morphic services, and integrate by linking instead of writing a new interface for every neighbor.</p>
          </article>
          <article className="card role">
            <div className="step-no">Domain owners</div>
            <p className="quote">The root domain, the services, the application layer.</p>
            <p>You configure the namespace and the logic. You do not take the consumer’s data layer with you.</p>
          </article>
          <article className="card role">
            <div className="step-no">Consumers</div>
            <p className="quote">Your data layer. Not their application.</p>
            <p>Share a source, transfer it when a device changes hands, or keep it. The service can still run its logic.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="suite">
      <div className="wrap">
        <div className="center">
          <div className="section-kicker">The tools</div>
          <h2>Straightforward tools that fit the work</h2>
          <p className="sub">Use the tool that matches the layer you own. The suite is how a domain is named, secured, operated, and valued.</p>
        </div>
        <div className="suite">
          <article className="card plan dns">
            <img src="/img/dns.png?v=2" alt="" />
            <h3>Synx DNS</h3>
            <div className="tag">Naming</div>
            <p className="lead">Client DNS for the domain you own.</p>
            <ul>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="8" r="6"/><path d="M2 8h12M8 2c2 1.8 2 10.2 0 12M8 2c-2 1.8-2 10.2 0 12"/></svg></span><span><strong>Root domain and subdomains</strong><span>An address mapped to the namespace</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11.5 8 3l5 8.5"/><path d="M5 8.5h6"/></svg></span><span><strong>Morphic services</strong><span>Named on the domain</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6.5 9.5 4 12a2.2 2.2 0 0 1-3-3l2.5-2.5M9.5 6.5 12 4a2.2 2.2 0 0 1 3 3L12.5 9.5M6 10l4-4"/></svg></span><span><strong>Data links</strong><span>Set the links the service uses</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 4h12M2 8h8M2 12h10"/></svg></span><span><strong>Structure you can change</strong><span>When the service needs to</span></span><i className="go"></i></li>
            </ul>
            <a className="btn btn-ghost" href="#tools">About DNS</a>
          </article>
          <article className="card plan bios">
            <img src="/img/bios.png?v=2" alt="" />
            <h3>Synx BIOS</h3>
            <div className="tag">Runtime</div>
            <p className="lead">The network operating system. Not a computer’s firmware.</p>
            <ul>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 5 2 8l3 3M11 5l3 3-3 3M9 3 7 13"/></svg></span><span><strong>Command line by ownership</strong><span>For the layer you own</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="6" cy="6" r="2.2"/><circle cx="11" cy="7" r="1.6"/><path d="M2.5 13c.4-2 1.8-3 3.5-3s3.1 1 3.5 3M10 10.2c.7-.4 1.5-.6 2.3-.4 1.2.3 1.8 1.2 2.2 2.6"/></svg></span><span><strong>Administer services</strong><span>See what belongs to you</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><ellipse cx="8" cy="4" rx="4.5" ry="1.8"/><path d="M3.5 4v3c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8V4M3.5 7.2V11c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8V7.2"/></svg></span><span><strong>Transfer a data source</strong><span>Hand it to the next owner</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 8a5 5 0 1 1-1.2-3.2"/><path d="M13 2.5V5h-2.5"/></svg></span><span><strong>Changes while live</strong><span>Without dropping the connection</span></span><i className="go"></i></li>
            </ul>
            <a className="btn btn-ghost" href="#tools">About BIOS</a>
          </article>
          <article className="card plan pass">
            <img src="/img/pass.png?v=2" alt="" />
            <h3>Synx Pass</h3>
            <div className="tag">Identity</div>
            <p className="lead">Identity, authentication, and ownership.</p>
            <ul>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="6" cy="6" r="2.2"/><path d="M2.5 13c.4-2 1.8-3 3.5-3s3.1 1 3.5 3"/><path d="M11 6.2h3M12.5 4.7v3"/></svg></span><span><strong>People, services, machines</strong><span>Recognized on the domain</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="8" r="2.4"/><path d="M9.2 8H14v1.6h-1.4V11H11v-1.4"/></svg></span><span><strong>Authentication</strong><span>Who is connected</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M8 2.2 13 4.2v4.1c0 3-2.1 4.6-5 5.5-2.9-.9-5-2.5-5-5.5V4.2L8 2.2z"/></svg></span><span><strong>Ownership control</strong><span>Access follows the owner</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2.5 8h9M9 5l3 3-3 3"/></svg></span><span><strong>Access that can move</strong><span>When ownership moves</span></span><i className="go"></i></li>
            </ul>
            <a className="btn btn-ghost" href="#tools">About Pass</a>
          </article>
          <article className="card plan trade">
            <img src="/img/trade.png?v=2" alt="" />
            <h3>Synx Trade</h3>
            <div className="tag">Value</div>
            <p className="lead">Creators keep ownership, and most of the revenue.</p>
            <ul>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="6" r="2.2"/><path d="M3.2 13c.5-2.2 2.2-3.3 4.8-3.3s4.3 1.1 4.8 3.3"/></svg></span><span><strong>Creators keep ownership</strong><span>Of what they make</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="8" cy="8" r="5.2"/><path d="M8 5.2v5.6M6.3 6.4c.4-.6 1-.8 1.7-.8 1 0 1.7.5 1.7 1.3S9 8.2 8 8.2 6.3 8.7 6.3 9.5s.8 1.3 1.8 1.3c.7 0 1.3-.3 1.6-.8"/></svg></span><span><strong>Revenue stays with them</strong><span>The majority of what it generates</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 6.2 8 3.5l5 2.7v5.2L8 14.1 3 11.4V6.2z"/></svg></span><span><strong>Data as a commodity</strong><span>Because the source stays put</span></span><i className="go"></i></li>
              <li><span className="mark" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3.2" y="7" width="9.6" height="6.2" rx="1.2"/><path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7"/></svg></span><span><strong>Source is not copied away</strong><span>It moves with its owner</span></span><i className="go"></i></li>
            </ul>
            <a className="btn btn-ghost" href="#tools">About Trade</a>
          </article>
        </div>
      </div>
    </section>

    <section id="questions">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <h2>FAQ</h2>
        </div>
        <div className="faq">
          <details open>
            <summary>What are the Synx tools?</summary>
            <div className="faq-a"><p>A suite for domain owners, developers, and consumers to set up, create, and maintain a network domain and its services. Synx DNS names it. Synx BIOS operates it. Synx Pass secures identity and ownership. Synx Trade keeps value with the creator.</p></div>
          </details>
          <details>
            <summary>What is Synx BIOS, if it is not a computer BIOS?</summary>
            <div className="faq-a"><p>Synx BIOS is the decentralized operating layer of the network. It lets a person with the right ownership administer services, share or transfer a data source, and see the sources that belong to them. It is a network control, not firmware on a machine.</p></div>
          </details>
          <details>
            <summary>How is Synx different from the Real Time Web and Morph Space?</summary>
            <div className="faq-a"><p>The Real Time Web defines the network. Morph Space is how people and organizations join it. Synx tools are the controls used to configure, secure, and operate it afterward.</p></div>
          </details>
          <details>
            <summary>Does the network store my data?</summary>
            <div className="faq-a"><p>No. The network does not persist the stream. If you want a copy, you keep it yourself, and only for data that belongs to you. There is no stored middle copy to take.</p></div>
          </details>
          <details>
            <summary>Can a client use JSON as well as XML?</summary>
            <div className="faq-a"><p>Yes. Synx BIOS speaks XML and JSON. XML is the default. A client with domain ownership can switch a live connection to JSON without dropping it.</p></div>
          </details>
          <details>
            <summary>Who can change what?</summary>
            <div className="faq-a"><p>A consumer can control the data layer, not the application. A service provider configures the application layer, not the lower stack. Ownership of a source can be transferred, and the next holder receives the data.</p></div>
          </details>
        </div>
      </div>
    </section>

    <section>
      <div className="wrap">
        <div className="cta-band">
          <img className="symbol" src="/img/symbol.png" alt="" />
          <h2>Ready to run a network you actually own?</h2>
          <p>Start with the tool that matches your layer. The architecture is on the Real Time Web. Joining is on Morph Space.</p>
          <a className="btn btn-primary" href="#suite">See the tools</a>
          <div className="horizon" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  </main>
      <Footer home />
    </>
  );
}
