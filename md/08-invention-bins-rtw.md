# 1. Title of the Invention

"Real-Time Web Framework for Internet of Everything Systems"

A Bijective network system with distributed runtime BIOS.

## 2. Cross-Reference to Related Applications

### Introduction to Internet Technology and Communication Protocols

The Internet, a global system of interconnected computer networks, has revolutionized communication, commerce, and information sharing. Central to its functionality are the communication protocols and networks that ensure reliable data transmission across diverse systems and geographies. This invention describes a new model on bijective communication framework and how it can be used in the development of the Internet and how intelligent machines and robots can be controlled by granting/disgranting them access to data.

The development of the current Internet and its protocols involved contributions from various organizations and researchers:

- **Advanced Research Projects Agency Network (ARPANET)**: Funded by the U.S. Department of Defense, ARPANET was the precursor to the modern Internet, pioneering the concept of packet switching and developing early networking protocols.
- **Internet Engineering Task Force (IETF)**: A key organization that develops and promotes voluntary Internet standards, particularly the TCP/IP protocol suite.
- **World Wide Web Consortium (W3C)**: Founded by Tim Berners-Lee, W3C develops standards for the World Wide Web to ensure long-term growth and interoperability of web technologies.

This invention builds on these technologies and suggests some changes to the architecture model.

### Communication Protocols Stack

The Internet operates on a layered set of protocols known as the Internet Protocol Suite or TCP/IP model, which is composed of four layers:

1. **Link Layer**: This layer is responsible for the physical transmission of data over a variety of media (e.g., Ethernet, Wi-Fi). It handles the hardware addressing and defines protocols like Ethernet and PPP (Point-to-Point Protocol).
2. **Internet Layer**: The Internet layer manages the routing of data packets between devices across different networks. The core protocol here is the Internet Protocol (IP), which includes IPv4 and IPv6.
3. **Transport Layer**: Ensuring reliable data transmission, the transport layer uses protocols such as Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). TCP is responsible for establishing a connection and ensuring data integrity, while UDP provides a faster but less reliable service.
4. **Application Layer**: This layer interfaces directly with end-users and applications. It includes protocols like HyperText Transfer Protocol (HTTP), Simple Mail Transfer Protocol (SMTP), File Transfer Protocol (FTP), and many others that facilitate web browsing, email communication, file transfers, and more.

### The OSI Model

The OSI (Open Systems Interconnection) model, developed by the International Organization for Standardization (ISO), is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven distinct layers. It was created to facilitate interoperability between different systems and devices by defining clear interfaces and protocols.

The seven layers of the OSI model are:

1. **Physical Layer**: Deals with the physical connection between devices and the transmission and reception of raw bit streams over a physical medium.
2. **Data Link Layer**: Ensures reliable transmission of data frames between two nodes connected by a physical layer.
3. **Network Layer**: Manages the delivery of packets across multiple networks and handles routing through logical addressing.
4. **Transport Layer**: Provides reliable data transfer services to the upper layers, including error detection and correction.
5. **Session Layer**: Manages sessions or connections between applications, establishing, maintaining, and terminating communication.
6. **Presentation Layer**: Translates data between the application layer and the network, including data encryption, compression, and translation.
7. **Application Layer**: Supports application services for end-users, providing network services like email, file transfer, and web browsing.

Although the OSI model is not directly implemented in the Internet’s architecture, it serves as an important educational tool and a reference model for understanding network interactions and designing robust communication protocols.

### Bijective Network System (BiNS)

The invention named Bijective Network System (BiNS) is designed to be backward compatible with TCP/IP, but brings some changes to the communication layers so it's more suitable for creating IoE applications and services. The Bijective Network System is an open system and relies on a decentralized operating system (Synx BIOS) embedded into the network stack. The BIOS contains in memory processing units in each concurrent layer and also has a ghost associated with each layer. Ghost is an in memory object that acts as a bijective proxy for any real world connection instance that is active in the network. This gives the model an address space associated with any endpoint/agent connected to the network.

Compare to OSI model the bijective network consist of :

1. **Network & Restore Layer**: Maintaining and Persistence of anti objects for system restore/reboot purposes. Allocation of network resources, Logging and redundancy operations.
2. **System Layer**: Ensures reliable system health check, error corrections and security updates. Handles routing through logical addressing. Manage system events and reports to other network layers.
3. **Application Layer**: Provides customized command options to enhance the Synx BIOS runtime. Manages sessions or linking between domain and services, establishing, maintaining, and terminating communication, Translates data between the application layer and the network, including data encryption, compression, and translation.
4. **Data Layer**: Supports client endpoint/edge services for end-users, providing network options like https, websocket and other protocols. Also support command bios options regarding ownership shipment and data access management. Including error detection and correction.

**Figure 2-1:** Shows OSI model, TCP/IP and Bijective network system represented by product name Synx BIOS. The ghost module is a shared memory layer that provides communication up and down the active network layers.

### Enhanced Readability: The BiNS System

The Bijective Network System (BiNS) is designed to offer real-time data transport, extreme scalability, data decoupling, and total interoperability, providing significant improvements over traditional IoE systems.

### Key Features of BiNS

**Role Distinction and Compatibility:**

The ISO model clearly distinguishes between higher network layers, while TCP/IP allows protocols to be built on top of the TCP specification without clear separation of data protocols.

BiNS, adopting the TCP specification, maintains backward compatibility with TCP/IP and introduces distinctive layers that allow events to move up or down the stack for better administration and control.

**Ghost Proxy:**

BiNS uses a ghost proxy to identify connecting endpoints, enabling the application layer to control which protocol to use in the data layer.

Ownership control is maintained for each network layer, with the lower layers controlling the higher ones, reflecting the infrastructure and maintenance hierarchy.

**Layered Ownership Control:**

- Domain owners can configure memory allocation and CPU at the lower network stack.
- System owners can configure the system layer with chosen authentication and identification management systems.
- Service providers can integrate, add data transformation logic, and define service semantics in the application layer.
- Consumers can control and manage their data in the network space at the data layer.

**Peer-to-Peer Communication:**

BiNS facilitates peer-to-peer communication between endpoints, avoiding intermediaries and servers in data distribution.

Each layer can be controlled by individuals based on their network role, preventing unauthorized access to other layers.

**Decentralization and Scalability:**

The network is decentralized, scalable by adding more domains interlinked with ownership control per domain installation, creating a heterogeneous network system.

BiNS can be private, with all layers controlled by one person or entity.

**Connection Management:**

Unlike TCP, which is connection/connectionless oriented, BiNS addresses endpoints even if they are not connected. Historical data is lost when the endpoint is not connected.

Ghosts, unique per connection, act as proxies for authenticated and identified endpoints, replacing traditional session management.

**Built-in Features:**

BiNS includes an inbuilt C-DNS (client domain name service) allowing root domain owners to extend their namespace.

