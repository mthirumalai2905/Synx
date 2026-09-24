# About Synx

Synx BIOS was first developed and introduced in 2008 by the company Nornir. Since then a lot of

Synx BIOS was designed to address the shortcomings of the way the web is built today. It represents a radical departure from conventional methods, while still being completely backwards- compatible with the World Wide Web linking topology. In fact, it employs standard web technology to create web-based applications, but the management of network resources like physical things and integration of IoE (internet of everything) into these applications is substantially different. Synx BIOS was designed to embody several key principles: real-time data transport, extreme scalability, data decoupling, event driven distribution and total interoperability.

## HELLO WORLD

In this tutorial we are going to create our first hello world morphic application.

### 1. Create a domain at cioty.com

To be able to login to domain.cioty.com one needs to register for the Real Time Web. Go to synxpass.com and register.

After you register to become a user for Real Time Web go to domain.cioty.com to require a domain. Domain.cioty.com offers a free trial so you will be able to set up a domain there by just following the instructions.

### 2. Create A morphic service

Follow the instructions to setup a morphic service with these specifications:

- Morphic service name: HelloWorld
- Morphic Schema:

```xml
<rtw>
<txt></txt>
</rtw>
```

- Command Schema: Just leave this field empty
- Connection Timeout: 120 seconds
- Num Ghosts: 5

### 3. Setting up Micropage

For the micropage, which is a public description on you service type in following:

- Title: This is a hello world demo
- Service description: This is a simple demo on sending the message “Hello World”
- Picture url: just leave blank

Then press the save button.

That's it! You have created your first morphic service.

You can check the micropage by entering your URL into a browser.

The URL is:  http://YourDomainName.cioty.com/helloworld

### Testing your hello world service

To test your morphic service you can use the command line tool curl.

Open a command line window and add following line:

```
curl -k https://YourDomainName.cioty.com/helloworld -H "Synx-Cat: 4" -d "token=enter your token here&objectID=1"
```

Replace YourDomainName with your chosen domain name. The value on the token is your own private token. For the objectID you have 5 available ghosts, just choose one for this connection.

Press enter. You will now see that the cursor is waiting for data from the network. Synx-Cat: 4 indicates that this is a HTTP channel that receives data. Since no one sends data you will not get anything yet.

Open a new terminal window and add following line:

```
curl -k https://YourDomainName.cioty.com/helloworld -H "Synx-Cat: 1" -d token=enter your token here&objectID=3&txt=Hello World"
```

Replace YourDomainName with your chosen domain name. The value of the token is your own private token. For the objectID you can choose objectID=3. Synx-Cat: 1 indicates that you are sending a data package to the network. Your element txt has been assigned the value “Hello World”.

Press enter.

In the first command line window you can now see that the connection has received “Hello World”.

### Lesson learned

- To send or receive data to and from the network you will always need your token and ObjectID to indicate which ghost you allocate.
- You can send and receive data defined by your service schema

## Setting up my first link

Based on our previous hello world demo we will in this session set up a second service and make a link between them.

To set up a second morphic service follow the hello world tutorial but with these settings:

https://YourDomainName.cioty.com/friend

- Morphic service name: Friend
- Morphic Schema:

```xml
<rtw>
<name></name>
</rtw>
```

- Command Schema: Just leave this field empty
- Connection Timeout: 120 seconds
- Num Ghosts: 5

### Setting up Micropage

For the micropage, which is a public description on you service type in following:

- Title: This is a Friend service
- Service description: This is a simple demo on sending names
- Picture url: just leave blank

Then press the save button.

You have now set up a second service. You can test it by sending and receiving data:

Send data to update Friend service:

```
curl -k https://YourDomainName.cioty.com/friend -H "Synx-Cat: 1" -d token=enter your token here&objectID=2&name=Jessica Alba"
```

Receive data channel on the Hello World service:

```
curl -k https://YourDomainName.cioty.com/friend -H "Synx-Cat: 4" -d "token=enter your token here&objectID=1"
```

