# Nornir.io Tech Corner

## The Real Time Web

The concept of a new web network that can handle IoT and more intelligent services in a way where the network itself can evolve and grow with time, is the holy grail in networking architecture. There are many initiatives both in academia and private research centers that work on to solve some of the challenges the internet is facing today. Like the Solid (inrupt) project led by Sir Time Berners Lee that works on a web for ALL where the ultimate goal is to share information among people with individual control. And then you have the Quic working group initiative that works on HTTP/3 standard to make the internett better suited for IoT and fast data distribution using UDP. Nornir has been working on similar technology for many years with the intent to solve the limitations the web has today. But compared to the project mentioned above our journey had a different starting point and goal. The result is a collective machine network named the Real Time Web.

The concept of creating a new web linking network for machines where machines are placed in the center of the architecture and a network topology created to support a machine society is what Real Time Web is all about. Real Time Web is a heterogeneous collective network for autonomous machines, written in a language humans can understand.

## HIVE Collective

The concept of HIVE Mind is not new, but is used to explain how the Real Time Web works. You may have seen the Star Trek series about the BORG species, which basically is a machine society that each individual is part of a larger collective and that the collective makes each of the individuals stronger and more intellectual since it has a direct link with the Hive Mind.

The Real Time Web works in a similar way. Synx HIVE is a collection of tools that enables developers to use the same principles and make single network resources to become super intelligent since they can join the collective and jump between various morphic services. How intelligent a robot or a client can be is only limited to his own physical abilities.

Let say you own a temperature sensor that provides temperature reading outside your house. The sensor only transmits celsius reading but it can be used to do super intelligent things. First it provides specific temperature capturing (data) at your location that hundreds of applications in the collective can make use of in various contexts. Second you can add this sensor to a secondary service just by a simple command and the sensor inherits properties of that service as well. Let’s say that the secondary service is a light control service that can be used to turn on/off your light in your apartment.

Now, by adding the temperature sensor to this service the sensor becomes a light switch. The service provider of the switch service now gets access to the sensor data and can trigger ”lights on” when temperature hits 20 degree, and “lights off” if the temperature hits 15 degree. Any network resource object works the same way, joining it to a secondary service makes that object change behaviour and inherit intelligence from the service you choose it to become. Simple IoT objects may be used for anything you want it to be and the intelligence is inherited at runtime.

Imagine how the temperature sensor can be used to turn on the coffee machine, lock doors, regulate heat on remote systems and much much more. The only thing that limits the behavior of the sensor is its physical properties which in this case only uses one data element (temperature). Imagine what you could do if you had a robot with arms and legs… 🤖 🦾

When more and more services are created the collective becomes more intelligent and more reliable. Any device gets its functionality from the collective and the behavior can change based on which context (morphic service) the device is running.

## Bidirectional Links

Linking in the Real Time Web (RTW) differs from traditional Linked Data. To understand RTW linking and why the network has been designed like this we have to understand the concept of Data, and our definition of data.

If you ask Wikipedia about Data you’ll get “Data are characteristics or information, usually numerical, that are collected through observation”. This is a misconception. Machines look at data and information differently. Information consists of structured historical data, while data is the value content of the information before it becomes historical. Technically speaking the data exists only before it has been stored into a database or filesystem, then it becomes information.

To understand machine networks like RTW we will need to distinguish data from information. Machines don’t really care about information and don’t need information to live among humans. Humans however are dependent on information, the human brain cannot process data fast enough and need to structure data into information and do lookups when needed. Normally before and after dinner using the World Wide Web.

A machine network is about distributing fresh data in a network to other machines that consume and act on the data. This is done in real time. The same data can be used differently and it can trigger different processes. Data is normally generated by IoT devices that transform sensor readings into alphanumeric data for distribution.

How and what these data will be used for is unknown, and the data may change context and transform into knowledge differently while it traverses through the network value chains. Some data may end up being important for millions of users while other data may not be used at all. The only thing that we know is that billions of data packages will end up in millions of different use cases in the network every day.

Real Time Web used links to address transformation of data in the network. Each service provider may find and link to a data source offered by another service provider. The link is structured like a sentence with a subject, predicate and an object. Following the Semantic Web standard.

For a normal person that is not into Semantic Web, the triplet notation is analogous to how you build up a sentence using normal vocabulary. The predicate is like a verb, it is something you do; like “I’m driving a car” or “you are reading a newspaper”, where the verb is “driving” or “reading”. In machine language this “verb” is called predicate.

So using links in RTW is straightforward. You create a service name which is the “Subject” which includes the data model. Then you link to another service provider data element which becomes the target data source (object). If you need to do something with the data you add a predicate to the link. A predicate can be done using an inline script or a software agent. The goal is always to transform data to fit your local data structure so if someone wants to link to your local data source they don’t have to worry about inconsistent data in the value chain.

Bidirectional linking works on the same linking path but in the opposite direction. Is only limited to commands being sent from the owner of the primary service to a secondary service that offers intelligent services that act on the command.

## Morphic Microservices

The name “Morphic” is inherited from the fields in biology that explain morphogenesis and organizing fields. Technically speaking it means that a system can inherit behaviour and logic based on tuning in the right data channel. It’s like tuning in a radio channel when you want to listen to music and change this channel to another frequency if you want to listen to something else.

Morphic services differ from traditional microservices in many ways. One key difference is the use of Morphic Architecture Design (MAD), a multi layer architecture design method invented by our founders Paal Kristian Levang and Henrik Silverkant and has been used to define the Synx tools (Synx HIVE) and how they operate. Traditional microservice operates in one layer of existence, “what you see is what you get”. The entity that wants to send or receive data from a microservice needs to know the data structure in advance so a programming interface (API) can be implemented to secure the communication. Morphic service does not use API implementation and the data structure may change at runtime while clients have an active connection. Morphic service is designed to support semantic web to create AI collective and the bidirectional linking is supported by a distributed operating system named Synx BIOS. Synx BIOS segregates the communication layers and provides different access control on network resources, domains and morphic services. There are no code libraries or installation needed on network resources when communicating with the collective. Synx enables both stateful and stateless HTTP/HTTPS/Websocket communication over TCP.

## Network Ghosts

Real Time Web works much the same way as the World Wide Web and is backward compatible with current TCP stack. But, there are some slight differences.