An inbuilt operating system (BIOS) allows for direct network configuration changes without affecting other layers.

**Dynamic Data Handling:**

Endpoints can dynamically receive and transform data without pre-programming for fixed data structures.

The system supports autonomous AI, allowing endpoints to create, operate, and terminate applications as needed.

### Practical Example

Assume two endpoints are exchanging data, with data transformation occurring upon receipt by the secondary endpoint. The service owner can change the data schema, transformation, or integration at runtime without breaking the connection. Data received by the endpoint may change structure dynamically, providing intelligent data adaptable at runtime.

This innovative approach enables autonomous systems where endpoints can create and operate applications, receiving and processing data from various channels. Once the application has run its course, it can terminate itself, demonstrating the flexibility and intelligence of the BiNS system.

### Autonomous AI Control

One of the key elements of the BiNS system is its ability to control autonomous AI by managing the lower layers of the network stack, allowing machines and artificial intelligence to create, build, and operate applications efficiently.

### References

1. Internet Engineering Task Force (IETF): https://www.ietf.org
2. World Wide Web Consortium (W3C): https://www.w3.org
3. International Organization for Standardization (ISO): https://www.iso.org
4. Nornir whitepaper for Real Time Web (RTW): https://www.nornir.io

## 3. Field of the Invention

The present invention relates to the field of Internet of Everything (IoE) systems, multiagent systems and more specifically to a Real-Time Web framework for managing and integrating sensor data in IoE applications.

The field of innovation encompasses the integration of real-time operating system features, event-driven network stack layers, and semantic web technologies to create a novel framework known as the Bijective Network System. This innovation specifically addresses and overcomes the limitations of current Internet of Everything (IoE) systems, marking a significant departure from traditional methods while maintaining complete backward compatibility with the existing Internet infrastructure.

The Bijective Network System can leverage standard web technologies to develop web-based applications but introduces a transformative approach to sensor management and data integration. Unlike conventional IoE systems, the new web network now called the Real-Time Web, focuses on AI driven service autonomy, real-time data transport, extreme scalability, data decoupling, and total interoperability. These principles ensure that sensor data is efficiently managed and seamlessly integrated into applications, enabling instantaneous data exchange and processing.

Key innovations within this field include:

- **AI service autonomy:** Ensuring data morphing and machine learning interface for creating autonom services without human intervention.
- **Real-Time Data Transport:** Ensuring data is transmitted and received with minimal latency, facilitating immediate responses and interactions.
- **Extreme Scalability:** Designing the system to handle a massive number of devices and data streams without degradation in performance.
- **Data Decoupling:** Separating data sources from applications, allowing for more flexible data management and integration.
- **Total Interoperability:** Ensuring all components of the system can work together seamlessly, regardless of their origin or design, through the use of standardized protocols and interfaces.

The Real-Time Web represents a significant advancement in the way IoE systems are built, enabling more efficient, scalable, and interoperable solutions for managing and utilizing sensor data. This innovative approach not only enhances current capabilities but also lays the groundwork for future developments in IoE technologies.

**Figure 3-1:** Illustrate the concept of a Real Time Web that addresses the physical world (IoE) using a Bijective Network System and empowers the World Wide Web with dynamical data channels directly from the IoE source to the right web service or web page for a specific user instance. The Real Time Web is a concurrent network system that can act in symbiosis with the current World Wide Web, offering a more flexible and dynamic innovation and creation of new intelligent services.

## 4. Background of the Invention

### Purpose of the Invention

The Internet today, especially the World Wide Web (WWW), is a global system where hyperlinks, HTML, and HTTP create a network for retrieving and exchanging information using web browsers. Hyperlinks connect content like pictures, text, and videos, enabling users to access structured information across various servers without needing to log in or have administrator access. Web servers make this information publicly available, allowing people worldwide to share digital content easily.

However, the WWW has limitations in handling data from sensors and actuators, bidirectional communication, and ownership control of network resources. These limitations arise from the current architecture, which relies on intermediaries or servers to manage data in databases. While APIs have replaced HTTP for bidirectional communication, they still have drawbacks.

This invention addresses these WWW limitations by proposing an ideal architecture for distributing data from sensors, actuators, and intelligent services in a heterogeneous network space using links. By "heterogeneous network," we mean a network that evolves continuously and is not controlled by a single entity, but rather operates like an ecosystem where members control their own services and domains, collectively building a self-growing network. This invention enables such a network to evolve while allowing creators and developers to innovate freely within the space.

### Innovation from the Machine Perspective

The architecture is designed primarily for machines and robots, streamlining how they integrate and share data. Artificial intelligence can create and control its own services and applications. Unlike humans, machines may not require stringent security measures, allowing them to evolve rapidly with easier access to data. From a human standpoint, data controls machines. Therefore, this invention is designed to help humans control machines in the network by managing data access across different network layers. Each layer has vertical management and control access, facilitating horizontal distribution between domains and services.

### How the Bijective Network Invention Works from a Consumer Perspective

For consumers, the bijective network system simplifies many processes. There is no need to install or deploy anything, and the same registration process applies to any IoE equipment or applications. Data privacy is maintained, and sensors, actuators, and IoT equipment are controlled by the owner. This consistency is maintained across the entire heterogeneous network.

The Internet of Everything (IoE) involves physical objects being part of the network, transforming them into network resources. These resources are not limited to active entities; even objects without communication capabilities or software stacks can be network resources. The only requirement for a physical (or virtual) object is that it can be identified and authenticated. Identification is crucial as it makes the object addressable by other network members and gives it context from semantic services. Authentication ensures accountability in case the object causes harm or engages in illegal activities. All identified objects must have a controller or owner; otherwise, the system will not recognize them as network resources.

### Practical Examples

**Simple Lamp Example:**

Imagine you go to a local store and buy an intelligent lamp equipped with sensors and actuators. You bring the lamp home and want to add intelligence to it. You search the internet and find several applications that can provide services for this lamp. After reading the descriptions, you choose a service that allows you to remotely turn the lamp on and off via an application. The application prompts you to scan the lamp’s ID to register it. Once registered, the lamp can send and receive data from the application, allowing you to control it remotely.

**Refrigerator Example:**

Imagine you purchase an intelligent refrigerator equipped with a camera and Wi-Fi that can detect the objects stored inside. You register the refrigerator with an application that automatically generates a shopping list based on what is consumed. While shopping at a local store, the application notifies you that you are out of Coke.

These examples show how consumers can buy intelligent objects from a store and choose an online application to add intelligence to these objects. Any object can be integrated with any application, developed by different providers. A key finding of this invention is the Real-Time Web concept, a network allowing anyone to create and semantically describe services. These services can be linked to build advanced collaborative systems, where the consumer provides data at runtime. While using the services, the system has access to consumer data, and once the consumer disallows data access, the service becomes non-operational.

The Real-Time Web is a heterogeneous network where developers and service providers worldwide can collaborate to create and build services powered by consumer data.