You will see that hello world demo prints “Jessica Alba”

---

### Setting up links between your services

Now that you have two services let us set up a link from the hello world service.

Go to HelloWorld service schema section and update the data structure to:

```xml
<rtw>
<txt>@YourDomainName.cioty.com/friend#name@</txt>
</rtw>
```

The link is indicated by using “@” at the front and at the end of the linking path. You have now set up a link to the name element inside your friend service.

### To test the link

open two command line windows.

In the terminal window 1 type:

```
curl -k https://YourDomainName.cioty.com/friend -H "Synx-Cat: 1" -d token=enter your token here&objectID=4&name=Jessica Alba"
```

In terminal window 2 type:

```
curl -k https://YourDomainName.cioty.com/helloworld -H "Synx-Cat: 4" -d "token=enter your token here&objectID=1"
```

Hello world service now prints messages that have been sent to the friend service.

## Command Schema

In this tutorial we will be setting up a command schema. To do this exercise you will need to do the two previous exercises.

Go to the friend service (YourDomainName.cioty.com/friend) you set up in the previous session.

In the command schema section type in:

```xml
<cmd>
<action></action>
<parameter1></parameter1>
</cmd>
```

And update the service.

Make sure that previous HelloWorld service still got the link to @YourDomainName.cioty.com/friend#name@ inside the “<txt>” element.

According to Morphic Architectural Design (MAD) the part that set up the link is the only one who can send commands against the target service.

Update the micropage and describe what type of command that you service support.

Something like this:

The Friend service accepts one action and one parameter element.

Action [first_name, last_name, both_names] , this will change the output of the name element to just print forename, lastname or both. Based on the parameter is true or not.

Parameter1: [true/false] , true activate the action, false discontinue based on the action.

Ex. If you set action=last_name and parameter1=true, you will be activating that just the last name will be printed in the name element (Service Schema)

You are now ready to receive commands on your service.

### Test sending command data

Open terminal window 1 to listen:

```
curl -k https://YourDomainName.cioty.com/friend -H "Synx-Cat: 4" -d "token=enter your token here&objectID=1"
```

Open terminal window 2 to send test data:

```
curl -k https://YourDomainName.cioty.com/friend -H "Synx-Cat: 0" -d token=enter your token here&objectID=5&action=first_name&parameter1=true"
```

The Synx-cat: 0 indicates that this is a command message and it can only be performed by a service provider owner that has an active link in the opposite direction against the service schema. The command schema is not available for network resource owners (consumers).

In terminal window 1 you will now see the command message appare.

You use a command schema in a service if you want to do some action.

## Predicates

In this session we are going to learn about setting up a predicate and predicate nuon using inline script.

To be able to do this exercise you will need to have done exercise 1 (helloworld) and 2 (setting up link) in the previous section.

When you link to a service you will sometimes encounter that the schema you link to has different contextual meaning. So you will like to set up a small script that transforms the data into data that fits your local schema.

Go to your HelloWorld service and update the service schema as follows:

```xml
<rtw>
<txt>@YourDomainName.cioty.com/friend#name@</txt>
<uppercase_name></uppercase_name>
</rtw>
```

Keep the linking and add “uppercase_name”.

In the predicate section type in:

```javascript
var string = master.getValueByElement("TXT");
if(string!=null) master.updateValueOnElement("UPPERCASE_NAME",string.toUpperCase());
```

There are only two methods in the object “master” that can be used to get and update data on your service schema. That is

```javascript
master.updateValueOnElement("element_name",”string”);
master.getValueByElement("element_name");
```

THis inline script (javascript) and its master object is runned at runtime inside a memory container somewhere in the network. Using loops or any miscellaneous code is not allowed. The routine needs to be kept small. If you want to do more extensive processes on the data then you may think about using a software agent and follow a concurrent master worker pattern with direct connection against the service using websocket.

