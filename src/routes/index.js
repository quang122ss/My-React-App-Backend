const UserRouter = require('./UserRoutes')
const ProductRoutes = require('./ProductRoutes')
const OrderRouter = require('./OrderRoutes')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRoutes)
    app.use('/api/order', OrderRouter)
}

module.exports = routes