### Keywords

| Keyword | Description |
|---|---|
| Root domain | Same has root domain according to Domain Name System (DNS) and current internet standard. Example of root domain: mydomain.com. Other examples: google.com or amazon.com |
| Sub domain | Example of sub domain: subdomain.mydomain.com. Other example: drive.google.com or payment.amazon.com |
| Bijective Network system | Name of the architecture used to describe this invention. The invention is using ghosts to represent and address the physical endpoint that connects to the network. The ghost shares similar semantics as the service (URI) and has a bijective nature between ghost and endpoint. |
| Service URI | Example of service uri for service A: subdomain.mydomain.com/servicea. Service URI when using http/https connection: https://subdomain.mydomain.com/servicea. Service URI when using websocket connection: wss://subdomain.mydomain.com/servicea. The namespace may adapt to other proprietary communication protocols with similar changes to the first part of the URI: [newprotocol]://subdomain.mydomain.com/servicea. The URI (resource path) is the same regardless of communication protocols. |
| Primary Service | Service that the endpoints/agents belong to with fixed data schema. Example is sensors that are connecting against their primary service. Sensors are programmed from fabric and cannot change after shipment. Primary service allows them to be connected to the network using the statement in the service description. |
| Secondary Service | A service that is morphing to another endpoint/agent that belongs to another primary service. Data that arrives at the secondary service is using a secondary service data schema model after being morphed. |
| Ghost | A bijective object of the connected endpoint/agent. The ghost has concurrent behavior and exists in multiple network layers with different context and roles. The ghost objects in the data layer are called C-objects, in the application layer are called T-objects, in the system layer are called P-objects and in the Network layer are called A-objects. The objects are processed by processing units in each layer. They also act as message carriers up or down the network layers. The interaction with ghosts follows certain rules so as to solve security implications between the layers. |
| Data Schema | Data schema is defined and constructed by the service owner. The schema is then adopted by any endpoint/agent that is connected to the service. When the endpoint/agent receives data from the service it will receive a message that contains key-value according to the data schema. |
| Command Schema | Command Schema is defined and constructed by the service owners only. The command schema contains command and parameter options that the service owner can structure to fit his service offering. There are certain rules that apply on who and how secondary services send command messages to primary services. |
| Link | Linking is a method that is used by the service owner to integrate with a secondary service. The link is set up from one data element at the primary service to a data element in a secondary service. There is no limitation on the number of links that is setup between services and their data elements. |
| Processing Unit | Processing units are embedded into network layers. Each layer processes by updating ghost objects after a certain algorithm. Processing units can also update ghosts in different layers that may trigger processing units in another layer to be notified. |
| Synx BIOS | Name of runtime operating system for bijective network system and this invention. The operating system contains processing units in each layer and a data category matrix which defines a command structure for connected endpoints/agents to send configuration commands to the BIOS. |
| Real Time Web | An internet concept a la World Wide Web, with use of bidirectional linking technology that includes IoT/IoE. Compared to WWW that links to pictures , text and videos. |
| Morphing | Morphing is a form of data transformation when an endpoint/agent is connected to a secondary service. This can be a passive or active endpoint that gets assimilated by the secondary service and adapts data structure and intelligence of that secondary service. The method is used by an endpoint-like sensor that has been pre arranged to connect against a primary service, but needs to adapt to the secondary service data structure and intelligence. |
| Triplet | Semantic Web triplet is a notation form that structures the service description into subject, predicate and object model. A bijective service is using triplet to describe the service in the network linking path. Subject contains description, command and data schema of the service, predicate and predicate noun contains internal service logic and/or external software agent and the object is the reference to a ghost which can be an endpoint/agent or a secondary service. |
| Endpoint | “Endpoint” can be any edge, sensor, agent, client or server that is connected to a service URL. Endpoint connects against a ghost that is representing the endpoint in the network. |
| Software Agent | Software agent is a client program that connects to a primary Service and becomes the main application. The software agent operates in the application layer where its main role is to manage incoming command schema messages from secondary services that have an active link. |
| Linking path | In a bijective network the linking path is the linking value chain between two active endpoints. |
| Synx C-DNS | A client domain name system for setting up and mapping IP addresses to clients that has services, subdomain and root domains. This is a client DNS system that is part of the Synx BIOS (Synx Cat) installed for each root domain. |
| Data | Data in a bijective network is real time data that has not been persisted by the network before redistribution. Based on how the bijective network has been configured the data is valid following certain rules of distribution. Each network layer may distribute a variety of contexts of the data. |
| Information | Historical data. Been persisted and structured before redistribution. |
| Gateway | Gateway is an endpoint type which implies that the real endpoint is beyond the horizon of the TCP/bijective network address space. Wifi gateway or network routing does not count since it contains an IP address and is part of the TCP network. However, wireless sensor networks like Lora, Dash7, Zigbee etc. where the gateway transits into proprietary carrier of data can be defined as a Gateway. Gateways and network resources in extended none TCP/Bijective networks can be virtualized like passive bijective networks and participate in the network linking path and ecosystem. |
| Passive Object (Passive network resource) | Passive object or passive endpoint is a virtual or physical object that doesn't contain network connectivity capabilities. Typically a physical object that is not able to set up a communication and does not contain electronic or digital programs. Examples of passive objects can be a soda can, a window, an undefined object, a meteorite etc. anything that can be “identified” contextually which again will cause data to be generated based on service context in the linking value chain. |
| Active Object (Active network resource) | Active object is an object or endpoint that is connected to a primary or secondary service. An active object can also be an object that disconnects after transmitting. Like a http client that makes a POST/GET request and closes the connection after requesting. In a bijective network these types of objects (clients) are defined as active since their ghosts represent them in the network. |
| Synx Cat | Is a command matrix table that contains an overview of command description on Synx BIOS. Each command and parameters is organized into Synx Categories. Each network layer can access selected Synx Cat commands based on which layer and role they like to operate. |
| Data Layer | Data layer operates on endpoint data and distributes p2p data between endpoint ghosts. The layer is the highest layer in a bijective network and processing units is updating connection ghost and arrange data channels against endpoint/agents |
| Application Layer | Data in this layer is related to service configurations like managing the service linking and ghost allocation |
| System Layer | Data in this layer is related to security like ownership control, authentication and identification |
| Network Layer | Data in this layer is related to network resources, dns and backup of graph databases for restore of the network.. |
| Private Network | Private bijective network is a network where all domains and services are controlled by one entity or person. Also services can be private, public or protected. Public service can create links to secondary services in another root domain. Protected is services that are hidden and not available to search engines. |
| Channel | Endpoint/agent that is connected to a service where the service has enabled for channel connection allows the endpoint to merge multiple services in the connection point. The endpoint/agent is then allowed to receive data from many different services on a single connection. Each of the services that is added to the channel may have different data schemas and linking paths. Rules regarding data access still apply like normal. |
| Predicate | Part of the semantic triplet that defines the logic. In a bijective system the predicate operates on the linked data from a secondary service and transforms the data to fit the local data schema of the primary service. Local ghost (endpoint) that belongs to the primary service is then receiving data according to the local data schema even if the original data is coming from a secondary service. The predicate acts on the data before it is distributed to local endpoints and services with an active link. |
| Predicate noun | Part of the semantic triplet that defines the logic. In a bijective system the predicate noun operates on the linked data from a secondary service and transforms the data to fit the data schema of the external service that has an active link. Local ghost (endpoint) that belongs to the primary service is then receiving data according to the local data schema even if the original data is coming from a secondary service. The predicate noun acts on the data after it is distributed to local endpoints but before service with an active link receives the data . |