### When to use predicate and when to use predicate noun

The predicates are used to transform data into local data structure before it is sent to primary clients and secondary services that have an active link against the data structure. Predicate noun is used when the primary client gets the data first and then the script is runned just on the ones who have an active link. This means that the primary services get data like the service schema, while the secondary services with an active link may get different data which may not be specified by the primary service.

## FAQ on tutorials

**Why do I have to register for Real Time Web at synxpass.com?**

Synx HIVE is a private collective machine learning network framework that uses Synx BIOS networking kernel to secure the TCP connectivity and keep the interaction between physical network resources and their ghosts. Since a ghost operates in multiple layers in the stack to segregate the ownership of each layer, the identification and authentication of network resources is done by SynxPass. When network resources can be anything from IoT devices, chat bot, smartphone application to autonomous vehicle, and one person may have 100 devices in the network it would be impractical to have different username and password all over the network. SynxPass has been created to handle the authentication and manage all network resources per person. Part of the Morphic Architecture Design also suggests that ownership of ghosts may be moved around and this will indirectly suggest that physical devices will change ownership in the network and have dynamical read and write access based on who owns the ghost.

Is possible to replace SynxPass with a Blockchain like solution, but for now this is not supported.

**Why do I receive two messages on my client when I only send one?**

This has to do with you being the owner of the service who receives one message from ghost zero and one message from the ghost instance (objectID) you assigned in the connection header.  Normally you will give ownership of your ghosts to users of your application. The service provider will always be able to get access to primary data from his own objectID=0 even though all ghost instances have been given away. Other users that own a ghost will only get one message.

**How does inline script (predicate) work?**

Inline script is used to transform incoming data from secondary services you have an active link against. The goal is always to keep your local data structure intact so other services that may link to you don't get inconsistent data. You use inline script (javascript) to make this transformation. If you don't do anything, the data you link to will be the data you offer to others that has a link against you.

**What is the difference between a predicate and predicate noun when making an inline script?**

Predicate noun runs your inline script after your local ghost has received the message but before secondary services with an active link get the data.

**When do I use a software agent instead of an inline script?**

You are advised to use a software agent when you deal with a heavy load and computation on data and you are not the owner of the Private Synx HIVE platform. The HIVE is a decentralised event driven system and the owner of the private HIVE may add more CPU and memory into the network on demand since they have lower stack access level to configure the network. If you are a morphic service provider without root domain access you can have your hosting partner allocate more network resources to your ghosts or you can use remote software agents. Using software agents is then runned on your own hardware and you may concurrently set up agents to perform data transformation or analysis and send the result back to the network. The small footprint of the ghost makes it ideal for scaling and doing master worker patterns directly from the web.

## FAQ on curl tutorial

**What is Morphic Architecture Design (MAD) and how does this differ from Microservice Architectures?**

In MAD the data driven services are small entities that make up part of a larger collective called HIVE. The difference between a HIVE and a cloud is that a HIVE is more a neural network design than using programmable interfaces. When you create a service you basically define a morph (node) in the Morphic network (neural net). One of the key aspects of morph and its schema definition, is that the schema is dynamical. Both the Linked Data and the schema itself may change in the network and always adapt to the network habits. And this is designed in a way that the value chain and the linking path does not break.

Another difference is that there is no data in the schema on construction. All Morphic schemas do not contain data on creation. The schema is just a manifestation and is used to be transferred in the network to ghost entities. A Ghost is a memory footprint inside the communication stack. It starts to “exist” when a client that makes a connection against a URL gets identified and authenticated, and only then the ghost knows its structure and how data is going to be transformed in the network. Even on an active tcp connection the morph and the linking value chain may change, but the connection is still alive and may change the structure of the data output.

Another difference is that the ghost may handle data in the opposite direction in the linking path and support bidirectional Linked Data communication. Which is useful when the network contains actuators and autonomous processes that need to be guided or executed.

**What kind of a programming language is used to develop morphic services?**

