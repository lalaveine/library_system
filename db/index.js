const pg = require('pg');
const config = {
    user: "edbfiupkxewdpa",
    password: "7654bc069da1e6b889d586e0bf023c6632d2445c4c6977009859ec0db694fceb",
    database: "d15aohh251nhi9",
    port: 5432,
    host: "ec2-54-246-90-10.eu-west-1.compute.amazonaws.com",
    ssl: true
};

const client = new pg.Client(config);
client.connect();

module.exports =  client;