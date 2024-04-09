const app = require('./app');
const sequelize = require('./utils/connection')

const PORT = process.env.PORT || 3000;

const main = async () => {
    try {
        await sequelize.authenticate()
        console.log('DB connected')
        sequelize.sync() //tablas
        app.listen(PORT)
        console.log(`Server running on port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}

main() 