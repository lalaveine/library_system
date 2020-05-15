var pgp = require("pg-promise");
var db = pgp("postgres://dqyxzdhxxhkvwd:5dd80d4bfcc94e7bdfced05a2f04d772ffba666f2c7cc03ecd735f6217be82aa@ec2-54-246-85-151.eu-west-1.compute.amazonaws.com:5432/dctusulqaa69nh");

db.one("SELECT * from book_instance")
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });