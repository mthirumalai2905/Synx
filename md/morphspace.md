# Morph.Space website brief

Use this file when building **Morph.Space**. This is the marketplace and environment: establish domains, publish resources, join the network. Account, commercial, and onboarding questions live here.

Not RealTimeWeb.org (architecture). Not Synx.tools (runtime administration). SynxPass is used by Morph Space but the command-line BIOS belongs on the Synx site.

Do not invent click-by-click screens, forms, timings, or "you must already own a public DNS name" as fact. Those FAQs are unanswered in the source. Show the path that is written. Label gaps.

---

## Site job

People and organizations arrive here to participate in the Real Time Web: identity, domains as address space, Morphic services, publishing resources, joining services, morphing ghosts (read access), transferring ownership.

Commercial tone, practical. Still honest about draft onboarding.

Teaching line: Morph is where you get an identity and join. RealTimeWeb.org is how it works. Synx is how you run it after.

Current implementation of MAD in the source: Synx.tools plus marketplace Morph.Space.

## Global chrome

**Header:** Morph.Space | Participate | Domains | Services | Marketplace | Identity | Docs (outbound RealTimeWeb.org) | Tools (outbound Synx.tools)

**Hero pattern:** join the network, not read the spec. Primary CTA: Create an RTW identity (destination unspecified beyond SynxPass registration). Secondary: Read the architecture.

**Banner:** Morph Space is how you participate. It is not only an inbox.

**Footer grid:** Join here | Understand on RealTimeWeb.org | Operate with Synx

---

## Sitemap (recommended Morph sections from source)

Headings exist. Body copy for exact screens does not.

| Page | Job | Status |
|---|---|---|
| / | Marketplace home. Why join. Three-place split. | Build with corpus |
| /identity | Create an RTW identity via SynxPass | Path known, UI unspecified |
| /domains | Register or connect a domain (address space) | FAQ unanswered |
| /services | Create or join Morphic services | Conceptual |
| /resources | Publish / attach endpoints (devices, apps, agents) | Conceptual |
| /channels | Data channels as personal live feeds | Conceptual |
| /marketplace | Discover services / micropages | Conceptual |
| /ownership | Ghosts, transfer, morph, withdraw | Conceptual |
| /org | Organization / multiple admins | Unanswered |
| /pricing | If shown, do not invent packages beyond corpus notes | See caution |

**cioty.com / domain.cioty.com** appears in Synx HIVE tutorials as a makerspace trial (free trial domain, up to 5 services on that trial host in one FAQ). Do not present that host as Morph.Space product UI.

**HIVE Collective** is a private / intranet-scale RTW used to prove the stack. Do not brand Morph as HIVE.

---

## Page sections and grids

### Home

**Hero**

- Title: Join the Real Time Web
- Deck: Establish a domain, publish resources, take part in live services. Morph Space is the environment. RTW is the architecture.
- CTAs: Create identity | How joining works (essay on RealTimeWeb.org journal)

**Grid: What you do here (3 or 4 cards)**

1. Create an RTW identity (SynxPass, token-based)
2. Establish or connect a domain (address space you control, not a marketing site)
3. Publish resources / attach endpoints
4. Join Morphic services and confirm ghost ownership

**Split: Join vs understand vs operate** (same three cards as RealTimeWeb.org, Morph card highlighted)

**How joining actually works (numbered, no fake screens)**

1. Optional: read architecture on RealTimeWeb.org
2. Arrive on Morph.Space
3. Register identity with SynxPass (Morph uses Synx Pass for authorization)
4. Work inside a domain
5. Service owner transfers ghostid; user confirms; data layer is yours; application layer stays with the service
6. Morph a ghost against a secondary service to grant read; withdraw anytime
7. Endpoint refreshes token every three minutes to send data
8. Operate afterward with Synx tools

**Honest strip**

Unanswered: whether you need an existing public domain name; whether Morph can mint an RTW domain; whether you can attach a domain you already own; how long setup takes; whether you need technical experience; how an organization assigns multiple administrators; exact screens.

### Identity

