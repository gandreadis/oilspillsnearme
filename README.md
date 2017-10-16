<h1 align="center">
  <img src="https://github.com/gandreadis/oilspillsnearme/raw/master/client/public/android-chrome-192x192.png" width="100"/><br/>
  oilspillsnear.me
</h1>
<p align="center">Visualizing the impact of oil spills</p>

## Installation

To get started, you'll need the [Node.js environment](https://nodejs.org) and the [Yarn package manager](https://yarnpkg.com). Once you have those installed, you can set up the two main components of the system: the server backend and the frontend client.

### Quick Deployment

Run the following sequence of commands, starting in the root directory of this repository:

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