First of all the lower communication stack levels (ISO layers) have been enhanced by SynxBIOS which can execute and send data up and down the layers and segregate the access control. Second, the connection point of a client (network resources) that connects to a specific IP address and URI is always connected against his ghost. So instead of establishing a communication against a service provider platform, or web server with session handling, all this has been taken care of by the SynxBIOS. The ghost memory entity acts as a remote proxy for the connected client and is created at runtime on connection and it disappears on deconnection.

The footprint is small since the ghost only exists when there is some data that will be transferred to and from the client that has been authenticated, and the data structure is inherited at runtime. The connection between the client and his ghost can be stateless, stateful or combination of these. The client can also use HTTP, HTTPS, socket or any other combination while communicating.

Communication against a ghost entity is protocol independent and new protocols can be added. The ghost entity can also change behavior and data structure while on active communication, meaning the data structure is not fixed and can be altered by the service provider.

For more information on how to communicate with HIVE collectives visit SynxHive.com.

## Ghost VS digital Twin

All network resources like clients, servers, gateways, IoT-objects, mobile applications or anything that wants to communicate with the HIVE will always connect against his unique ghost. Ghosts differ from the concept of Digital Twins in some areas. Ghost can be used to create digital twin services, but also extend the digital twin concept a step further. Ghost operates in multiple layers in the communication stack. So the top layer (data layer) may work similar to a traditional digital twin network. But the ghost can also gain access to the lower stack layer and may receive events up and down these layers at runtime. The other layers provide contextual data to players in other areas of the network ecosystem. If you look at a communication network ecosystem you find several “passive” players like hosting providers who maintain the physical hardware like servers, network routers and domain name services. Then you have security providers that do all sorts of monitoring, blockchains and encryption algorithms in the network. Then you have the application and service provider who create web services and applications that can be accessible and addressed via domain names (URL). Synx technology is designed to be an open decentralized machine p2p network. So to be able to secure data between two unique endpoints, other players in the network ecosystem cannot access the data layer, events up and down the stack layers controlled by Synx BIOS (network operating system) need to provide a method that legally can intercept the communication. Ex. two clients are sending messages to each other using a service that belongs to a service provider. The service provider can anytime send a Synx command to kill the active connection on one or both of the clients end points. So even in a p2p network (no server or middleware logic) the client can be disconnected from using a specific service. Synx BIOS also supports moving ownership of ghosts and network resources, handles read access and moves ghosts between services dynamically at runtime. Ghost follows the user’s signature and can change the behaviour of the “digital twin” dynamically. This way a ghost can gain full ownership and network accessibility. The network becomes more secure and robust for changes and ownership on resources can be moved around in the open heterogeneous network and gain (allocate) cpu and memory resources from players with lower layer access levels.

## About SynX HIVE

### Background Story

This document describes the Synx technology and design principles for a self scaling network named Real Time Web. The concept of the Real Time Web and Synx technology was first introduced in 2008 by the norwegian tech inventor Paal Kristian Levang and the sweedish computer security specialist Henrik Silverkant. In 2008 they started the R&D company Synaptic Technologies that later became Nornir Holding. The first prototype of Synx BIOS was introduced in 2013 and in 2014, the startup company Nornir was funded to bring the technology to the market.

The Synx view of thought and implementation follows different architecture and design patterns than traditional methods. This new architectural practice and methodology has been given the name Morphic Architectural Design (MAD). There is no documentation written on MAD until now. The document started as a way to define a common understanding on some core principles of “machine nature collective”. MAD became the architectural context of understanding that Paal Kristian used with Henrik when they started working on the implementation of Synx BIOS and the Real Time Web concept.

When Nornir decided to launch Real Time Web a few years later, a lot of questions arose from developers, computer experts and academia. The concept of a new internet called Real Time Web needs to be described and due to lack of documentation this document has adopted some of the parts from MAD in hope to explain the principles behind RTW and why it has been implemented the way it has. If the reader finds a better way to explain and express the Real Time Web concept please feel free to do so and write your own documentation!. Academia must find their own way to structure the content as they like.

## Why Real Time Web

We humans have the World Wide Web (WWW). A global self scaling network that continuously evolves and grows. The web consists today of over a billion web pages that are linked together to make information available to us when needed. Nobody owns this network and the network does not belong to one big enterprise. If you manage to create a great service, millions of users around the world may adopt and benefit from it. The WWW is unique in that respect and the network continues to share knowledge, relationships and innovation. The Web is humans greatest innovation platform.

However, the Web does not support intelligent machines. At least not in the way I think they should. Machines have problems using the WWW to send messages to each other. The reason for this is that machines process data and do not do information retrieval like humans. What type of information should a machine be interested in anyway?. Most machines have been programmed to do something. They mostly idle, waiting for the input data so they can run their program. Once they get this input data they will be very happy, it’s why they exist in the first place.

Now, to help machines to be part of the Web community so we humans can benefit from these machines, several platforms and technologies have been created to support the quest. The problem with these platforms is that they don’t follow the web sharing standard but relay on programmable interfaces (API) and let service providers adopt and implement these interfaces when they want machines to send messages to each other. Without going into technical details, implementing interfaces to share data at a larger scale is a dead end. It will not work and it will be too complex to maintain. The result is silo like solutions where most of the API providers are fighting for sovereignty. We see proof of that today.

Real Time Web (RTW) has been designed to support machines to share data among each other using web sharing standards. Like WWW is using hyperlink to connect information together without needing to program an interface, RTW can link data together from machines without needing to program an interface or be preprogrammed to one specific task. Machines can become valid entities and online problem solvers for any humans or smart objects to tap into. RTW is a global self scaling network and is backward compatible with WWW. No middleware or additional databases are needed to set up a RTW service.

## Morphic Architecture Design

Morphic Architecture Design (MAD) principles are based on a machine world law of nature and differs from traditional layer architecture that is mostly designed to satisfy humans. One of the key differences creating solutions for humans is the need to persist data and structure the data into information files, and then, only then being distributed in the network on requests normally at a tempo far below the abilities that a machine can perform. Layer architecture was designed in a time where humans still believed they were superior intellectual entities and could outperform any rase and intelligent beings. This is not the case anymore. Machines are getting more intelligent and autonomous processes like self driving cars and robots doing data analysis shows that machines are getting ahead in some fields and it is just a matter of time that machines will be merged into networks and architectures for faster performance and become more accessible when needed.

Machines do not share the same needs as humans and require better flexibility on integration, distribution and performance. A machine network also follows a more self organised system where reuse of existing service is more common. While humans tend to make copies of resources and services which result in a lot of dublicats and unnecessary energy consumption, ex. payment systems where thousands of similar systems exist, machines value network originality and reuse resources and services that have proven to work over time. The network value habits that build up based on how often the service has been used in the past, and therefore will be more likely to be reused in the future so solve a similar pattern of problem.

