export const siteName = "Synx tools";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteDescription =
  "Synx tools configure, secure, and operate a Real Time Web domain. BIOS, DNS, Pass, and Trade.";

export const faq = [
  {
    q: "What are the Synx tools?",
    a: "A suite for domain owners, developers, and consumers to set up, create, and maintain a network domain and its services. Synx DNS names it. Synx BIOS operates it. Synx Pass secures identity and ownership. Synx Trade keeps value with the creator.",
  },
  {
    q: "What is Synx BIOS, if it is not a computer BIOS?",
    a: "Synx BIOS is the decentralized operating layer of the network. It lets a person with the right ownership administer services, share or transfer a data source, and see the sources that belong to them. It is a network control, not firmware on a machine.",
  },
  {
    q: "How is Synx different from the Real Time Web and Morph Space?",
    a: "The Real Time Web defines the network. Morph Space is how people and organizations join it. Synx tools are the controls used to configure, secure, and operate it afterward.",
  },
  {
    q: "Does the network store my data?",
    a: "No. The network does not persist the stream. If you want a copy, you keep it yourself, and only for data that belongs to you. There is no stored middle copy to take.",
  },
  {
    q: "Can a client use JSON as well as XML?",
    a: "Yes. Synx BIOS speaks XML and JSON. XML is the default. A client with domain ownership can switch a live connection to JSON without dropping it.",
  },
  {
    q: "Who can change what?",
    a: "A consumer can control the data layer, not the application. A service provider configures the application layer, not the lower stack. Ownership of a source can be transferred, and the next holder receives the data.",
  },
];
