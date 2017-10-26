<h1 align="center">
  <img src="https://github.com/gandreadis/oilspillsnearme/raw/master/client/public/android-chrome-192x192.png" width="100"/><br/>
  oilspillsnear.me
</h1>
<p align="center">Putting oil spills around you on a map</p>

<img src="https://github.com/gandreadis/oilspillsnearme/raw/master/images/oilspillsnearme-map-screenshot.png"/>

Do you know what oil spills have occurred close to you in the last years? Do you know what their impact on environment and society might have been? With **oilspillsnear.me**, you can have a look at a global map of oil spills, as well as their impacts on the environment and industry of the nearest country. It also gives perspective on what still needs to be done: View how much offshore oil rigs your country still has, and learn about initiatives that you can back to reduce our dependence on these dangerous forms of energy.

This project has been built as a final project for a course on Semantic Web technologies at the VU Amsterdam. It is built upon linked data formalisms, using custom-made OWL ontologies that are served from a Stardog triple store.

See our [screencast on YouTube](https://www.youtube.com/watch?v=rkrmYdJYrbg) for a visual introduction to the application!

## Installation

To get started, you'll need the [Node.js environment](https://nodejs.org) and the [Yarn package manager](https://yarnpkg.com). Once you have those installed, you can set up the two main components of the system: the server backend and the frontend client.

### Quick Deployment

First, make sure you have a Stardog instance running (typically through `stardog-admin.bat server start --disable-security`). Create a database `osnm` and load all RDFs of the `sources` folder into that DB:

```cmd
stardog data remove --all osnm
stardog data add osnm sources/*
```

Once the database is set up and running, run the following sequence of commands, starting in the root directory of this repository:

```bash
cd client
yarn
yarn build
cd ..
cd server
yarn
yarn start
```

The server should now be listening on [localhost:3001](http://localhost:3001).

### Development Setup

### Stardog

Follow the same steps as outlined above to set up the Stardog database.

#### Server 
To fetch and install dependencies, run the following command from the `server` directory:

```bash
yarn
```

To run the server, run:

```bash
yarn start
```

It should now be listening on [localhost:3001](http://localhost:3001), although you'll need to build the client first to see actual browser pages being served.

#### Client 

To fetch and install dependencies, run the following command from the `client` directory:

```bash
yarn
```

To run the client in development mode (recompiling automatically on change), run:

```bash
yarn start
```

The client development server is listening on [localhost:3000](http://localhost:3000).

To build the client (to be served as a bundle by the server), run:

```bash
yarn build
```