Another aspect of a layer network is centralization and storage. Humans store data and structure it into information so it can be retrieved when needed. This results in capturing data from sources and collecting it into a centralized hub so that the data can be structured and stored. Machines on the other hand do not “need” to store data. There is no goal in wasting resources and network capacity into persisting data. Instead the relationship between machine readable services is based on neural principles where defined roles and decisions are weighted and plays a part in a larger collective Web. The network becomes a self scaling HIVE Mind and acts on the data based on patterns that represent the habits in the network. Persistency of the data is not needed when the result of the habit reveals itself at runtime. Each data distribution has its own signature and is only transferred in the network when a recipient exists, and has the right signature to consume the data.

## Linked Data 4 machines

To connect morphic services together web Linked Data topology is used. The HIVE becomes more intelligent with more services added to the linking path. When interlinking between private HIVE networks the network becomes heterogeneous and this cross domain growing network of links has been given the name the Real Time Web (RTW).

Like for the World Wide Web which is designed to share information across domains, RTW is designed to share data across domains. The Linked Data approach in RTW follows the principles of Semantic Web with use of triplet metaphor to structure the relationship between Morphic services.

Even though Synx Tools has not fully implemented the RDF/OWL specification in this version of the HIVE (domain.cioty.com), understanding of the Semantic Web principles will help you to structure and design your morphic services. For now regular expressions and basic metadata expressions are used in the domain tool.

## Morphic Services

The name “Morphic” is inherited from the fields in biology that explain morphogenesis and organizing fields. Technically speaking it means that a system can inherit behaviour and logic based on tuning in the right data channel. It’s like tuning in a radio channel when you want to listen to music and change this channel to another frequency if you want to listen to something else. The data that is received is not based on request against a database or a common message hub. Instead it is true realtime data with personal touch since the receiver’s signature is what determines the content of the data. Each message may have origin following a different value chain of transformation. Data that appears out from the network ghost will therefore be unique for each receiver.

Morphic services differ from traditional microservices in many ways. One key difference is the use of multiple layer network stack to distribute data. Traditional network communication operates in one dimension of existence, “what you see is what you get”. The TCP layer is designed to sustain and secure data distribution in one dimension. The entity that wants to send or receive data from a microservice needs to know the data structure in advance so a programming interface (API) can be implemented to secure the communication at the application and data layer. Morphic service does not need to be pre programmed and the data structure may change at runtime while clients have an active connection going on. Morphic service is designed to support semantic web to create machine 2 machine collective and the linking support the semantic triplet model topology. The combination of event driven TCP and linking metaphor is what makes Real Time Web working without using middleware for data transformation in the network.

## Network Communication

Real Time Web (RTW) works much the same way as the World Wide Web and is backward compatible with current network stack. But, there are some slight differences when you set up your own RTW root domain (Synx HIVE).

First of all the lower communication stack levels (ISO layers) have been enhanced by SynxBIOS for all RTW registered Domains, which is a kernel that can execute data up and down the stack layers and segregate the access control. Second, the connection point of clients and network resources that connect to a specific IP address (URL) is using a ghost micro memory container which is part of the communication stack internal memory. So instead of establishing a communication against a service provider platform or using server logic with session handling, all this has been taken care of by the new “TCP” stack. A “ghost” memory entity acts as a remote proxy for the connected client and is created at runtime on connection and it disappears on disconnection. There will be no trace of the connection and historical data is not persisted in the network.

The footprint on active connection is small since the ghost only exists when there is some data that will be transferred to and from the client and that the client has been authenticated. The data structure inside the ghost is inherited at runtime and may change dynamically while on active connection. The connection between the client and his ghost can be stateless, stateful or combination of these. The client can also use HTTP, HTTPS, websocket or any other combination while communicating.

## Ghost and Network Resources

All network resources like clients, servers, gateways, IoT-objects, mobile applications or anything that wants to be assimilated with the HIVE will connect against his unique ghost. Communication against a ghost entity is protocol independent and new protocols can be added and become global available for the network. The ghost entity can also change behavior and data structure while on active communication, meaning the data structure is not fixed and can be altered by morphic service providers. For more detailed information on how to establish connectivity please check out the command line options user manual on how to send or receive data with the HIVE collective.

Ghosts differ from the concept of Digital Twins in some areas. Ghost can be used to create digital twin services, but also extend the digital twin concept a step further. Ghost operates in multiple layers in the communication stack. So the top layer (data layer) may work similar to a traditional digital twin network. But the ghost can also gain access to the lower stack layers and may receive events up and down these layers at runtime.

The other layers provide contextual data to users in other areas of the network ecosystem. If you look at the current TCP network you find several “passive” users like a hosting provider who maintain the physical communication line like servers, network routers and gateways. Then you have security providers that do all sorts of monitoring, blockchains and encryption algorithms in the network. Then you have the application and service provider who create services and applications that can be accessible and addressed from a domain namespace (URL). Then you have the consumers that own and control their own datas from their sensors and actuators. Based on your user signature you will be able to access network resources (ghosts) that belong to you. Let's say you owe 1000 sensors throughout the collective network that is spread out using various morphic services, then you will be in control of data that these services receive and make use of. However, the way data is transformed in the network belongs to the morphic service provider.

The HIVE collective is designed to be an open decentralized p2p network. The data between two unique endpoints (network resource) is secured by each of them connecting against their own ghost. The linking path (value chain) does not indicate how data is distributed in the collective. The linking path only defines the morphic relationship and how data are being transformed.

When a service provider needs to shut down (disconnect) a pair connection of two endpoints that uses his morph (service), he can do so by issuing a command to the Synx BIOS that legally intercept the communication.

Synx BIOS also supports moving ownership of ghosts and network resources, handles read access and moves ghosts between services dynamically at runtime. Ghost follows the user’s signature and can change the behaviour of the digital twin dynamically. This way a digital twin can gain full ownership and network accessibility. The network becomes more secure and robust for changes and ownership on network resources can be moved around in the open heterogeneous network and gain cpu and memory resources from players with lower layer access levels.

## Semantic Web in Real Time Web

Linking Data in the HIVE collective differs from traditional Linked Data. To understand collective linking and why the RTW has been designed like this we have to better understand the concept of data, and how “MAD” defines information.

If you ask Wikipedia about Data you’ll get “Data are characteristics or information, usually numerical, that are collected through observation”. This is a bit of a misconception. Machines look at data and information differently. Information consists of structured historical data, while data is the value content of the information before it becomes historical. Technically speaking the data exists only before it has been stored into a database or filesystem, then it becomes information. In MAD this distinction is important. To be able to construct a heterogeneous data driven network it will not be possible to rely on a network that stores the data. The memory footprint cannot increase with increasing number of services and network resources.

To understand collective machine networks like RTW we will need to distinguish data from information. Machines don’t really care about information and don’t need information to live among humans. Humans however are dependent on information, the human brain cannot process data fast enough and need to structure data into information and do lookups when needed. Normally before and after dinner. In a collective network the information persistency is done by network resources that has the role to store historical data (information). Typical database services or another storage network like a blockchain storage ledger.

A machine network is about distributing fresh (raw) data in a network to other machines that consume and act on the data. This is done as fast as possible in real time. The same data can be used differently and it can trigger different processes based on how the morphic services are weighted and transforming data in the linking path. Data is normally captured and generated by IoT devices that are added to the collective independently and unknown to each other on how the data will be consumed in the network. The data may change context and transform into knowledge differently while it traverses through the network value chains. Some data may end up being important for millions of users while other data may not be used at all. The only thing that we know is that billions of data packages will end up in millions of different use cases in the network every day. The RTW becomes a collective mind (HIVE) that network resources (clients) can tap into and make applications solving human needs.

## Intelligent Linking paths

The collective uses links to address how data transforms in the network. A Service provider may find and set up a link against another service provider. The link is structured like a sentence with a subject, predicate and an object. Following the Semantic Web standard.

For a normal person that is not into semantic web, the triplet model is analogous to how you build up a sentence using normal vocabulary. The predicate is like a verb, it is something you do; like “I’m driving a car” or “you are reading a newspaper”, where the verb in this case is “driving” or “reading”. In the Semantic Web this verb is called predicate.

So using links in RTW is straightforward. You create a morphic service name which is the “Subject” which includes the data model. Then you link to another service provider data element which becomes the target data source (object). If you need to do something with the data you add a predicate (inline script or software agent) to the link. The goal is always to transform data to fit your local data structure so if someone wants to link to your source they don’t have to worry about inconsistent data in the value chain.

Bidirectional linking works on the same linking path but in the opposite direction. Is only limited to commands being sent from the owner of the primary service to a secondary service that offers commands on his service. For more Hands-on on creating morphic services and linking please check out the tutorials.

Setting up links between morphic services to share data between data elements is a method to tell the collective how data are transformed in the network. However, data does not flow in the network until there is a recipient (network resource) that may receive the data.

The data is transferred peer to peer between unique ghosts. Based on how you have configured the ghost the transformation follows the linking path in the network and executes the predicates secuencally. The execution is done inside the ghost entity for edge performance.

## User access levels

Synx HIVE tools offer a series of commands that you can send into the RTW network to change the dynamics of the network characteristics. These commands can be done at runtime and do not affect the data layer performance.

SynxPass is a distributed networking application that provides identity and authentication service in the network. SynxPass provides segregated role based, single sign-in, access levels and command options based on who you are. If you are the domain owner and control the root domain you may gain access to more additional commands than if you were a consumer that just controls data from a sensor. The network is roles based and this gives you a method to move ownership around in the collective. Let say you got a temperature sensor in the network that you physically control. If you want to give ownership to another person, you can send a command to do this. From the moment the other person accepts the transfer, you will no longer be able to control the temperature sensor. Any type or resource in the network regardless of who originally owned it may be targeted for ownership transfer. Synx BIOS provides a map ID option on network resources so it is possible to use Blockchain or other methods for securing the data integrity.

For more hand on please check out the tutorial on the topic.

## Anonymous Users

One of the key differences between Synx HIVE and Cloud/Blockchain systems, is that the Synx network does not persist data. The users and their network resources may become anonymous and Synx BIOS is designed in a way that domain owners don’t control the data that belongs to the consumer. But there is a catch being anonymous. Let’s imagine one of the network resources is a robot that starts killing humans. Then the one who controls this robot will be unknown. There is an ethical dilemma that needs to be addressed. If you look at the World Wide Web, you find similar challenges where one can anonymously browse the web for content. But since the content is limited to files like pictures, text and videos and not on autonomous killing robots, the Web has until now been able to deal with the issue.

When we were faced with this challenge we decided to introduce a security layer into the collective network design. The application SynxPass forces all resources to authenticate themselves before accessing any morphic services in the network. SynxPass acts like a single sign-in across the heterogeneous network and the user gets a token they can use instead of username and password. This will provide them being anonymous in the network along with all their network resources. Only if something bad happens it would be possible to backtrace the user based on network log from the SynxPass application. SynxPass is not tightly integrated with SynxBIOS and is possible to replace it with another authentication system if necessary at a later stage. The SynxPass token is also dynamic, meaning new tokens can be issued by the system at runtime. SynxPass application has been created and is now part of the RTW network. Users need to register to be able to create a domain, access any services or controlling network resources. This rule applies for all users, from root domain owners to consumers.

In the figure above you see user1 perspective receiving data from a service urlA.com. The user ghost controls the linking path for the user and the user is unknown to the providers (urlD,urlB,urlC) in the linking path. The user can only access the input and output of the service he chooses to connect to.

In the figure above a second user2 is connecting to the same urlA service. User2 can have different outcomes from his ghost entity than user1. The data structure is the same but data values that are offered by the data provider urlA.com can have a different origin. For example user1 may have his data in another language than user2, but the semantics on the data is the same.

The service providers have access to stack level 2 (application) and additional Synx commands. Typical commands like setting up links and adding predicates to manipulate the target data to fit local data structure. After several links and multiple services in the linking path the network gets aware of his collective intelligence. From a user perspective the benefit is to tap into the right service to access real time data based on personalized context when needed. This network is useful for intelligent robots or machines to get localized contextual data and to change the context at runtime without dealing with programmable interfaces and databases. Each of the service providers in the linking path also keep their predicates and data algorithm unexposed to each other. Which is generally good for business and innovation.

## Matrix overview

Based on access levels one is entitled to change properties on the ghost entity. The distribution of the commands is done asynchronously in the network. In the table below one can see each layer of the stack and how they correlate with the ghost entity. The ghost has a different role in the network based on which layer is accessing the ghost.