### Summary of the Invention

#### The Real-Time Web Framework: An Overview

The Real-Time Web framework introduces several key innovations, including real-time data transport, extreme scalability, data decoupling, and total interoperability. These features significantly improve upon traditional Internet of Everything (IoE) systems.

**Main Goal:** The primary aim of this invention is to establish an intelligent connection point for any endpoint or agent on the network, regardless of whether it represents a human-like application or an artificial intelligent robot. Unlike the traditional request-response model, communication in this system is based on events and data changes routed into unique channels, each represented by its own Uniform Resource Identifier (URI).

**Innovative Methods and Concepts:** This innovation presents new methods and concepts that must be understood to fully grasp the architecture and how to apply it when creating various services. Here are some key concepts:

**Data vs. Information:** Traditional solution architectures and digital computing systems are based on information retrieval, where data is stored in silos or databases to be structured and retrieved upon request. This innovation, however, separates data from the network model, focusing on efficient machine-to-machine data sharing. Machines can process data much faster than humans and do not need to structure data into information (historical data) to operate.

While some data needs to be persisted, such as network environments, identity systems, DNS lookups, data model schemas, and service descriptions, this does not affect data distribution between endpoints. The bijective network system processes each network layer independently, allowing changes that can affect specific connection points differently. The bijective network system distinguishes between data and information in building solution architectures for digital systems.

**Data Morphing:** Data morphing allows the data model or service assimilation to change at runtime for each endpoint. Unlike traditional information systems, where clients follow a fixed data model or communication protocol, data morphing enables any client to connect and dynamically update intelligence that can transform data differently. This approach does not rely on pre-programmed code but on the attributes or properties of the client which is semantically described in the application layer, limiting data access based on ownership and client-specific permissions.

**Network Ghosts:** The invention introduces "ghosts" into the network layers. A ghost is an in-memory object representing a connection point and operating in multiple layers concurrently. When data is sent from Agent A to Agent B (two endpoints), it is routed directly to Agent B. The ghost represents the physical endpoint, making it addressable by the routing method without session handling or middleware. It also notifies the network BIOS of interrupts and system events in various network layers and acts as a proxy for the URI, channeling data from various sources to unique endpoints.

**Embedded BIOS:** The runtime basic-input-output-system (BIOS) is embedded into the network stack. Traditionally, the network stack is installed on a server/client with operating systems like Linux, Unix, DOS, or iOS. With the BIOS being multilayered, data from applications located on different IP addresses (servers/clients) can be distributed. For example, if a mobile application’s source code is stored in Dropbox, a client connecting to a service (ghost) can fetch the source code from Dropbox and run it on the client itself. An autonomous AI service can create the application at runtime once the client connects to its ghost. The ghost operates independently of IP address locations, allowing the client endpoint to be powered by a variety of services created at runtime by a machine. After the connection is closed, the uniquely created application and runtime ghost allocation cease to exist.

These methods are fundamental discoveries that are part of the invention, creating a heterogeneous machine network that offers a dynamic environment to create and deploy new services to any endpoint or agent. This system establishes heterogeneous communication without relying on pre-programmed codes, middleware, or server/database deployment.

## 6. Brief Description of the Drawings

**Figure X:** Shows the four layer system with ghost type in each layer and processing units. The ghost has different purposes in each layer and are labeled C, T, P and A to distinguish them in a shared memory space. The processing units are embedded runtime programs that execute based on clear defined roles in each layer. The processing units can also be neural nets with different algorithms associated with them based on the role and work tasks. The network layer operates with persistence storage to keep “anti” objects in a graph database for retrieval during power off or system reboots.

Roles for PU in each layer

**Figure X:** Shows arrows that illustrate updates and events in each layer. The arrow indicates that processing units get notified in each layer. See chapter data flow for more details. Processing units in each layer can “jump” on layer up and object notification can trigger work tasks to PU below their layer.

**Figure X:** Shows a semantic triplet notation. Subject-Predicate-Object model that is used to describe each service in the network space. Predicates and predicate neurons are supported. The subject contains description of data schema and command schemas. The object represents the primary physical object instance that gets assimilated by this service.

**Figure X:** Illustrate two services Coffee Machine Sensor and CoffeeService Application. From a consumer perspective known by its URI (URL) domain name and the linking relationship where the application is linking to the sensor. Each service has a data schema and a semantic triplet associated with it. The Command schema is not presented in this figure. In the notation table each one of the services has one predicate associated with it. The App has “order coffee” and the sensor has “make coffee”.

**Figure X:** shows two services and the linking relationship. The App is linking to the sensor. Each of the services is represented by a URL (URI). The data flows in the opposite direction of the linking.

**Figure X:** show two endpoints connected to their primary ghost. The ghost represents the endpoint and is addressable by the network bios. Each endpoint has their own unique multilayer ghost. The ghost can change ownership and data. If both ghosts belong to the same primary service the data are shared among them per default. If the ghost belongs to different services and there is a linking relationship between them, data is shared only if both ghosts share the same ownership.

**The figure X:** shows a practical service description and data schema of a service and linking to another service description. This is how it may look like for the user when setting up a new service. The semantics are autogenerated by the system and not needed to be learned by the user. Developers that creates the services can configure and change the description by issue commands to the Synx BIOS using a batch terminal or create a program that perform various Synx Cat.

**Figure X:** shows a more complex linking topology where 6 services are linked together. The Nornir Radio service is used by Shoe, Lamp, Chair and Bowl service. Which again is linked by the Living Room App service. This illustrates that the Radio sensor components are used in various products. The Living Room App gets data in various contexts. After the services have been set up, the actual data goes from a specific sensor to a specific app instance owned by the same user. This allows the service provider to scale their system without managing sessions, servers and deployments. Any changes to the services can be done remotely against the Synx BIOS and the change will take place instantly.

**Figure X:** shows overview of the four concurrent network layers. The ghost is represented for each layer (C, T, P and A) and each layer has processing units associated with work load that is processed in the same shared memory as the ghosts data. Mostly for fast performance of the Synx Cat functions. See Synx Cat matrix to get an overview of tasks that are performed. Each layer has different roles and access rights and based on the access rights allows execution of Synx commands to reconfigure the network settings.

