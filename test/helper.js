var Sequelize = require('sequelize');

function _getDb() {
    return new Promise((resolve, reject) => {
        let sequelize = new Sequelize({
            "dialect": "mssql",
            "dialectModulePath": "sequelize-msnodesqlv8",
            "dialectOptions": {
                "driver": "SQL Server Native Client 11.0"
            },
            "host": process.env.DB_HOST,
            "port": parseInt(process.env.DB_PORT),
            "username": process.env.DB_USERNAME,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_DATABASE
        });
        return resolve(sequelize);
    });
}

module.exports = {
    getDb: _getDb,

    closeConnection: function(sequelize) {
        return sequelize.close();
    }
}