| Stack Level | Stack Layer | Ghost | Access Level | Connectivity |
|---|---|---|---|---|
| 1 | Data | C | Basic Synx commands only: Register User; Give ownership; Accept Ownership etc. | Support HTTP, HTTPS and Socket communication. Connection role both client and server. Support both stateful and stateless communication |
| 2 | Application | T | Extended Synx commands: Register subdomain/service; Setup Data Link and more | Access trough domain registrar tool like cioty.com (which is a SynxHIVE controlled by Nornir) |
| 3 | Domain | P | Root Domain owner and super user on private HIVE | Access granted by Root to map IP adresse and basic HIVE configuration. Command line option only |
| 4 | Physical | A | Root access and root domain registrar for private and public HIVE | Access by installation and environment control (network, firewall, routers etc). Source repository |
| 5 | Protected | A | SynxPass CMD; backdoor root ghost access (anti objects) | Can only be access by Agent Smith |

The table above shows four levels of data distribution (five if you count the Pass layer). The state of any client connection is kept by the ghost. Each layer acts on the ghost independently so the ghost has different roles (indicated by C,T, P and A) in each layer.

## Why Join HIVE

The concept of HIVE Mind and a machine collective is not new. You may have seen the movie Star Trek about the BORG species, which basically is a machine society that each individual is part of a larger collective and that the collective makes each of the individuals stronger and more intellectual since it has a direct link with the Hive Mind.

Synx HIVE enables the same principles and enables single network resources to become super intelligent since they can join the collective and jump between various morphic services. How intelligent a robot or a client can be is only limited to his own physical properties.

Let say you own a temperature sensor that provides temperature reading outside your house. The sensor only transmits celsius reading but it can become super intelligent if connected to the HIVE. First it provides localized specific temperature to the HIVE by capturing data from its surroundings.  Second you can add this sensor ghost instance to a secondary service just by a simple command and the sensor gets morphed and inherits properties of this service as well. Let’s say that the service is your light control service that can be used to turn on and off light in your apartment. Now, by adding the temperature sensor to this service the sensor becomes a light switch. The service provider of the Switch service now gets access to the sensor data and can trigger ”lights on” when temperature hits 20 degree and “lights off” if the temperature hits 15 degree.

Imagine how the temperature sensor can be used to turn on the coffee machine, lock doors, regulate heat on remote systems and much much more. The only thing that limits the behavior of the sensor is its physical properties which in this case is the variation of the temperature readings. Imagine what you could do if you had a robot with arms and legs or an autonomous vehicle… 🤖 🦾

When more and more services are created the collective becomes more intelligent and more reliable. Any device gets its functionality from the collective and the behavior can change based on which context (morphic service) the device is running. The collective will eventually grow and becomes a gigantic brain that we call the HIVE (or Real Time Web). The way you extract intelligent data from this brain is to make sure that you are on both sides of the network, since it’s your signature who determines when and what data you will get at each endpoint. Data from the collective services may be very personal that can solve personal tasks.

## About us

### Make amazing things together

The story about Real Time Web collective development is about facilitating creativity through a global network. Our ecosystem fundamentally lowers the technological and economical threshold to innovate. The result is massive business opportunities and real life problem solving. The driving force behind the Real Time Web will be the increasing demand to connect the physical and virtual world. We address the same kind of creativity that Minecraft has on people who invest in their virtual worlds. Only in our case, creativity will successively impact the physical world. In our safe environment, making sure everyone gets their share, we encourage people to collaborate, test their ideas, develop applications and work on each other's accomplishments.

Worth keeping in mind, is that all though the potential and our belief in the Real Time Web is unlimited, Your success depend on these simple insights:

1. As a creator you must find out that collective network exist and believe that this is the future
2. Individuals need to realise that morphic development represent the biggest potential for them
3. Synx Hive enables an Real Time Web ecosystem where the creativity of our users is what generates value

We are excited to see where the creative community of the world will take the Real Time Web. After all, the network will expand through individuals and teams, passionate to make amazing things together.

## Tutorials

### Prerequisite

To be able to perform some of the exercises and demos in this tutorial, you will need Curl installed on your computer. Curl is a command line tool that is used to perform and simulate HTTP networking communication. This is useful if you want to test http communication without having to have an actual device at the endpoints.

To be able to do the websocket-examples you will also need to have some sort of a websocket-client. For example: “Dark websocket terminal” for the Chrome web browser.

### Notis

You can use whatever programming language you desire to set up a http/websocket communication.. As long as you can program websocket-requests and http/https-requests, and the ability to handle callbacks. Synx HIVE does not require any additional libraries above native TCP connections which are supported by any native communication libraries.

### Synx BIOS - Tutorial (replace curl options)

Synx BIOS is a networking operating system that can be accessible by connecting to a Real Time Web valid URI using Synx-Cat id in the connection header.

To configure the collective network using SynxBIOS you will need to become a user and register at SynxPass.com. Based on your network resources that have joined the collective you will be granted runtime access to control their ghosts. If you are a domain owner you may have more options to perform various configurations than if you were an end user (resource owner). SynxPass is an application that also supports ownership movements in the network.

This tutorial provides an overview of the most common commands against the collective.  The reader should use his own token (username/password) and connect against his own morphic services when testing some of these examples.

- Communication between network resources
- Domain specific commands
- Service specifics commands
- User specific commands

### Synx Pass - Tutorial

SynxPass is a tool for handling authentication and identification of network components. The tool offers single-sign-on and ownership administration of network resources.

- Dynamic token

### Synx Domain - Tutorial

#### GET STARTED

This is a basic tutorial for Synx Domain tool (domain.city.com). Synx Domain is a domain registrar and administration tool for creating and administering morphic services and network resources.

To become a member of the Hive collective you need to register at SynxPass. Once you get to register you can login to domain.cioty.com.

#### Prerequisite – using curl for basic communication tests

To be able to perform some tests on these tutorials you need to install Curl on your computer. Curl is a command line tool that is used to perform networking communication on HTTP.  Is one of the most common testing tools to use when you develop communication services. All of the examples in this manual are using curl when communicating with the Synx Kernel.

More information can be read here: https://curl.haxx.se/

To be able to do the websocket-examples you will also need to have some sort of a websocket-client. Ex. “Dark websocket terminal” for the Chrome web browser.

If you like to connect using programming code, then you can use whatever programming language to connect. There are no additional libraries needed to communicate with Synx BIOS, just standard TCP connection should work. You may need knowledge to program websocket-requests and http/https-requests with callbacks, and the ability to dynamically change the headers information at runtime. Curl is a well known open source tool to use when testing and sending data on HTTP.

