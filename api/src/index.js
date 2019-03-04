'use strict'

const Hapi = require('hapi');

const serverConfig = require('./config').server;

async function init() {
  const server = Hapi.server(serverConfig);

  const routes = require('./routes');
    
    routes.forEach(route => {
        server.route(route);
    });

    server.route({
        method: 'GET',
        path: '/health-check',
        handler: (request) => 'all good',
    });
    
    await server.start();
    
    console.log(`Server listening on ${serverConfig.port}`);

    return server;
}

init();