The invention is a new network operating system that allows the network to be decentralized  and that can scale heterogeneously. The distribution is organized using links and the service description follows Semantic Web principles on the subject-predicate-object model (triplets).

The invention introduces use of a ghost that allows for bijective communication between an endpoint / agent and its ghost. The ghost acts as a multilayer proxy for the endpoint/agent.

The operating system contains processing units in each network layer with different roles. Each layer has strict access rights depending on the “user/entity” and his role in the network.

### Network Layer

**Figure X:** The network Layer, the lowest layer that consists of a Synx Cat network interface for root domain owners that can execute commands related to this layer. Typical Client C-DNS service may act as an application that provides a graphical user interface to configure network resources according to its own preferences. In this layer the main role of the layer is to persist “anti” objects into the database for retrieval when the network system breaks down or has a power off situation where a restore or reboot are in order. The “anti”-objects is a clone of the Ghosts and contain information about the triplets, ownership and linking relationship. By replicating the in memory ghosts to “anti”-objects the whole system can be restored if incidence occurs. The database may also contain semantic description and information that is not presented in the ghosts but is essential to describe the service for humans. The information may also be used in indexing search engines and services related to information lookup.

Data in memory ghosts can be configured to be serialized/deserialized. This is necessary in heterogeneous systems where the data can be shared across IP addresses and domains. The serialization is optional in all layers of the network stack.

### System Layer

**Figure X:** Shows the system layer. This layer has the role of security and access control. Synx Cat related to transfer ownership on ghost, services and domain is accessible for this user. Default the network has standard 2 factor authentication token for identifying users based on username and password. However the user token can be mapped with external identity and management systems (IAM). The External IAM system then manages the authentication and creates an interface with Synx Cat with this system layer. The Synx BIOS supports dynamic tokens and refresh token updates on the endpoints. Additionally to access tokens the endpoint itself has an object ID which can be represented by an external token or ID for identification. This is normally used when an endpoint is morphed with a secondary service ghost.

### Application Layer

**Figure X:** shows the application layer. In this layer the role in this layer is to preserve the linking paths and relationship between the services. This layer also manages access to service updates and configurations done by service owners. To access this layer Synx Cat options the user can use Synx terminal access to the system layer (lower layers have access to higher layers, but higher layers do not have access to lower layers ). Or developing a software agent to support the network service. Services that have an active command schema, and like to manage remote invocation on the service, can set up a software agent and connect using the service owner credentials. The software agent will then get incoming command messages from the network and can customize the commands and parameters using the command schema update. Else the software agent can be used to log data from the network.

Notis that the software agent is a stand alone application. It does not require a webserver og deployment. The software agent could be any client or endpoint and can disconnect/connect at will. The only difference between a client and a software agent is that the owner of the service is logged in. The Synx BIOS will then automatically activate access to additional layers and enable the client to perform more advanced Synx Cat commands to configure the network to suit the user needs.

### Data Layer

**Figure X:** Shows the data layer. This layer manages the data distribution between endpoints. The data is routed between C-1 and C-2 and is not persisted by the network other than the state of the last message is being replaced by the new in the data element that is sent to the receiver part. If there is no linking in the application layer, no data is transferred. If the client belongs to the same primary service the update is shared among all active clients that is connected per default. The service owner can configure how the data is being distributed by issue Synx Cat commands. Example the endpoints dont get updates on each other's data. Only endpoints owned by the service owner may get this.

The service owner also controls the connection of the endpoint. If one endpoint that is active and the primary service owner wants to kill the connection, he can do so by issuing a Synx Cat command and killing the active connection remotely for the endpoint. The Synx BIOS will then execute and identify the ghost of the endpoint and break the connectivity for that specific ghost. The endpoint will get a broken connection and an error exception. The endpoint may reconnect and do the authentication process again. It is also possible to permanently disable the endpoint to get any data permanently. For an overview of the most basic Synx Cat command see the Synx Cat Matrix table.

**Figure X:** shows Client A that connects to its primary service URL and Client B connects to his primary service2. Its illustrates the concept of a bijective network where the endpoint (client) gets both data and intelligence from the network service. P2p communication is done by each endpoint sending and receiving data against their connection point.

### Morph a ghost

**Figure X:** Shows the cloud view without the network layers. Clients connect against their primary service and become an object as part of the subject-predicate-object model. Client has an open channel and can send or receive data to its primary service. Service B has an active link to Service A. This means that data flows in the opposite direction from A to B. Since there is an active link the data only flows when the same owner is represented on both sides of the network.

**FigureX:** Same drawing as previous figure. Showing that the service is represented by a GHOST which is unique to the client. Channels are established by the ghost acting as a proxy for the client. On disconnection the ghost can still be active, but the ghost can also be deleted or time out. This is configured by the service owner using Synx Cat command against the BIOS settings.

**Figure X** shows Software Agent A connected to Service A and Logg Server B connected to Service B. If a connection is authenticated to be the owner of the service, a copy of the data ( in data layer ) will be part of the channel. The ghost that represents the connection is a T ghost and this grants access to Synx Cat commands related to service execution and configurations. Se Synx Cat matrix for more detailed information. When two services have an active link the command schema of the target service, in this case the Service A, can extend and define his command options. Allowing the Service B at the Application Layer to send command messages to Service A. To handle incoming and customized command messages, a software agent is connected. Data associated with the command schema will be part of the communication channel.

**Figure X:** Shows a sensor and gateway data with radio transit through a gateway. This can be a wireless sensor using any wireless radio transmission and a gateway that is part of the IP network. Service C is the primary gateway service. Since the sensor is not part of the IP network (internet) it is represented by service D in the network. The data schema for the sensor is defined and is linked to by Service A and Service B.

The sensor does not have direct access to its primary ghost, but the ghost is allocated in memory and is morphed as part of the linking value chain. This also means that ownership of the sensor indicates which client gets the data. Is possible to move overship on objects that are not active in the network. Also imaginary and purly contextual objects are supported by the network.

**Figure X:** Shows a typical IoE system and how it can be set up using the Synx BIOS C-DNS tool.

- Gateway provider (Service C) is setting up an agent that offers to send data to the sensor endpoint following the wireless transmission standard described in his command schema description
- Gateway provider (Service C) is setting up a data schema that offers data from his gateways. This can typically be a payload string sent by sensors and objects that is detected by the gateway.
- Robot provider (Service D) is setting up an agent that offers to send data to the robot arm.
- Robot provider (Service D) is setting up a data schema that offers data from robots arms. This is typical status and feedback sensor feedback from a robot arm.
- Application provider (Service A and B) is setting up a data schema for his primary application.

Now building the system and integration is done using links. The linking is done against the data source based on context. The application provider is linking to the robot arm to gain access to data from the robot's arms. The data elements that are available are described in the robot arm data schema as part of the service description and semantic statement. The robot arm provider links to the gateway provider (Infrastructure).