The inline script in the Synx Domain graphical interface (domain.city.com) uses native javascript and has limited functionalities. Instead of using an inline script it is possible to just program a software agent and connect this to your ghost. Developers are free to use any programming languages. There is no additional libraries or installation needed beside native tcp (http/https/websocket) communication.

**What happens when I want to change my service schema when I have a lot of dependencies from other services?**

You can anytime change your schema structure and change links as you like. Network resources that have an active connection will get new types of data if they have the right signature and credentials that allow them to access the data.

There are no logical dependencies in the network value chain (linking path).  The consumer can anytime remove themselves and his network resources from your service. The network nature is “survival of the fittest”, services that are reliable and offer quality data also get more links and are more reused. Bad services that change structures and habits will probably not be used that much by other services. The collective network is an open ecosystem.

**Where can I store data?**

The network threatens databases like any other client or network resource. To persist data you can create a software agent that logs the data into a database. You are only allowed to store data that belongs to you. The network itself does not store any data. So if you don't store your own data nobody does.

**How many services can I create?**

Nornir is the only company today that offers morphic collective networks as a service. Synx HIVE has been installed by cioty.com to create a maker space for developers. Here you can trial and purchase domains that allow you to create up to 5 services per domain. But if you purchase the pro or enterprise package (private HIVE) there is no limitation.

**How many links can I add to one data element?**

You can add up to 5 links/elements in the cioty HIVE. Up to 10 links/elements in the private Synx HIVE pro package and unlimited for the enterprise package.

**Can I use Synx HIVE to create a neural network?**

Yes. There are several benefits to doing it. You don't have to deal with web servers, middleware  and platform frameworks. You can easily share the result and collect data directly from the web with unique access control. You can alter, change the system and integrate with new data sources without API programming. Linking and data schemas can anytime be updated using command line tools and you can create your own graphical user interfaces. There is no overhead or session handling that you need to worry about. External users can request to get data from your services. In the end you are in charge of who is granted data access.

**Can I use json format on the data I send and receive?**

Yes, By sending a Synx Command, your connection can change behaviour to send or receive data in json format, both on http or websocket.

## Synx HIVE - Technology Introduction

### The Collective and Web

The concept of a new collective web network that can handle IoT and more intelligent services in a way where the network itself can evolve and grow with time, is the holy grail in networking architecture. There are many initiatives both in academia and private research centers that work on to solve some of the challenges the internet is facing today. Like the Solid (inrupt) project led by Sir Tim Berners Lee that works on a web for ALL where the ultimate goal is to share information among people with individual control. Then you have the Quic working group initiative that works on new HTTP/3 standard to make the internett better suited for IoT and fast data distribution using UDP. We at Nornir have also been working on distributed technology for many years with the intent to solve the limitations the web has today. But compared to the project mentioned above our journey had a different starting point and goal. We target machines and machine society and less focus on humans and their needs. The result is a collective machine network concept named the Real Time Web. We have developed a product suite Synx Hive, a MVP (minimum viable product) that you may test and share your experience with us and get a first mover advantage.

### Data vs Information

If you ask Wikipedia about Data you’ll get “Data are characteristics or information, usually numerical, that are collected through observation”. This is a kind of misconception when you view it from a machine perspective. Machines look at data and information differently. Information consists of structured historical data, while data is the value content of the information before it becomes historical. Technically speaking the data exists only before it has been stored into a database or filesystem, then it becomes information. Information is a kind of “humanized” historical data. Useless for machines but necessary for humans to build knowledge. Machines don’t really care about information and don’t need information to live among humans.

To understand machine networks like a collective network we will need to distinguish data from information. Human brain cannot process data fast enough and need to structure data into information and do lookups when needed. The Web is humans greatest invention, the biggest “database” on information today. Web addresses millions of databases (machines) that have stored structured information that can be retrieved using links following their URL (addresses).

