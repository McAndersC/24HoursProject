// Require Node Dependencies.
const express = require('express');
const fs = require('fs');
// const cors = require('cors');
const path = require('path');
// Constants.
const expressServer = express();
const server = {};

// Express Metoder. De fungere som hjælpere til at håndtere http requests osv.
expressServer.use(express.json());

expressServer.use(express.urlencoded({

  extended: true

}));

expressServer.use(express.static(path.join(__dirname, '../build')));
expressServer.use(express.static(path.join(__dirname, '../public')));
// expressServer.use(express.static('assets'));
// expressServer.use(express.static('client/assets/'));
// expressServer.use(cors());
// expressServer.use(express.static('public'));
expressServer.get('/', (req, res) => {

    console.log(__dirname);
    res.sendFile(path.join(__dirname, '../build/index.html'));

});


 // Init metode til at starte serveren.
server.run = () => {
    // mon.connect();
    // Getting Server Port to listen for.
    let port = 3000;

    // Start HTTP server.
    expressServer.listen(port, () => {

        console.log('\x1b[36m%s\x1b[0m','The HTTP server is running on http://localhost:' + port);

    });

};

// Exporting
module.exports = server;