The linking also enables the command schema to be active on the application layer. The direction of the data when sending data in the command schema is opposite to the data schema. The command schema is used to execute messages to actuators. Typical to remote control the robot arm. Hence the use of a software agent which is an extension to the predicate but works in the opposite direction and is only available for the service owners (application layer access). Execution of command schema only works when there is a direct link. So Service A can execute a command message to Service D, but is not possible to execute a command message to Service C since there is not a direct link between them.

Now once the system has been set up there is no data flowing in the network yet. Even if the data is sent from the robot arm there is no data transmitted unless the ownership of a specific robot arm and application is authenticated to be the same entity or a person. This is how the network scales. Now thousands of robot arms can be produced and millions of applications can be locally active. But only when the vendor transfers ownership of a robot arm to a specific user and the same user is logged into his application, then data flows through the network. Many users can access data from a specific robot arm. Or many robot arms can send data to a specific user. It all depends on which ghost belongs to the user or not.

In the application layer the service provider gets a copy of the message that follows the context of their local application.

So if a robot arm is sending data to a specific user using the Application. The gateway provider that is part of the value chain does not know anything about the user and data he gets since the data can be morphed and transformed differently in the network. However, the gateway provider can get a copy of the data when data is passing his gateway. And this data can be logged following his local data schema.

**Figure X:** Shows a complex linking data value chain. The data flow is indicated by the arrow, where data flows from A to B. The configuration can vary from root domain owner to root domain owner on how he likes to set up his network. But default the data is traversed through the linking path and in each step the predicate is executed and data being transformed following the linking path. If the linking path has several route options between A and B, the smallest route with fewer steps will be default. Now this is configurable. By issuing a Synx command, it will be possible to accept all routes. This will result in multiple messages from the same sender. This configuration is often used when a network is used as a neural net and where the service is nodes in the net. For private network like “intranet” where all service is owned by one person or entity. The configuration of the linking path can be to move the predicate to the endpoint ghost for execution. This allows data from the source be executed directly at the receiver ghost where all transformation (predicates) is executed sequentially in the same memory entity that has the data. So  instead of sending data around in the network. This configuration will save network lag and execution time.

**Figure X:** shows interlinking between two root domains (two private networks). Private network Service F is linking to another private network Service D. Synx BIOS allows setting service to be private or public. When a service is set private it is not available for external services from other root domains to activate the link. Anyone can link, but their link is inactive meaning there is no data that will be distributed in the linking path. If the service is set to be public, other services from other root domains can create an active link.

The service can also be set to protective mode. This means that the service does not allow active links by anyone.

**Figure X:** Show detailed description on how the semantic triplet is linked. Each ghost is organized as triplets with reference URI to persisted service information which is persisted outside the network layers and processes. In a linking path the predicates, if presented, are transforming the data to fit the local data model. This is one of the rules of creating a service in a network. To achieve a completed linking path the target subject and its data model is transformed to fit the local data schema from the one who made the link. Doing so, any service that is doing the linking will always be intact and a complex linking path can be sustained throughout the value chain. Each service role is to transform the target data schema to fit the local data schema. The local data schema is adopted by any client endpoint that is connected to his primary service. Once the linking relationship has been established data may travers following the linking path and be transformed by each service. The linking relationship and service statements are configured and processed in the application layer. Data flows when two endpoints have the same owner at both ends of the linking path and data is transferred p2p between the endpoints, operated by the data layer. If the application layer changes or is reconfigured, this will affect the data layer and ghost update concurrently.

### Special feature section

#### Configuration of multiple services in one channel

Synx BIOS supports multiple services in one channel connection. This means that an active connection against a primary service can be extended in the same connection. In the same active connection, commands to the Synx BIOS can enable to merge ghosts and route merge multiple channels into one. This allows the client/endpoint to receive data from multiple services in one connection.

The configuration of service, channel, links and ghosts can be done dynamically and concurrent. The data layer will immediately be affected by the new configuration, but the connection point is the same and this change in data transformation and structure dont affect the connection point session.

### Authentication and Identification Management (AIM)

In any digital system built for humans who are unreliable creatures that are struggling with moral issues, security becomes a standard challenge to solve and needs to become part of the architecture. This invention is primarily a system designed for machines that don't have moral issues but like to be as efficient as possible. Adding security processes will therefore make the invention less appealing for machines and artificial intelligent systems. This mainly has to do with the fact that adding security will slower down the operations and communication. Any add ons to encryption, authentication, sign-in and logging only make the network slower.

The Real Time Web is designed to be heterogeneous and since humans don't trust other humans the security regarding authentication and identification management is offered as a service where any external proprietary AIM systems can be integrated with the system layer. The Synx BIOS system layer allows tokens to be mapped with external AIM systems. There are several Synx Cat options regarding setting up the security layer.

In practice the endpoint or client that wants to connect to the network will need to be authenticated by an external AIM system, then get an access token from the AIM system to apply when sending data to a RTW service. The access token can be dynamically updated and used against the RTW service.

### Synx BIOS

Thye bijective network system is a closed distributed multiagent system. Each root domain name that is mapped against one or multiple IP addresses has an installation of a Synx BIOS instance in the network stack independent of the type of hardware and operating system that is controlling it. Synx BIOS is a closed decentralized system where each root domain controls the network resources belonging to the root domain. Each installation has four network layers: data, application, system and network. Each layer has a dedicated access level so user management is done by the root domain owner giving his ownership of subdomains to service providers so they can control and execute Synx BIOS commands to configure his own network resources associated with his sub domains and services.

After installation each network layer has processing units that operate on shared memory space where data in four layers has different responsibilities on the data based on what category they belong to. Each layer also has processing units that execute programs on ghosts following an algorithm that  affects how ghost objects are consumed and created.

Synx BIOS supports linking with other Synx BIOS installations. This is how the heterogeneous network operates. Data from one root domain service can link to services belonging to another root domain. So communication between two endpoints that is associated with service URI from different root domains may send and receive data and have their data morphed by the linking path.

The Synx BIOS can be addressed by specifying Synx Cat number. Which is a number of command options and parameters associated with it. In the table below an example of a command option is listed based on Synx Cat number.

### Synx BIOS command overview