A machine network is about distributing fresh data in a network to other machines that consume and act on the data. This is done in real time. The same data can be used differently and it can trigger different processes. Data is normally captured and generated by IoT sensor devices that transform readings into alphanumeric data for distribution.

How and what these data will be used is only known to the individuals, and the data may change context and transform into knowledge differently while it traverses through the network value chains. Some data may end up being important for millions of users while other data may not be used at all. The only thing that we know is that billions of data packages will end up in millions of different use cases in the network every day.

The collective network uses data links to address and transform data in the network. Each morphic service provider may find and link to a data source offered by another morphic service provider. The link is structured like a sentence with a subject, predicate and an object. Following the Semantic Web standard.

For a normal person that is not into Semantic Web, the triplet notation is analogous to how you build up a sentence using normal vocabulary. The predicate is like a verb, it is something you do; like “I’m driving a car” or “you are reading a newspaper”, where the verb is “driving” or “reading”. In machine language this “verb” is called predicate. So using links in a collective network is straightforward. You create a morphic service name which is the “Subject” which includes the data model. Then you link to another morphic provider data element which becomes the target data source (object). If you need to do something with the data you add a predicate to the link. With a series of links you can construct a story (of sentences) and intelligence. Using the collective you can put this intelligence into any device (network resource) and connect it to the rest of the web for knowledge preservation.

### Introducing Morphic Services

The name “Morphic” is inherited from the fields in biology that explain morphogenesis and organizing fields. Technically speaking it means that a system can inherit behaviour and logic based on tuning in the right data channel. It’s like tuning in a radio channel when you want to listen to music and change this channel to another frequency if you want to listen to something else.

Morphic services differ from traditional microservices in many ways. One key difference is the use of Morphic Architecture Design (MAD), a multi layer architecture design method invented by our founders Paal Kristian Levang and Henrik Silverkant and has been used to define the Synx tools (Synx HIVE) and how they operate. Traditional microservice operates in one layer of existence, “what you see is what you get”. The entity that wants to send or receive data from a microservice needs to know the data structure in advance so a programming interface (API) can be implemented to secure the communication. Morphic service does not use API implementation and the data structure may change at runtime while clients have an active connection.

Morphic service is designed to support semantic web to create AI collective and the bidirectional linking is supported by a distributed operating system named Synx BIOS. Synx BIOS segregates the communication layers and provides different access control on network resources, domains and morphic services. There are no code libraries or installation needed on network resources when communicating with the collective. Synx enables both stateful and stateless HTTP/HTTPS/Websocket communication over enhanced TCP stack.

### Introducing Network Ghosts

Real Time Web (collective network) works much the same way as the World Wide Web and is backward compatible with current TCP stack. But, there are some slight differences.

First of all the lower communication stack levels (ISO layers) have been enhanced by SynxBIOS which can execute and send data up and down the layers and segregate the access control and replace using API at the application layer. Second, the connection point of a device (network resources) that connects to a specific IP address/URL is always connected against his distributed ghost. So instead of establishing a communication against a service provider platform, or web server with session handling, all this has been taken care of by the network kernel. The ghost memory entity acts as a remote proxy for the connected device and is created at runtime on connection and it disappears on deconnection.

The footprint is small since the ghost only exists when there is some data that will be transferred to and from the device that has been authenticated, and the data structure is inherited at runtime. The connection between the client and his ghost can be stateless, stateful or combination of these. The client can also use HTTP, HTTPS, socket or any other combination while communicating.

Communication against a ghost entity is protocol independent and new protocols can be added. The ghost entity can also change behavior and data structure while on active communication, meaning the data structure is not fixed and can be altered by the service provider. For more information on how to communicate with the HIVE collective visit SynxHive.com.

### Ghost VS digital Twin

