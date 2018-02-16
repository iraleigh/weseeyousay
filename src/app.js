const express = require('express')
const routes = require('./routes')

module.exports = () => {
    const app = express()

    app.set('views', 'src/views')
    app.set('view engine', 'pug')

    app.get('/', routes.home)
    app.get('/callback/instagram', routes.instagram)

    app.listen(3000, () => console.log('Listening on port 3000'))
}