| Synx CAT | Description | Lvl |
|---|---|---|
| 0 | Send cmd: Handles incoming cmd messages to service owner. | 4 |
| 1 | Send Data: Handles incoming string from endpoint | 4 |
| 2 | Set Public Ghost: Make the ghost on the endpoint public and morphable. | 3 |
| 3 | Set MapID: make Object ID use ID specified in mapID. | 2 |
| 4 | Data channel: Establish data channel for endpoint | 4 |
| 5 | Dynamic channel: Establish a dynamic channel and Channel merge | 4 |
| 6 | Create Service: This command create service | 3 |
| 7 | Allocate and add ghost: This command allocates and add ghost on service URI. | 3 |
| 8 | Create link: This command creates a link between two services by the primary service | 3 |
| 9 | Create User: This command create new user | 2 |
| 10 | Update service: This command update service with new semantics | 3 |
| 11 | Remove Ghost: Removed the ghost(s) on a service | 3 |
| 13 | List active connections: List active connection on synx cat 4 and synx cat 5 for this ownere | 4 |
| 16 | Change owner: Change owner on ghost | 2 |
| 18 | List ghosts in limbo: List ghosts that are in limbo stage. (between ownership) | 2 |
| 19 | Set owner: sets ownership on ghost | 2 |
| 20 | Get resources: Gets network resources on a user. Typical ghost, service and domain resources. | 3,2 |
| 21 | Ownership rejected: The ownership of ghosts is denied. | 2 |
| 22 | Get domain: Gets domain resources for user | 3 |
| 23 | Set token: Sets new token on user | 2 |
| 24 | Kill connection: Kill the endpoint connection for specific connection | 2,4 |
| 25 | Add morphed ghost: This add ghost to secondary service | 3,4 |
| 26 | Remove morphed ghost: This removes ghost from secondary service | 3,4 |
| 27 | Read access: give read access to user | 2,4 |
| 28 | Remove read access: remove read access for user | 2,4 |
| 29 | Delete user: This command delete the user | 1,2,3,4 |
| 30 | Get subdomains: This return the subdomains info for user | 3 |
| 31 | add/remove domains: add or remove domains for user | 2,3 |
| 32 | Ghost resources: This return status on specific ghost | 2,4 |
| 33 | Set domain: activate the domain | 3 |
| 34 | Change owner on subdomain | 2 |
| 51 | Activate log: activate log for service on synx cat 0. | 2,3,4 |

**Synx BIOS matrix table:**

The table shows an overview of synx BIOS operations (Synx cat) and tasks and which layer is responsible for each of the tasks. Each command may have a set of parameters associated with the command. The lvl number indicates the layer where operation/process is executed in the network stack.

Number of commands and operations may vary based on which version is used. The table above shows only the most used commands.

Block diagram showing modules that build up the RTW network.

## 7. Detailed Description of the Invention

The invention is a communication and architecture design that can describe a technology neutral network system on how data can be sent and received by an endpoint connecting to a dynamical network that continuously evolves. The network can uniquely change and adapt to new intelligence and data structures that are used to power the endpoint with data and intelligence.

The invention enables a new Real Time Web concept where physical objects can become online resources and participate in software creation and innovation. Different services can be interlinked and be integrated to share data and intelligence in a way where ownership of the data and application is kept intact across domains and geographical locations.The invention suggests an open architecture where multiple entities, people or intelligent machines can collaborate in creating digital systems.

Compared to the existing system the invention offers a series of benefits. Here is a list of some benefits that the invention enables compared to traditional network systems..

- The overall network is a collective collaborative system where intelligence evolves by adding more services to the open network.
- The endpoint ( connecting object ) gets data and intelligence from the network primary service. This allows “dumb” endpoints to connect without preprogramming and deployment.
- Connecting to the network is protocol independent. Even against the same service URL, endpoints can use different connection methods. The communication method can change at runtime without the established connection point needing to terminate and reconnect. On connection each endpoint is connected against their unique ghost, changing protocol or data format does not affect the content of the data or intelligence that is morphing the data independently. The connection point can be terminated remotely by the service owner using a remote agent.
- Service developers can integrate with external services using links. Building a complex IT system or IoE runtime system can be done using links. Adding external service and their intelligence, allow collaboration across domains and expertise. New services can be created that powers the endpoint with new features.
- Different network layers segregate the vertical value chain and allow access control on data in each network layer. Consumers can control endpoint data directly from the source and control how the data from the source can be distributed in the open network. Service creators can control the application logic and can freely integrate using links with other application logics (services). Complex systems can be built using links and create horizontal value chains combining intelligence into collective intelligence. The lower network layers contribute to security and redundancy of the overall value chains and network infrastructure resources.
- The network organizes embedded processing units in each network layer into a runtime BIOS (operating system) with shared memory space where the processing units perform tasks on the data. Each network layer is designed to be independent and is administered by defined roles. The lvl 4 data layer is responsible for p2p data distribution. Data in this layer actively uses a ghost (c-object) which acts as a proxy for the endpoint/agent that made the connection. By updating the ghost the data is channeled to the endpoint/agent. The application layer lvl 3 is responsible for structure the service semantics and links. To configure services and links, the authentication of the endpoint /agent needs to match the service owners credentials. Changes can be made to the application layer asynchronous and independent from the data layer. Changes will instantly affect the data layer accordingly. The lvl 2 system layer is responsible for security and access control across layers. The system layer also has functionalities that allows the network to use external authentication management systems and dynamic token/user updates. The lvl 1 network layer is responsible for IP mapping, domain name service, restore and backup of the system to make the network redundant to incident and power loss. In total the four network layers build up one private installation of the bijective network. By mapping up multiple IP addresses to other private root domain installations, the network can link across domains and network installations and the network becomes a heterogeneous network with local control where each installation is controlled by entities/persons on each installation.

### Consumer Use case with Data Morphing

In BiNS data morphing is an important feature. An IOT device may be manufactured with specific properties. Like a temperature sensor may have properties that send temperature readings in celsius into the primary network service. Now let's assume the specific device has been purchased by a consumer. This consumer is searching the internet and finds out that this device can be used to turn on/off the light when reaching 20 degrees. The consumer can add the device to the secondary service provider. This grants him access to the data from the primary service. The operation is that the secondary service is morphing the device (device from primary service) into his secondary service. This results in that the device instance data is part of the user's ghost channel in the secondary service. Data is then being morphed following the linking path and transformed into the data schema of the secondary service.

The channel is operational until the consumer decides that he doesn't want to use the secondary service anymore and the data to the secondary service will stop receiving data owned by this consumer. Also the service provider can issue commands to the consumer app (endpoint) and stop his access to get data from his service. Both the service provider and consumer have access to different layers in the network stack and can control their own network resources that belong to them.

### Ghost

Ghosts operate in multiple layers and keep different states in each layer. Ghosts represent endpoints that make the connection. The ghost is accessible by processing units in each layer that can read, write and be notified on changes concurrently in each layer. Each layer operates on the ghost independently. Some processing units may update ghosts that affect it in a higher layer.

### Processing units (PU)

PU operates in each layer with a specific role of operation. The data layer manages the distribution of data into c-ghost that immediately forwards the message to the active client it represents. Or on incoming data immediately update the ghost with the data. Number of processing units can be adjusted to keep up with the data volume and bandwidth.