All network resources like clients, servers, gateways, IoT-objects, mobile applications or anything that wants to communicate with the HIVE will always connect against his unique ghost. Ghosts differ from the concept of Digital Twins in some areas. Ghost can be used to create digital twin services, but also extend the digital twin concept a step further. Ghost operates in multiple layers in the communication stack. So the top layer (data layer) may work similar to a traditional digital twin network. But the ghost can also gain access to the lower stack layer and may receive events up and down these layers at runtime. The other layers provide contextual data to players in other areas of the network ecosystem.

If you look at a communication network ecosystem you find several “passive” players like hosting providers who maintain the physical hardware like servers, network routers and domain name services etc. Then you have security providers that do all sorts of monitoring, blockchains and encryption algorithms in the network. Then you have the application and service provider who create web services and applications that can be accessible and addressed via domain names (URL). Synx technology is designed to be an open decentralized machine p2p network operating system.

So to be able to secure data between two unique endpoints, other players in the network ecosystem cannot access the data layer, events up and down the stack layers controlled by Synx need to provide a method that legally can intercept the communication. Ex. two clients are sending messages to each other using a service that belongs to a morphic provider. The morphic provider can anytime send a Synx command to kill the active connection on one or both of the clients end points. So even in a p2p network (no server or middleware logic) the client can be disconnected from using a specific service. Synx also supports moving ownership of ghosts and network resources, handles read access and moves ghosts between services dynamically at runtime. Ghost follows the user’s signature and can change the behaviour of the “digital twin” dynamically. This way a ghost can gain full ownership and network accessibility. The network becomes more secure and robust for changes and ownership on resources can be moved around in the open heterogeneous network and gain (allocate) cpu and memory resources from providers with lower layer access levels.

### Summary

Practical tests show that a collective network can reduce development and maintenance cost by 50 times compared to using traditional development methods that use message queues and sentralized hubs for IoT distribution.

Hive collective is based on sharing data on changes in the network and only to a recipient that is active in the collective. This reduces network traffic by more than 50% and is a better option when you want to develop a greener smart city solution.

Using Hive collective on internet of things devices like TV, smart phone, intelligent coffee machines autonomous vehicle among others, the manufacturer does not need to install any prearrange program into the device on shipment. Instead it can be created as a service and the devices can be integrated into third party service providers ad hoc by just a click. The maintenance cost on the value chain is drastically reduced and simplified. Any upgrade to the device can be done remotely from an online service. The distribution channels is hugely simplified since

Using Hive tools enables GDPR (General Data Protection Regulation) on communication. This means that the consumer controls his own data in the network. GDPR is one of the main challenges any future ITC project is facing since data from the user needs to be controlled and owned by individuals. Many IT service providers do not take this into account when designing a solution.

Per design the collective network does not persist data so there is nothing to steal if someone is successful to hack the system. The collective uses a kind of blockchain type of storage distribution. Any hacking attempt will be difficult since the data is spread around the network and will make no sense to the hacker. On top of this we use data encryption and dynamic token on the communication. Building security solutions is an ongoing thing and will always be a process to stay on top of the challenges the network is facing.

Using Synx tools will make consumers' lives easier. Let's say that you want to move to another apartment in the near future and you have a lot of smart devices that you need to leave behind. Typical intelligent washing machine, TV, fridge, oven, windows, door bell, light system etc. With RTW the ownership of these devices can be transferred to a new person. The new person will then be able to control data from these devices and choose which services to add them into. This feature is not possible in an easy way using traditional methods. The user will end up reprogramming and do new installations manually for each device.

Data providers need to program interfaces (API) when sharing data with each other. Using hive collective this interface is replaced with links and commands against the network. The effect is that developers can integrate with third party services much quicker (minutes instead of days).

With Hive collective morphic providers can integrate with past, present and unknown future services (services that do not exist yet). This can be done without changing anything locally. An practical example can be that a service provider is creating a light switch to turn off/on users' lights in his living room using his mobile app. So one day into the future, the user is purchasing a new intelligent LED light produced by a new company. The mobile application will work together with this new LED light system without any new installation or upgrade to the app. The collective makes it possible to connect past, present and future services together.