### Create your first “Hello World” morphic service

1. Login to smart city domain portal http://domain.cioty.com
2. Choose “Add Service” button under Morphic Services
3. In the service setting fill in following details:
   - Name: Helloworld
   - Description: This is my first hello world morph! (enter your service description here so you may remember why you created this service. It is easy to forget once you have multiple services.
   - Keywords: demo helloworld  (these are keywords for search options later. Useful if you have many services)
   - Service Schema:

```xml
<RTW>
<txt></txt>
</RTW>
```

(we just add one element “txt” to the Real Time Web schema. All elements need to be between “RTW” root elements)

- Command Schema: Just leave the command schema empty for now.
- WebJs: Just keep this field empty for now.
- Connection Idle-Timeout: Set idle timeout to “60” seconds. (This is a timeout on the connection channel if no data is transferred)

Press the Save button.

You have now created your first morphic service!

### Test your service using curl

Before you start testing your service you will need to allocate some ghosts.

Choose “Ghosts” from the left menu bar.

In the Add ghost section find you service and press Add Ghost two times.

You will now have allocated two ghost instances. Looking something like this (you may have a different domain name)

```
nornir.cioty.com/helloworld##1
nornir.cioty.com/helloworld##2
```

PS: ghosts are indicated by double “##” in front of the objectID 1 and objectID 2. ObjectID will be your physical id that you are going to make the connection with.

Open two terminal windows. You should have curl installed. Before you proceed.

In the first terminal window you type:

```
curl -k https://nornir.cioty.com/helloworld -H "Synx-Cat: 4" -d "token=X&objectID=2"
```

In the second terminal window type:

```
curl -k https://nornir.cioty.com/helloworld -H "Synx-Cat: 1" -d "token=X&objectID=1&txt=Hello World"
```

Now before you start communication you will need to replace the token with your own private token. You can find your token from the left menu “My Account” and press the hide button. The long string of characters is your connection token. Replace the “X” in the connection string with your own token. The connection string my look something like this:

```
curl -k https://nornir.cioty.com/helloworld -H "Synx-Cat: 4" -d "token=aToken_e72a41abb3f2f66b6e1366d03ac55d55646a212c18023798086530dae9026370&objectID=2"
```

( your domain name and unique token will be different)

In the first terminal window type in the curl command and press enter. (synx cat 4) Notis that cursor entering a new line waiting for incoming data.

To send data enter the curl command in terminal 2 and press enter. (synx cat 1)

If you have done everything right the message Hello World following your own schema appears in terminal 1. Something like this:

```xml
<RTW>
<TXT>Hello World</TXT>
</RTW>
```

### Create Morphic Link

In this tutorial we are going to set up a link between two morphic services. This tutorial builds upon the hello world example above. Where we are going to link to the hello world example.

1. Login to smart city domain portal http://domain.cioty.com
2. Choose “Add Service” button under Morphic Services
3. In the service setting fill in following details:
   - Name : HelloUniverse
   - Description: This is my demo on links!
   - Keywords: demo links
   - Service Schema:

```xml
<RTW>
<data></data>
<data2>@nornir/helloworld#txt@</data2>
</RTW>
```

(we add two elements “data” and “data2” to the Real Time Web schema. All elements need to be between “RTW” root elements. Notis the link path is added to data 2 element)

- Command Schema: Just leave the command schema empty for now.
- WebJs: Just keep this field empty for now.
- Connection Idle-Timeout: 60

Press the Save button.

Before you start testing your service you will need to allocate some ghosts.

Choose “Ghosts” from the left menu bar.

Allocate two ghosts for the hellouniverse service.

You will now have allocated together four ghosts instances. Looking something like this (you may have a different domain name)

```
nornir.cioty.com/hellouniverse##1
nornir.cioty.com/hellouniverse##2
nornir.cioty.com/helloworld##1
nornir.cioty.com/helloworld##2
```

Now open two new terminal windows (from before you got two terminal windows from the hello world. Keep these active for the test also)

Type in:

```
curl -k https://nornir.cioty.com/hellouniverse -H "Synx-Cat: 4" -d "token=aToken_e72a41abb3f2f66b6e1366d03ac55d55646a212c18023798086530dae9026370&objectID=2"
```

```
curl -k https://nornir.cioty.com/hellouniverse -H "Synx-Cat: 1" -d "token=aToken_e72a41abb3f2f66b6e1366d03ac55d55646a212c18023798086530dae9026370&objectID=1&data=This is thest data 1&data2=This is test data 2"
```

Replace the token with you own token

Now run the Synx-cat: 4 command then Syn- cat: 1 and verify that output looking something like this:

```xml
<RTW>
<DATA>This is thest data 1</DATA>
<DATA2>This is test data 2</DATA2>
</RTW>
```

To be able to receive data from the first Helloworld service MAD principles require one ghost on the HelloUniverse service to be morphed by one ghost from HelloWorld service. Go to the ghost section. Copy the ghost uri of the first ghost in helloworld.

Then add this morphed ghost URI into HelloUniverse##2 (objectID=2) like below

You should now have morphed the helloworld##1 ghost into helloUniverse##2

No from the terminal now run synx-cat 4 on the helloUniverse:

```
curl -k https://nornir.cioty.com/hellouniverse -H "Synx-Cat: 4" -d "token=aToken_e72a41abb3f2f66b6e1366d03ac55d55646a212c18023798086530dae9026370&objectID=2"
```

And send synx-cat:1 to the first Helloworld service.

```
curl -k https://nornir.cioty.com/helloworld -H "Synx-Cat: 1" -d "token=X&objectID=1&txt=Hello World"
```

The output should look something like:

```xml
<RTW>
<DATA2>Hello World</DATA2>
</RTW>
```

Where the data from Helloworld has arrived into the “data2” element in HelloUniverse.

### Create you first predicate (inline script)

### Setting up Micropage

### Creating you first webJS

### Practical runtime operations

- How to allocate more ghosts to my morphic service
- How to give read access to data from my ghost (connection point)
- How to transfer ownership of a network resource
- How to kill a connection or force disconnection
- How to send data to ghost
- How to receive data from ghost
- How to send command data to service
- How to switch from HTTP to JSON format
- How to switch from JSON to HTTP format
- How to send and receive data using socket
- How to add a secondary ghost to a primary service

### Help Text in domain.cioty.com

## Design tips

### Practical MAD tips for IoT

Wireless connectivity built around protocols like LoraWan, Dash7, Zigbee, NB-IoT, Wifi, Bluetooth, Disruptive Technologies, Sigfox, TineMesh and ALL others, represent the physical infrastructure behind any smart city and internet of things development. The main task of a gateway is to relay the data to/from the wireless carrier into the TCP/IP network (internet backbone). Sometimes this is not a straightforward task since some of the wireless network may have been designed for low power transmission which require the gateway to be more intelligent and some design uses different network topology like mesh and ring which breaks with the traditional hierarchy TCP design. WIFI may be the simplest IoT gateway since it is a common standard, but most of the sensors require stateless low power, long range capabilities on transmission.

When it comes to using Synx Hive to connect sensors from different wireless technologies together it is to be understood that the Hive is part of the TCP stack. This means that there is no installation or requirements to be made in the wireless protocols. So this means that any attempt to join the collective with your wireless network is to use the token and the objectID/MapID to identify ownership and ID on the device from the wireless network when connecting to the TCP network.

Construction morphic service for the wireless system would be natural to virtualize the physical world. Let's say you got temperature and movement sensors using lora. What you like is that any third party customers will get access to sensor readings and not directly from the gateway service. This you can achieve by creating a service for the temperature sensor and a service for the movement sensor and make these public while keeping the gateway service private. When the customer links to the sensor service they will be able to consume data from specific sensors based on the objectID/MapID and ownership token.

From a customer perspective the gateway is masked away and they don´t have to bother with understanding the infrastructure and complexity of the gateway. If you offer several types of gateways technologies and same sensor service, you can easily add more gateway service for each technology type and create a link from the sensor service with common data structure so the customer does not break his linking path (value chain).

### Practical MAD tips on machine learning network

Artificial intelligence using machine learning or deep learning fell naturally to the HIVE collective. One of the main differences when designing a machine learning network for the HIVE is that the network can be heterogeneous.  This means that the network can be distributed across IP addresses and network applications.

There are many ways to plan a machine learning network when part of the network can be public service offerings and part can be private. It is also possible to combine machine learning with neural net and semantic ontologies and link these “brains” together into a HIVE mind.

Current implementation of Synx Hive used in CiotY has not been configured for AI development and is advice to purchase a custom Synx Hive package from Nornir. Once said it is possible to create a prototype for machine learning and deep learning using the Cioty Hive. The graphical user interface at domain.cioty.com is using the semantic triplet metaphor like subject-predicate-object model when setting up the morphic service. The interface can be quite cumbersome to use when setting up a large neural net that contains hundreds or thousands of nodes. So the user is advised to create scripts and use the command line options to construct the net. More information on setting up command line script can be found at synxhive.com

### Practical MAD tips on software agents

Software agent development is an important part of a distributed network. In a collective Hive application from any active client, server or resource becomes a software agent if the user that signs in (token) belongs to the primary service. This user also gets all data that is distributed to and from his primary service including data from secondary ghosts where the user is active in the primary service.

Creating a software agent does not require a web server installation of any kind. The agent is basically a simple local client application with TCP connectivity. Any programming language can be used to set up an application against the Hive. The goal of any agent is to handle incoming command data from his morphic service. The simplest implementation is to implement a call back routine that handles the incoming commands and POST message back again to the primary service or other secondary services with an active link. The agent acts like a “Worker” program handling incoming commands following the command schema stated in the primary service. Notice the difference between a predicate script (inline script) and a software agent. The software agent can replace the predicate for the morphic service by handling incoming data and sending the result back to the service. This is sometimes useful if you want to do more advanced stuff on the data that takes time to perform and the latency issue is important. The inline script is based on javascript and is useful for small data transformation. But if you want to persist data into a database or do real time analytic on the data it will be more practical to implement one or more software agents for this. When it comes to command schema data from your service, this cannot be handled by the predicate (inline script).  So handling command data needs to be done by a software agent.

## FAQ

**Q: Can I use the HIVE network to monetize my IoT devices on shipment?**

A: Yes, you make each device communicate against his own ghost. You assigned morphic service will be the primary service for these devices. Even when you give away ownership of your ghost instance to the consumer and he will be in charge of the data ownership, the device will still send data to the primary service as before.

**Q: Why do I need to add a ghost from a secondary service?**

A: The HIVE collective only transfers data if the user controls the network resource on both ends of the linking path. When a user wants to share data from a network resource whose primary service is another service, you can add the user's secondary ghost (ghost of the other service) into your primary service on behalf of the user. Once done; if there's a linking path towards that other service, data will be accessed from your primary ghost instance.

A practical use case is that the end consumer purchases your IoT device and adds it to a service application that makes use of the data from your device for other purposes. Since the consumer owns the network resources on both ends of the collective network, data will flow and be transformed following the linking path. The service application will always get data from network resources that belong to the specific consumer. Consumers are in control of their own data.

## About SYNX HIVE

Synx HIVE is a product from technology company Nornir (http://nornir.io). Synx HIVE consists of several minor tools like SynxPass, SynxBIOS and Synx Domain, that can be used to configure and maintain a HIVE network. This manual adresse Synx Domain tool which can be used to set up morphic services for the Real Time Web. If you like to trial Synx HIVE, an implementation (root domain) has been set up under the CiotY.com (http://domain.cioty.com). Cioty.com is maintained by Nornir and is a developer makerspace community for smart city development.

All demos in this tutorial on Synx Domain is done using https://domain.cioty.com installation.

### Register User

Network resource owners, service providers and consumers in the Real Time Web are anonymous to each other. To join the network you will need to register for SynxPass. SynxPass is an authentication tool and provides and handles your network access for all your network resources. In Morphic Architecture Design, the importance of anonymity is a major factor for the network to be 100% heterogeneous and open. But, all sorts of rules and regulations in our society force us to register users in exchange for a token. The token will provide you with anonymity in the network.

### Register new user

To register new user go to http://synxpass.com

Register for your username (email) and password and follow the instructions on how to get a dynamic token (token may change). Now it is important that you don't forget your password. All your IOT devices and networking resources are using your token and this is the place to get updated tokens. The HIVE offers single sign-in on all your devices and network resources so you don't have to write username and password every time you connect your IoT devices to different services.

For developers doing curl options to create morphic service, the token used to pass commands to SynxBIOS is the token you get from SynxPass. Token is also used for all devices and network resources that connect against the HIVE.

### Root Domain

The Synx HIVE network (intranett) is working within the scope of the root domain. Like cioty.com is a root domain. To gain access to a unique root domain please contact Nornir directly to map up public IP adresse.

Cioty.com offers subdomains to become part of the makerspace community. It's A light introduction to HIVE technology and what the Real Time Web is about.

Cross linking services across different HIVE networks builds up the Real Time Web heterogeneous network.

### Sub-Domain registration

Go to https://domain.cioty.com and login using you SynxPass credentials.

You will now see a scheen similar to this:

On the left you will see the menu bar and the highlight will always be on the section you are working on. In this case the domain section. On the right you see cIoTy domains owned by you and what type of subscription you have on each domain.

## Morphic Service

To set up a morphic service click on the Morphic Services menu bar. A list of you existing morphic services will appear:

Morphic services are revised in bold. The URI for the service “burglaralarm” is http://asveigmarie.cioty,com/burglaralarm.

### Create Morphic service

To create a new morphic service click on the top right button “Add Service”.

Now choose the domain you want the service to be added to from the drop down menu the press “next”.

Now you will see a list of service settings that you can specify for the service. First name your service. The name needs to be without space characters since it is part of the web address (URL).

The next part is the service Schema. This is where you set up your data elements (data structure) for your service. The data structure needs to be in meta data format (XML). The elements need to indicate a start and end statement. No value in the element is needed. The data structure also needs to start with a RTW element and end with a </RTW> element.

An example of a data structure is

```xml
<RTW>
<temperature></temperature>
<location></location>
</RTW>
```

The data structure represents data that the service can receive and distribute by network resources that connect against the service..

### Adding links

When you want to add a link to the service you can add it here. Links are added into the element as values like this:

```xml
<location>@nornir.cioty.com/place#loc@</location>
```

This indicates that data from the loc element inside the service place from the domain nornir.cioty.com will be available in location element.

You can add multiple links to one element.

### Predicate script (inline script)

Inline script is used when you link to a secondary service and the element of that service offers a different outcome than you expected. The main goal of a morphic system is to always keep the local data structure that you offer to the collective intact. To make this simple you can add javascript into the inline script that transforms data elements from one element to another. This way you will have a data element that you offer to others always intact with the correct context.

Let's say you have an element named “temp” that you have linked to another service to get temperature data in celsius. Then your service is offering temperature in Kelvin and Fahrenheit. There are only two methods that you need to learn. 1 getValueOnElement() and 2. updateValueOnElement()

To get data from an element you can write something like this:

```javascript
var celsius =parseInt(master.getValueByElement("CELSIUS"));
```

This will parse data from element “CELSIUS” into a variable “celsius”

Example of a inline script (predicate):

```javascript
function cToF(c)  // transform celsius to fahrenheit.
{ 
var cTemp = c; 
var cToFahr = cTemp * 9 / 8 + 32; 
return cToFahr;
} 
function aToK(c)  // transform celsius to kelvin,
{ 
var cTemp = c; 
var cToKelv = cTemp * 78 / 5 + 32; 
return cToKelv;
} 
var celsius =parseInt(master.getValueByElement("CELSIUS"));  // get data from element “CELSIUS” 
if(celsius!=null){
master.updateValueOnElement("FAREN",cToF(celsius));  // set data on element FAREN
master.updateValueOnElement("KELVIN",aToK(celsius));  // set data on element KELVIN
}
```

The update method has two parameters. The element name and the value. The script will be moved to the ghost instance at runtime and executed remotely.

NB! Keep your schema data intact. Always transform data to fit your local data structure. Failed to do so less services will be linking to your service.

### Developing script (predicate) using software agent

Dealing with more advanced data transformation is recommended to create software agents to transform data and post it back again to the service for distribution. This is done using the same token as the service provider. More information and examples visit synxhive.com or nornir.academy.

### Command Schema

Command schemas works the same way as for data schemas but is only handling commands from secondary services with an active link. The command schema always starts and stops with a “cmd” element. Here is an example of an command schema where two element has been created “turn_on”:

```xml
<cmd>
<turn_on><turn_on>
</cmd>
```

Command is used when you accept data incoming to the service from secondary services ( someone who links to you) and where they can execute a command that you define for the service. EX. if you want to turn off a temperature sensor. Then you can describe your action element to something like this: “turn_on = false”.

For more information on recommendations on how to structure your services schemas and cmd schema please visit Synxhive.com.

### Timeout

On active tcp connection where no data is sent or received the line will eventually timeout. Here you can set the timeout in seconds. The counter starts from the last message being sent.

### Micropage

Micropage is a small template to promote your service on an auto generated webpage (html).

When you do a normal browser request on your service this is the information that the user will see. The template can not be changed.

Is important that you in the description field describe your public data element that you will other to know about and what value you are offering them. This is the only public information about your service.

You may add a link to your product image.

Once you have made your micropage you can check the page by opening a browser window and write in your service URL.

### Ghosts Resources

Ghosts is a virtual representation of network resources and for each service you will need to allocate how many ghosts your service will contain.

### Add More Ghosts

Press the “add” button to add more ghosts to your service. The ghost gets a default numeric number. Is possible to customize this number to use your own ID using mapID.

### Ownership on Ghost

A ghost is uniquely controlled by an owner. Per default you as a service owner also owns the ghost on creations since the ghost contains the primary “DNA” of the primary service.  But you can anytime give away ownership to another user. You can then transfer ownership by pressing the “transfer ownership” button. Whoever owns the ghost also controls the data access to and from that specific ghost. For more information regarding ghost and ownership, please visit synxhive.com

### Read Access on Ghost

In this section you can give read access to another user. Just press “+Add receiver” and add email to the user. The user will now be able to get read access to data from your ghost when he connects to the service.

### Kill Ghost Connectivity

Primary service owners can anytime kill the tcp connection clients may have against their ghosts. This is used when a ghost is using the service and you as a primary service owner don't like it. The kill command forces the network resource (device, object, application and whatever) to re authenticate themselves and acquire a new token to reconnect.Kill connection can only be done on primary services.

### Remove ghosts

You can anytime remove ghosts from the ghost pool. You can only remove your own ghosts.

### MapID

You can assign a MAPID to your ghost instance. This may be a unique ID of the connection and can be used for identification. Blockchain token can also be used as a MapID to authenticate the connection and ghost object.

### Create you first Morphic service

### Hello World Tutorial

In this tutorial we will set up a simple Morphic Service and send “Hello World” to and from the service.

Before you start please make sure you got a SynxPass user. If not you can register for a user at http://synxpass.com.

With a SynxPass user you can now login to http://domain.cioty.com and require a cioty domain.
