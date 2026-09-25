import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ToolHero } from "@/components/ToolHero";

export type Tool = {
  slug: "dns" | "bios" | "pass" | "trade";
  name: string;
  tag: string;
  lead: string;
  body: string[];
  points: { title: string; text: string }[];
  more: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
};

export const tools: Record<Tool["slug"], Tool> = {
  dns: {
    slug: "dns",
    name: "Synx DNS",
    tag: "Naming",
    lead: "Client DNS for the domain you own.",
    body: [
      "Map an address to a root domain, subdomains, and Morphic services. Set the data links, and change the structure when the service needs to.",
      "Synx DNS is how a domain is named. The same network, whichever layer you own.",
    ],
    points: [
      { title: "Root domain and subdomains", text: "An address mapped to the namespace." },
      { title: "Morphic services", text: "Named on the domain." },
      { title: "Data links", text: "Set the links the service uses." },
      { title: "Structure you can change", text: "When the service needs to." },
    ],
    more: [
      {
        heading: "A client DNS for the domain",
        paragraphs: [
          "Synx DNS is the client domain name system for a root domain. It maps addresses to the clients that hold services, subdomains, and the root itself.",
          "Creators use it to set up domain names and Morphic services, and to add intelligence to those services. Data links are set here, and the data structure can change when the service needs to.",
        ],
      },
      {
        heading: "How a domain meets the rest of the network",
        paragraphs: [
          "A root domain is set up on a computer with a public address. From there, subdomains and Morphic services are added with the Synx tools.",
          "Once a service is defined, clients can connect to it, or the domain can link to a service on another domain. Several services can share one connection, or one primary channel can link them and move between them.",
        ],
      },
    ],
    faqs: [
      { q: "What is Synx DNS?", a: "It is the client DNS for the domain you own. It names the root domain, the subdomains, and the Morphic services." },
      { q: "What can a name point to?", a: "An address mapped to a root domain, a subdomain, or a Morphic service." },
      { q: "What is a data link?", a: "The link a service uses. Synx DNS is where those links are set." },
      { q: "Can the structure change?", a: "Yes. The data structure can change when the service needs to." },
      { q: "Where does a root domain sit?", a: "A root domain is set up on a computer with a public address. Subdomains and Morphic services are added from there." },
      { q: "Can one domain link to another?", a: "Once a service is defined, clients can connect to it, or the domain can link to a service on another domain." },
      { q: "Can several services share one connection?", a: "Yes. Several services can share one connection, or one primary channel can link them and move between them." },
    ],
  },
  bios: {
    slug: "bios",
    name: "Synx BIOS",
    tag: "Runtime",
    lead: "The network operating system. Not a computer's firmware.",
    body: [
      "It is the command line for the layer you own: administer services, share or transfer a data source, and see what belongs to you.",
      "XML is the default. A client with domain ownership can switch a live connection to JSON without dropping it.",
    ],
    points: [
      { title: "Command line by ownership", text: "For the layer you own." },
      { title: "Administer services", text: "See what belongs to you." },
      { title: "Transfer a data source", text: "Hand it to the next owner." },
      { title: "Changes while live", text: "Without dropping the connection." },
    ],
    more: [
      {
        heading: "Built for a live network",
        paragraphs: [
          "Synx BIOS was introduced in 2008. It was designed for the limits of the web as it is usually built, and it stays backwards compatible with the linking topology of the World Wide Web. Applications still use ordinary web technology. What changes is how network resources are managed.",
          "It is a decentralized operating layer in the stack, not firmware on a machine. The principles it was built around are real-time data transport, scalability, data kept separate from the application, event-driven distribution, and interoperability.",
        ],
      },
      {
        heading: "Ownership in each layer",
        paragraphs: [
          "The communication layers are kept apart, so ownership can be applied in the layer a person actually holds. A consumer can control their data. They do not get the application layer. The service provider configures the application layer. The domain owner holds the domain.",
          "Domain, service, links, and network-resource ownership can all be changed at runtime. XML is the default language. JSON is available too, and a client with domain ownership can switch a live connection to JSON without dropping it. The same stack speaks HTTP, HTTPS, and WebSocket, stateful or stateless.",
          "A service can be private or public. Private means another root domain cannot turn the link on. Public means a service on another domain can form an active link.",
        ],
      },
    ],
    faqs: [
      { q: "What is Synx BIOS, if it is not a computer BIOS?", a: "It is the decentralized operating layer of the network, not firmware on a machine. It is the command line for the layer you own." },
      { q: "When was it introduced?", a: "Synx BIOS was introduced in 2008. It stays backwards compatible with the linking topology of the World Wide Web." },
      { q: "What was it built around?", a: "Real-time data transport, scalability, data kept separate from the application, event-driven distribution, and interoperability." },
      { q: "Who holds which layer?", a: "A consumer can control their data. The service provider configures the application layer. The domain owner holds the domain." },
      { q: "Can a live connection change format?", a: "XML is the default. A client with domain ownership can switch a live connection to JSON without dropping it." },
      { q: "Which channels does it speak?", a: "HTTP, HTTPS, and WebSocket, stateful or stateless, in XML or JSON." },
      { q: "What is a private service?", a: "Private means another root domain cannot turn the link on. Public means a service on another domain can form an active link." },
    ],
  },
  pass: {
    slug: "pass",
    name: "Synx Pass",
    tag: "Identity",
    lead: "Identity, authentication, and ownership.",
    body: [
      "People, services, and machines are recognized here. Access follows the owner, and it can move when ownership moves.",
      "Synx Pass secures who is connected, and what they own.",
    ],
    points: [
      { title: "People, services, machines", text: "Recognized on the domain." },
      { title: "Authentication", text: "Who is connected." },
      { title: "Ownership control", text: "Access follows the owner." },
      { title: "Access that can move", text: "When ownership moves." },
    ],
    more: [
      {
        heading: "Who is allowed to see the data",
        paragraphs: [
          "Synx Pass is the authentication and identification system for ownership. It covers access control, authentication, encryption, and the rest of the security around a connection.",
          "It is token based. An endpoint refreshes its token to keep sending data. Once a person is registered, they can take part in the Real Time Web and join services. Morph Space uses Synx Pass for authorization.",
        ],
      },
      {
        heading: "Four places ownership can sit",
        paragraphs: [
          "A network value chain has at least four parties: the path the data travels, the domain owner, the service provider, and the person who owns the data at the end. Synx Pass can hold ownership in each of those layers.",
          "Data from a source is only consumed by a client that shares that ownership on both ends of the path. Transfer the ownership of an instance, and the next person receives the data. The source itself is not copied away.",
        ],
      },
    ],
    faqs: [
      { q: "What is Synx Pass?", a: "It is the authentication and identification system for ownership. It covers access control, authentication, encryption, and the security around a connection." },
      { q: "How does an endpoint keep sending?", a: "Synx Pass is token based. An endpoint refreshes its token to keep sending data." },
      { q: "Who can join a service?", a: "Once a person is registered, they can take part in the Real Time Web and join services. Morph Space uses Synx Pass for authorization." },
      { q: "What does it recognize?", a: "People, services, and machines on the domain." },
      { q: "Where can ownership sit?", a: "On the path the data travels, with the domain owner, with the service provider, and with the person who owns the data at the end." },
      { q: "Who receives the data?", a: "Only a client that shares the ownership of that source on both ends of the path." },
      { q: "What happens when ownership moves?", a: "The next person receives the data. The source itself is not copied away." },
    ],
  },
  trade: {
    slug: "trade",
    name: "Synx Trade",
    tag: "Value",
    lead: "Creators keep ownership, and most of the revenue.",
    body: [
      "People keep ownership of what they make, and the majority of the revenue it generates.",
      "Because the source stays with its owner, data can move as a tradable commodity.",
    ],
    points: [
      { title: "Creators keep ownership", text: "Of what they make." },
      { title: "Revenue stays with them", text: "The majority of what it generates." },
      { title: "Data as a commodity", text: "Because the source stays put." },
      { title: "Source is not copied away", text: "It moves with its owner." },
    ],
    more: [
      {
        heading: "The creator keeps the work",
        paragraphs: [
          "People get the most from building on the Real Time Web when they keep what they make. Synx Trade is that rule in the suite: creators maintain ownership of their work, and the majority of the revenue it generates.",
        ],
      },
      {
        heading: "Data can be traded because the source stays known",
        paragraphs: [
          "Making data a commodity starts with real-time data, and with protecting and identifying the source. Raw data can be changed along its path. The further it is changed, the more the untouched source matters. Any source can feed a service or a consumer.",
          "Older data can become real-time again when it is used to produce something new. That result can be a commodity too. Privacy for the person who owns the source is what makes the trade possible: without the raw data, the work downstream cannot run, and the source does not leave its owner.",
        ],
      },
    ],
    faqs: [
      { q: "What does Synx Trade leave with the creator?", a: "Creators keep ownership of what they make, and most of the revenue it generates." },
      { q: "Why can data be traded?", a: "Because the source is protected and identified, and it stays with its owner." },
      { q: "What happens to raw data along the path?", a: "It can be changed. The further it is changed, the more the untouched source matters." },
      { q: "Can older data become a commodity?", a: "Yes. When it is used to produce something new, that result can be a commodity too." },
      { q: "Who can use the raw data?", a: "The person who owns the source. Without that data, the work downstream cannot run." },
      { q: "Is the source copied away?", a: "No. The source moves with its owner." },
      { q: "Is Synx Trade available?", a: "Not yet. Synx Trade is coming soon." },
    ],
  },
};

export function ToolView({ tool }: { tool: Tool }) {
  return (
    <>
      <Nav />
      <main>
          <section className={`tool-hero ${tool.slug}`}>
            <div className="tool-radiance" aria-hidden="true"></div>
            <ToolHero tool={tool} />
          </section>
          <section className={`tool-copy ${tool.slug}`}>
            <Reveal className="wrap">
              {tool.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul>
                {tool.points.map((point) => (
                  <li key={point.title}>
                    <strong>{point.title}</strong>
                    <span>{point.text}</span>
                  </li>
                ))}
              </ul>
              {tool.more.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
              <div className="faq-intro">
                <h2>FAQ</h2>
              </div>
              <div className="faq">
                {tool.faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <div className="faq-a"><p>{item.a}</p></div>
                  </details>
                ))}
              </div>
            </Reveal>
          </section>
      </main>
      <Footer />
    </>
  );
}
