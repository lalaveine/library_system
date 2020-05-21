const pg = require('pg');
const config = {
    user: "fqxsfzdrnznmir",
    password: "f5f8a516df29ac15d0b95c2dfdaee480511c60b9ff5819bc7d62c7cb13f3d497",
    database: "d7pvv3v5i5cqf2",
    port: 5432,
    host: "ec2-46-137-100-204.eu-west-1.compute.amazonaws.com",
    ssl: true
};

const client = new pg.Client(config);
client.connect();

module.exports =  client;