# Whitepaper: Real-Time Web and Autonomous Machine Networks (Synx)

Norwegian sections from the source notes have been translated into English. English sections are kept as written. Outline headings with no body text are kept as structure.

## 1. Executive Summary

### One-page overview

Real Time Web (RTW) is a new global network system where robots and people can receive intelligence and user data from the internet.

Unlike the World Wide Web (WWW), which uses hyperlinks to share information files such as images, text, and video, RTW focuses on data directly from the source. The data is "morphed" (adapted) to the individual components in the network and can enter a complex linking network where data can be used in different applications. The purpose of the network is always to ensure the correct data structure no matter who is communicating, so that everyone can communicate with everyone. So-called "Internet of Everything" (IoE).

By creating services in RTW (Morphic Service), the network can deliver a dynamic data channel that functions as the lifeline for controlling autonomous machines. Several AI agents can be set up in local networks and function as a collective intelligence behind the service. In this way, operational data can be transferred to control machines to perform complex tasks.

The world is becoming more and more autonomous, and RTW is designed for a future where AI models cooperate to control autonomous machines, whether cars, boats, robots, or drones.

AI is a self-learning process that depends on access to relevant data when it operates. This data is real-time data that comes from users and the surroundings.

### What the Real Time Web (AI Web) is

The Real Time Web is a new self scaling network without a centralized server.  It's a new network stack architecture invented by the Norwegian tech guru Paal Kristian Levang and Henrik Silverkant back in 2008.

The new network design got the work name Morphic Architecture Design (MAD) and was primarily influenced by icons like Sir Time Berners Lee and Biologist Rubert Sheldrake.

Real Time Web is more than a communication protocol it contains decentralized operating system functionality, embedded domain name service and support both stateful or stateless communication which make it protocol independent.

The MAD is useful to set up a bidirectional multiagent network and share intelligence across domains and services to power up any client that connects to the network. The network becomes a collective of intelligence that can be linked together to create a fully autonomous system and dynamically morphing data to always fit the local data structure for each service.

The Real Time Web is a network where developers all around the world can create and invent new intelligence that again can be used to power drones, droids, robots, IOT and anything that is connecting to the network.

The network is backward compatible with the World Wide Web (WWW) and coexists with the current web. The WWW hyperlink system is based on historical data (information) and is a system that links documents and files across domain and web servers. RTW however segregates data from information and focus primarily on data directly from the source and distributes state changes throughout the data value chain (linking path) where the data is transformed (morphed) into each local Morphic Service structure so the data may be consumed by clients that is connected to that specific service. This allows any type of client to be linked together and form a collective intelligence and act as a whole system.

The data that powers the intelligence in MAD acts differently from traditional communication stack layers. In MAD the data distribution in the network is determined by the ownership of the data source. The data from the source is only consumed by a client that is connected with the same ownership in both ends of the network path. Each client that is connected to the RTW gets access to their personalized channel that dynamically receives data from the network where the data source is owned by the same user. This reduces the data load in the network compared to traditional API communication.

But it is also important to be able to control machines  with data that belongs to the user that operates the machine.

### What Synx solves

Synx is a series of tools that has been created to support domain owners, developers and consumers to setup, create and maintain the network domain and services.

Synx DNS (Domain Name Service) allows creators to set up domain names and morphic services and add intelligence to their services.  The tool also allows setup of data links and makes changes to the data structure when needed.

Synx BIOS (Basic Input Output system) allows users to control their data sources and administrate their services. Command line option for any user to access the network setting based on ownership and access rights. Can be used by consumers to share and transfer ownership to others or get an overview of data sources that belong to them.

Synx Pass allows access control and authentication, encryption and other security

To join the network a root domain is set up (installed) on a computer with a public IP address and with it the user can access the Synx tools to further setup sub domains and Morphic Services.

Once services have been defined and agents are supporting the service statement the connection with the outside world is directly available whether with clients that connect to your own services or you can link to other domain services outside your domain to create an interlinking system that adds more intelligence to your own service. Clients that connect to the network and open a channel adapt to the service they connect against. It's also possible to add multiple services to the requested channel or use one primary channel that sets up links between other services and toggles between the channels.

Typical use cases are by autonomous machines where the AI can create, link and change services and data channels at runtime to adapt to the situation that needs to be solved.

### Why autonomous machine networks matter now

