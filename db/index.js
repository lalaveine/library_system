const pg = require('pg');
var parse = require('pg-connection-string').parse;

const config = parse(process.env.DATABASE_URL + '?ssl=true');

const client = new pg.Client(config);
client.connect();

module.exports =  client;