**Copy**

Once a user is registered in SynxPass they may participate in RTW and become members of services by getting access to ghosts.

Token-based. MAD allows other token systems. Known implementation for Morph Space: SynxPass.

Not specified: how a pass is created, token format, signing, claims, person vs machine binding, whether refresh is automatic.

**Do not** put Keycloak as the Morph signup default. HIVE Collective notes Keycloak (SSO, dynamic token, 2FA) as a private-network operations choice in front of Synx Pass.

### Domains

A domain here is an address space, not a website URL. If an identified user owns and controls the whole stack of a domain, that user also controls ownership of allocated ghosts for endpoints connecting against that domain address space.

Root vs sub domain examples in the invention notes: mydomain.com, subdomain.mydomain.com. Service URI: subdomain.mydomain.com/servicea with http(s) or wss or other protocol prefix. Same resource path across protocols.

C-DNS (client DNS) is Synx BIOS, documented on the Synx site. Morph can *talk about* registering a domain without teaching BIOS commands.

### Services and marketplace

Morphic service: application on MAD that allocates ghosts. Service owner is primary owner of allocated ghosts at creation.

Micropage: small public description (title, description, optional picture). Browser GET on the service URL shows it. Template not user-changeable in the tutorial corpus.

Marketplace tone from brand: creators keep ownership of what they make; majority of revenue they generate. Do not invent fee tables.

**Give-away hardware, price the channel** is a corpus business-model idea (sensor for NOK 1 style, pay for the data channel). Use as a story card, not a live checkout flow unless product confirms it.

### Ownership and morphing (user-facing)

**Grid: Transfer vs morph**

| Action | What happens | Owner after |
|---|---|---|
| Transfer ghostId + user confirms | Data layer (or whole service if id zero) moves | New holder of ghostId |
| Morph ghost against a secondary service | Read access, can be withdrawn | Original owner keeps ghostId |

**Sensor story (3-step strip)**

1. Your temperature sensor sends Celsius on its primary service.
2. You add that ghost to a light service. The object does not get new hardware. The service can act on the reading.
3. You withdraw the morph. That service goes dark for that ghost. Primary can remain.

**Consume rule (plain language)**

Data arrives at an endpoint when the ghosts at both ends are owned by the same user, or the receiver has approved read access. Sharing a platform login with someone else does not open their live source.

**Primary vs secondary**

- Primary: endpoints belong here with the service schema (example: factory-programmed sensor).
- Secondary: morphing another endpoint into this service; data arrives in this service's schema after morph.

### Channels

Personal: that user's ghosts, not a shared dump. Multiple services can merge into one connection (channel merge) in Synx BIOS. Product page can say "one connection, many services" without inventing the control.

### Pricing caution

Corpus mentions trial on cioty, up to 5 services per domain on that trial, pro/enterprise private HIVE with higher or unlimited links. That is Nornir HIVE packaging, not confirmed Morph.Space SKUs. If Morph has no published prices, do not copy HIVE numbers onto Morph.

---

## FAQ for this site

- Do I create an account on RealTimeWeb.org? No. Here.
- Is Morph the same as RTW? No. RTW is the architecture. Morph is how people and orgs join and use it.
- Who owns my data after I join a service? You own the data layer after confirm. Service owns application layer and may keep a local copy.
- Can I take access back? Yes, withdraw morph / read access.
- Do I need a website domain? Not answered.
- Who refreshes the three-minute token? The endpoint must refresh to send. Whether a person taps a button is unspecified.
- Can I transfer a device when I move house? Corpus yes: transfer ghost / ownership to another person.

## Components

1. JoinPathStepper (8 steps, no fake UI chrome)
2. IdentityDomainServiceGrid
3. TransferVsMorphTable
4. UnansweredFaqList
5. Outbound to RealTimeWeb.org onboarding essay
6. Outbound to Synx.tools for BIOS / Pass operations

## Off-limits

- Fake Morph screenshots
- Treating domain.cioty.com as Morph
- Treating HIVE as the public marketplace name
- Inventing org admin roles