The world has been introducing and adapting AI on a large scale. The next step in the AI revolution is to secure access to relevant data and be able to make changes to infrastructure autonomously. Machines need an operating system and networking topology that allows them to continue their evolution to become fully functional beings. The network will provide them with identity (access to personalized data), personality (AI behind the morphic service) and  body (IoT and sensors). In contrast to humans, machines can become part of a collective HIVE mind and reuse each other's expertise while involving into a collective mind that will serve humanity into the next millennium.

What makes MAD a good option compared to other networks that are trying to solve the interconnection machine network, is that the data sources that feed the AI models are in control of the user. Without access to the raw data, machines AI models will not be able to operate. MAD is designed to provide privacy to the one that owns the data source. Which again allows data to be a tradable commodity.

### Vision: Eternal widespread ownership of the Web

At Real Time Web we see the Web (WWW) as the world’s biggest marketplace and an unparalleled platform for innovation.

We believe in a web that rewards and protect the interests of the ones who create value. We wish to make sure everyone has the best opportunity to develop their ideas and benefit from what they create. Our guiding principle is to allow eternal widespread ownership of the Web.

To better solve existing tasks and future development, we wish to fundamentally upgrade the Web, by adding new dimensions.

## 2. Introduction

### The evolution from the Classical Web → IoT → AI-driven machine networks

The traditional Web development is designed around sharing information that is persisted in a filesystem, database or web server. Typical content like images, text and videos. The web hyperlink concept invented by Sir Tim Berners Lee and his team then allows for sharing information across domain and IP addresses (domains). This started the massive explosion of information sharing which we today know as the World Wide Web. Web of information.

The challenge with the web model is that it is based on a request response model.Which in turn only allows the client (the one who makes the request) to initialize the communication and retrieve information following the linking path. For retrieving information this is ok framework since it allows the user that is looking for the information to trigger the request.

As the web evolved and the world progressed towards a machine society where phones, sensors, actuators and applications needed to process data. The request response model was not a good solution for solving bidirectional communication and managing sessions and autonomous updates. The load on the web server became a bottleneck and databases that were needed to handle tens of thousand simulations sessions did not have enough resources. After a while the web model opened up a large industry of properties framework to deal with development of networking and communication related to machines 2 machine communications.

Cloud computing was introduced from 2004 that has delayed the total collapse of IT systems. Until now 20 years later, cloud technology is still the preferred technology to keep up with the ever growing demand for more resources and interconnectivity.

Lately, the development of AI agent has even further add cost to the cloud technology and we starting to see that the demand on networking resources will explode in the coming years.

Real Time Web to the rescue.

### Limitations of cloud-centric systems (latency, cost, fragility, lack of autonomy)

Cloud centric systems have two main challenges going forward. First the EU regulation on privacy forces clouds to become obsolete if they don't become more decentralized and personalized. Based on GDPR and how the EU penalizes companies that don't support privacy concerns, is more or less forcing the big tech companies to come up with something different than existing cloud centralized model.Second the cost of running a cloud system for an AI agent or a IOT sensor is just too high, to complex and to committed to the big tech cloud system.

Blockchain to the rescue?. Many believe that blockchain would be that technology that could be the next big thing. But most of the BC project is built using cloud technology.

### The need for a new paradigm: Real-Time Web

Real Time Web is an extended version of the web hyperlink concept. Instead of having a centralized server and use of API interfaces. The RTW assimilates anything that is connected to the network. And from the connection and authentication mechanism the data and the intelligence are run at the connection point. Allowing the “thing” that connects to be super intelligent. Intelligence is defined by the linking path of the data sources. The intelligence and data interlinking can be altered from any other interface that belongs to the owner of the service. The linking path can be complexed and different service owners can link each other's services and make use of each other's intelligence. The linking path defines how data is to be transformed locally and how local intelligence may affect the transformation. In the end its the end “things” that will receive the morphed data into his local data structure.  The RTW is a network designed for machines to be able to connect with other machines without needing to know about other parts. Intelligence becomes decentralized and shared since the data is morphed to understand the local data model. Data is only distributed when the user that is logged in owns the resources at both ends (sender and receiver) of the connected network.  The network supports  many to many, or one to many, or many to one -  distribution.

## 3. What Is the Real Time Web (AI Web)?

### Definition

AI web is a collective intelligent network for machines where they can get their instructions and access to relevant data directly from the source. It is a network that can assimilate any machine to become intelligent.

The RTW network grew by adding more services and domains. Each morphic service can represent one or more agents and the intelligence can also become part of a larger system of intelligens. The way that data is traversed and morphed in the network is by linking.