The processing units can be dynamically updated by a ghost. This can be done concurrently by PU at the lower layer. EX. By issuing a Synx BIOS command the T-ghost may be updated on data schema by a PU at lvl 3. This again may change C-object at lvl 4 and the endpoint now receives new data structure in the same active connection. The system is not based on pre-programmable data models. The service semantics provide a necessary definition for the system to understand the limitations and behavior of the endpoint that it connected.

The communications are concurrent and asynchronous. The commands and process units that operate on the data execute directly on the ghosts. The communications based on the synx category are independent for each network layer. The network distribution is event driven between pairs. The communication is initialized by the endpoint or agent on connection. The connection is always established against unique ghosts (proxies) that represent the endpoint/agent. The network layers and processing units are designed for high performance and in memory processing. The ghost in the data layer (c-ghost) acts as a data transport and channels data directly with the endpoint/agent regardless of protocol that is chosen by the endpoint/client on request.

### The Real Time Web architecture in figureX

Contains.

- Network layers with ghost objects and processing units in each layer
- Client domain name service that is used to setup the domain and service
- Linking topology
- Synx matrix
- Subject, predicate object model for bijective network. Differ from the traditional request response model.  Here the relationship reflects how the ghost is allocated in the memory. And this can be changed at runtime. Affecting data transformation.
- Anti Objects (a objects) persist the dns and semantics. Restore into memory when power off.
- Ghost
- Sync pass and authentication / identification
- Command schema and data schema
- Data layer topology
- Application layer topology
- System layer topology
- AI service autonomy: Methods for data morphing and network ghosts
- Real-Time Data Transport: Methods and mechanisms for ensuring minimal latency.
- Scalability Features: Techniques for supporting a large number of devices.
- Data Decoupling: Strategies for separating data sources from applications.
- Interoperability: Use of standardized protocols and interfaces for seamless integration.
- Root domene og link mellom root

## 8. Claims

- P2p communication using bijective proxies that operate in multiple network layers to segregate access control in the vertical value chain.
- Use of runtime bios as network stack to replace the need of middleware and server side session and authentication systems.
- Network independent of communication protocols and technologies. System where endpoint, agents and clients don't need to install libraries or pr programmable code to operate and become part of the network.
- Network that offers ownership control and rights to person or entities in each layer. Data can be controlled by users independently of services that are used on the data source.

## 9. Abstract of the Disclosure

## 10. Drawings

Include labeled figures as described in the brief description of the drawings section.

## 11. Sequence Listing

Not applicable for this invention.

## Checklist (forgot something?)

**How to connect:**

The network communication is divided into four layers. Data, Application, system and network layer. The network adopts TCP/IP and is backward compatible. Some Synx Category is added to the header section to differentiate the communication from default behavior. By using a Synx Cat

**How can two or more endpoints (agents) communicate with each other ?**

Each service can allocate many ghosts. This allows many agents or endpoints to be connected to the network and get data from the service. When an endpoint/agent connects to a service it inherits the data schemas of that service. If the authentication matches the ghostid the endpoint is a primary to this service. Endpoint/agent that is not primary to a service becomes secondary to the service. This means that the endpoint is morphed and the primary service of the endpoint/agent is updating the secondary service if a linking path is present.

**Who owns the data**

The bijective network operates by distributing data among endpoints/agents. But only when the same owner is at both ends of the network the data is distributed. If the network linking path is complex, the data may be transformed many times before it reaches the target endpoint. Still the data arrive transformed at the endpoint if the owner is the same.

**Primary service**

Alternative, since the consumer is using a service created by someone else, the service provider has been granted access to his data. Now, lets say 100 consumers are using the same primary service, now each endpoint belonging to this primary service can have data from the other endpoints. So 100 consumers can share data with each other within the same primary service.

**Secondary service**

**Who owns the application logic?**

The service owner owns his own application logic (agent logic).

**Who owns the network resources?**

The network resource (client) owned by the consumer or end user.

**Who owns and controls the relationship?**

The linking is done against another service and is controlled by the one who do the link

**How do we decide on the integration? language ? protocol to use?**

The integration is done using links and the language can be any programming language. No additional library is needed and native methods can be used. HTTPS, Websocket  works and other protocols can be supported. The main thing is that the ghost is the same and that is a one 2 one relationship between the end point (client instance) and his ghost id.

The data schema is acting like the protocol of the key value pair of the service and this information is available in the micropage section. The command schema describes the service command and parameters that are managed by the service provider.

**What are we communicating? Data, text, subject?**

RTW communicates contextual data and supports the ACII table.

**Does the data that we communicate mean something?**

It is up to the service provider to define the context of the data. And what morphing is done on it.

**Should we do something when receiving the data?**

The endpoint that receives the data will have its data received in his local context and structure. The data feed can be used in application, programs or whatever the service has designed to use the data on.

**Can I reshare the data?**

Yes, the data that one person collects from the network belongs to him.

**Am I allowed to change the data?**

By setting up a service and link to other services you are allowed to change the data. If you are a consumer at the endpoint you also allow them to change the data. The reason is that you only get access to your own data in the first place. When the service providers perform morphing of ghosts they basically allow your data to be transformed to fit their local data model and use their local logic on the data.

**What happens if I use the data to my benefit?**

Is your data in the first place?  So no problem. Based on morphing of ghosts, this exercise is a method to grant you continuous access to data feed in the channel. Once this has been performed by the service providers (need your approval) you will get data that is targeting you specifically. The data belongs to you and becomes your responsibility.

**Can I make money on my data?**

Yes, You can tag your data (ghostid) with a price tag. There will be services that monetize who is consuming your data in the network in various contexts. You can make money on subscriptions against your data. .

**If I change the data, who owns the data?**

You will own the data  before and after the morphing. However, the logic behind the morphing belongs to the service provider. So if he sets a price on this service your cost just goes up. The network is like a marketplace that orchestrates business value chains between data owners, data logic providers and consumers. The linking path and orchestration can be complexed.

**Can I control robots with data?**

Yes, data is the life force of a robot. It is needed to make the robot autonomous. .

**AI driven service using this data?**

Yes, data from the network is running the models and continuous streams of data to operate the AI models.

**Can I decide who gets access to my data?**

Yes, it is possible to give “read” access to your own data to another person. This is part of the Synx BIOS command option.

**Can I change the arrangement of my integration anytime?**

Yes you can alter, add or remove links at runtime which immediately affect your service. Endpoints that are connected keep connected and get the change in the same ongoing session.

**How long is the arrangement going to last?**

Has long as the linking is active

**Can I transfer my data and ownership to another person?**

Yes you can transfer your ghostid to another person. This person now gets all data in this channel.

**Can I grant others read access to my data?**

Yes, by issue a synx BIOS command you can give read access to another user on your ghostid

**Can data be persisted even if it is not mine?**

Yes, any data that you get from your feed has been granted access and belongs to you. It's up to the agreement with your service provider that determines what you can use the data for. Special agreements , regulations etc, this is stated by your service provider..
