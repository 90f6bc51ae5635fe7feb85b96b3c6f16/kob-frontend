module.exports = {
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: 'giftshop_base',
        charset: 'utf8mb4',
        multipleStatements: true
    },
    connection_sale: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        database: 'giftshop_sale',
        charset: 'utf8mb4',
        multipleStatements: true
    },

}