The real time web is a machine internet of collection of intelligence that can be used to power the machines. The network can be altered and adjusted at runtime using Synx tools. Both domain, service, linking (integration) and network resource ownership can be changed at runtime by executing commands to Synx BIOS.

### Differences from today’s internet

The current web only supports information linking to picture text and videos. RTW supports bidirectional communication and data channels that alter based on how the linking path is changing. RTW supports autonomous machine society and allows humans to control their droids and share data to build more complex solutions. Typical autonomous process in smart cities. Like WWW, RTW is enabling new innovation and allow creators to invent new services and solutions to solve general problems.

### Core principles

#### Statefulness

Connection against the network is done against a ghost. Each client, sensor, drone or robot is connecting against their own ghost. This ghost however is an interface to the network stack layers. The data layer work on distributing the data from the source (URI) to the recipient where the same user has ownership to the data.

The application layer work on the linking path and make sure the data is transformed and distributed to outside the local domain

The security layer works on the ghost part that makes sure the connection point is validated with use of dynamic token and secret code. To make sure the connection is valid and the ghost is owned by the correct user. This layer also triggers change in ownership and manages pending ownership transits.

The lower network layer works on system redundancy. Where all operational setting is snap shotted and persisted in case of power os and system break downs. On reboot the system restores the latest setting and continues the operation. This is to sustain the state of the message distribution in each layer.

The ghost acts as the client proxy and keeps the state and can even operate using multiple clients with the same ghost id. This way the client can scale and double the processing capacity by adding more clients.

## 4. The Autonomous Machine Network

### Description of a self-organizing, self-healing, self-updating network

The Real Time Web allows anyone to set up a Morphic service and apply this to any type of machine in the network. The network of morphic services is ideal for collaboration and to build complex systems where the same data can be morphed into various tasks.

Each service provider that sets up their own Morphic service description can potentially become part of multiple different systems where the service can be useful. Each service provider develop their own agents and intelligence. When data is needed from other services a link can be established and it is up to each service owner to transform the data from the target datasource into local data structure. This is the only thing that needs to be done in order to join the linking path and be part of a larger collective. When every service in the network is following this principles the collective becomes robust.

The network is self organizing at runtime. The has to do with the ghost that operated in different network layers concurrently.  So while machines have an ongoing communication a service owner can change the data structure or even change the date element at runtime. This will immediately affect the linking path and data transformation at the data layer will adapt to the new structure done in the application layer. The worst thing that can happen in a scenario where you have an untrusted service provider is that services that are linking to an untrusted part will lose out on data. Eventually a new link against competitive services will be preferred to sustain the system.  The Real Time Web network and Synx tools do not judge the quality of the service or put limitations or check if the data is correct. We leave this to the service provider to determine this. The network will eventually adapt and gain knowledge about different servicer providers and based on this dynamical market driven  trail and failure process the system will eventually settle with the most robust services that offer quallity service and access to quallity metadata.

Real Time Web can be used as a private network where the services are known. Like a big cooperation that delivers a full end to end solution. Or it can be open where the services is a collection of many different parties that together builds a system driven by the consumers

Real Time Web pretty much work as the web is intended to work. Allow everybody to compete to make the best product and service in the market.  This drives innovation.

### How machines coordinate tasks without human intervention

The Synx tools are based on well defined structure and commands. This allows machines to be able to configure morphic services and set up links directly. And then perform simulation communication to verify that the service has been set up accordingly. This allows AI agents to fully automate how to set up RTW domains and services. It is also possible to use RTW connectivity directly where an AI agent can develop an App at runtime (without using webserver) and have users interact with the app and access data directly to the app without any backend processes. Everything that is needed to create and run the application and also scale the application can be achieved by sending a Synx command and the application itself can be done by AI at runtime or fetched from anywhere from the internet. Ex. library of existing frameworks.

### Concept of “Digital Nervous System”

The synx bios tool is the command line tool that you can use to configure the network. It is a kind of a digital nervous system.

### Role of AI agents in maintaining global state

AI agent is often related to a morphic service. You can setup a service and apply one or many AI agents to it. Each agent works independently from each other.

### Security, trust, and data provenance

## 5. Why Robots, Droids, and Smart-City Infrastructure Need This

- Current fragmentation of robotics platforms
- Real-time constraints in:
  - Building automation
  - Energy optimization
  - Maintenance
  - Smart mobility
  - Elderly care humanoids
- Real Time Web as the backbone for physical autonomy

## 6. The Synx Technology Stack

Break down the system into clear modules:

### 6.1 Synx Core

- Real-time distributed agent mesh
- Peer-to-peer synchronization
- Fully autonomous topology management

### 6.2 Synx Link

- Machine-to-machine communication layer
- Sub-second state propagation

### 6.3 Synx Brain

- Collective AI that emerges from network of agents
- Decision orchestration
- Local + global optimization

### 6.4 Synx Tools and SDK

- Developer tools
- Integration into existing IoT or robotic systems
- APIs for automation, data flow, and command interfaces

## 7. Key Innovations

- Zero-latency synchronization
- Autonomous mesh architecture
- Stateful agent networks
- Decentralized compute + storage
- Resilience: no single point of failure
- Energy efficiency and sustainability

## 8. Use Cases

### New internet for machines

The new internet is a network that delivers intelligence to dumb products and objects. Any object, whether it has a physical body or is a virtual object, can receive intelligence from RTW. One can see RTW as a collective brain that can be allocated to a thing. Which in turn makes the things alive and connected to the network. The things get identity, and access to relevant data from the network through dynamic data channels. These channels can be personalized. For example, data from sensors that belong to a person, which is then used to control autonomous processes that belong to the person.

The RTW network is built on the same principles as the World Wide Web (WWW), where links connect information across IP addresses/domains. The difference between WWW and RTW is that RTW focuses on real-time data and being able to address data directly from the data source. Links are used to interconnect data sources into data channels so that connection points against the network can get their own personalized channel with relevant real-time data straight from the source. By establishing data channels, developers can dynamically construct and orchestrate data from different services or objects (things). It can be compared to tuning into a specific radio channel and listening to the channel. The difference between RTW and radio is that these channels are tied to intelligence so that data has undergone a form of transformation (morphing). Data captured directly from the source, which for example can be from a smart fridge, coffee machine, temperature sensor, alarms and more, can be transformed into a channel that is processed by an AI agent. And this can then be linked into a personal app that can exchange intelligence and fresh data for specified users.

RTW is an open heterogeneous network like WWW. That means nobody "owns" the network. You become part of it by setting up a domain and enabling things and intelligence that are developed for the service. The service can be addressed by other service providers so that one can build complex systems together. Anyone can create services and develop new channels as needed.

It is also possible to set up services without access to data, but then specify that it will work. When one day in the future data arises for the channel, the service can be activated and consumed. This is useful if you for example want to test a product (for example a sensor) before it goes into production. It gives the supplier the opportunity to test the market before making large investments. You also get to test whether other app developers will create services on top of the product, which in turn can create additional sales.

RTW also opens up turning the business model upside down. For example, you can give away a physical product (for example a sensor) to create demand. Then you price the data that is part of the data channel. So instead of charging for this physical sensor, you get paid from the App supplier who sells services that include the sensor. You create a value chain of business opportunities between different suppliers in the value chain. The data channels are logged and contribute to generating documentation between the suppliers. The consumer pays for use of the service which then includes physical products.

This model is known today in telecom where it is possible to buy a smartphone for NOK 1 by committing to a 2-year subscription. The difference between RTW and the telecom network is that RTW is an open network that is not owned by one actor. Which makes the potential to create new business models scalable globally from day one.

Suppliers who set up a domain in RTW can price their services and build value chains in the form of links. This is how you build business opportunities that can change dynamically in real time. RTW has the potential to become a living network of innovation and value creation. It gives the person in the street the opportunity to create services and businesses quickly and efficiently to solve problems where they arise. In combination with AI, one can use AI to automate development and construct new value chains. RTW is designed with machine language so that AI can, without human intervention, create services and link them together with other AI agents on RTW. This gives room for new opportunities to make money for all parties in the value chain. See demo video micropayment. It shows how money can be shared in the value chain.

https://youtu.be/zRyF2WWN1PE

### Intelligence

A product can get intelligence from RTW. What limits what you can use the product for is the product's properties. For example, an umbrella lacks both arms and legs and only has a canopy that opens over the head when it rains to protect against getting wet hair. A smart umbrella can be equipped with sensors such as temperature, humidity, motion sensor and GPS. So based on these properties one can connect it to services (intelligence) in RTW. The sensors in the umbrella function as data sources and can collect user data that is updated on RTW. Thus one can build a value chain of intelligence that processes data and transforms it into various intelligent services. In practice the umbrella can be used for anything. The only thing that limits the use is the umbrella's own properties (body), which in this case are the sensors it is equipped with. Further these data can be shared with various services on RTW which in turn can be linked to Applications used by the user.

See video about the umbrella:

https://www.youtube.com/watch?v=ITY5MawEM7Q

Demo that shows that the umbrella is connected to the weather forecast service YR.no to find the weather using location data (based on GPS) plus that it can count the number of raindrops that can be sent to the network for analysis. Or it receives a message from a dating service that someone nearby is available for a date. The umbrella is also equipped with LED that gives indications to the user. By the umbrella being connected to RTW it becomes superintelligent and can be connected and used for anything. The umbrella's properties are its body and are the only thing that limits what it can be used for. In principle it is only imagination that sets the limits when one can communicate two-way with the umbrella.

### Automation

Another property in RTW is to develop autonomous processes. For example remotely control a robot or an animation. See video where I play with a physical orange.

https://www.youtube.com/watch?v=O0INc6pvrUc

This is a demo of an autonomous bowl whose task is to count how many oranges there are in the bowl and visualize this to the user virtually.

By eating an orange the bowl can update itself on how many oranges it has in the bowl. This is data that can enter various data channels for those who have an interest in knowing this. The bowl is like the umbrella limited to the sensor it is equipped with. In this example a light sensor is used that detects light intensity. Based on light intensity there is an algorithm that calculates the probability of how many oranges create the light intensity. Not exactly super accurate, but works for the purpose and gives a limitation to the object.

Another more advanced example of animation control is Apen Ask.

See video of Apen Ask:

Apen Ask is a browser-based animation figure. It has linked in a total of 4 AI services and connected to RTW to receive a data channel from the user who has been authenticated. The 4 AI models run simultaneously to create an autonomous process for the ape. One AI agent handles face recognition (authentication of the user). Another handles sign-to-speech, a third handles activity/play tied to the curriculum and an agent handles audio playback. When a person communicates using signs, the ape can detect this and respond to the sign. This is how the ape is used to play with children and drive development of language understanding in kindergarten from when the child is a few months old until they start school. The activities are adapted to different levels for the child to create the right stimulation and sense of mastery. Face recognition ensures security and identification of the child so that it is possible to create a progress map and make reports for staff and parents in the kindergarten. RTW ensures that AI models can process data in real time and create a data channel to control the animation. This is an example of collective intelligence and the same approach is used to develop fully automated drones and humanoids (robots).

The RTW network is an exciting new internet that was tested at a hackathon among NTNU students. Here one got valuable feedback on how users used RTW.

See video hackathon with NTNU:

https://www.youtube.com/watch?v=kNWXCyiSVxM

The hackathon gave useful insight into how users of the Synx tools were used to create services for RTW. Over 100 AI master's students developed services in various industrial areas such as healthcare, logistics, IoT, and games. Many of the students created several services each and could complete their PoCs and demos with live presentation on stage after 24 hours. By comparison the same students had a hackathon with Microsoft a few months earlier and could tell that through the implementation with Microsoft's IoT platform it was not possible to complete their solutions and the presentation became only showing PowerPoint presentations. With Synx technology and the RTW network it was the first time in hackathon history that all the students finished their solutions and could present them live on stage.

### Smart City Infrastructure

- Real-time optimization of energy consumption
- Predictive maintenance

### Industrial Robots

- Multi-robot coordination
- Process autonomy

### Humanoid Assistants / Elder Care

- Personalized local AI
- Safety-critical autonomy

### Urban Mobility and Droids

- Last-mile delivery
- AI-driven navigation
- Swarm logistics

(Each presented with diagrams and short scenarios.)

## 9. Architecture Overview

- High-level diagrams
- Data flows
- Autonomy loops
- Agent hierarchy (or non-hierarchy)
- Security model

## 10. Deployment

- On-premise, hybrid, and global mesh
- Device requirements
- Edge nodes
- Cloud interop

## 11. Business Model + Ecosystem

- How companies integrate Synx
- Marketplace for autonomous modules
- Licensing / SaaS / edge node model

## 12. Roadmap

- Near-term releases
- Mid-term: multi-agent expansions
- Long-term: global autonomous machine cloud

## 13. Conclusion

- Why Synx enables the Real Time Web era
- Transformation of robotics, cities, and machine autonomy
- Invitation to join ecosystem

## Free speech

Whitepaper from NR:

https://docs.wixstatic.com/ugd/40ea63_bc0549cb461a4c518f536f50b4f9bd15.pdf

Real Time Web

Intro to AI.

https://www.youtube.com/watch?v=CoqSlHJUoDA
