var helper = require("./helper");
var should = require("should");

function getBasicTest(opt) {
    var options = opt || {};
    var Manager = options.manager;
    var Model = options.model;
    var dataUtil = options.util;
    var validate = options.validator;
    var createDuplicate = options.createDuplicate;
    var keys = options.keys;

    var manager;
    before("#01. connect db", function (done) {
        helper.getDb()
            .then(sequelize => {
                sequelize
                    .authenticate()
                    .then(() => {
                        console.log('Connection has been established successfully.');
                        done();
                        helper.closeConnection(sequelize);
                    })
                    .catch(err => {
                        console.log('Unable to connect to the database:', err);
                        done(err);
                        helper.closeConnection(sequelize);
                    });
            });
    });
}
module.exports = getBasicTest;