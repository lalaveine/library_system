const pg = require('pg');
const config = {
    user: "dqyxzdhxxhkvwd",
    password: "5dd80d4bfcc94e7bdfced05a2f04d772ffba666f2c7cc03ecd735f6217be82aa",
    database: "dctusulqaa69nh",
    port: 5432,
    host: "ec2-54-246-85-151.eu-west-1.compute.amazonaws.com",
    ssl: true
};

const client = new pg.Client(config);
client.connect();
module.exports =  client;