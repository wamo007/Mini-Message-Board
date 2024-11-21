const express = require('express')
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
const app = express()

const links = [
    { href: '/', text: 'Home' },
    { href: 'new', text: 'New' },
]

app.use(express.urlencoded({ extended: true }))

const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use('/new', newRouter)
// app.use((req, res, next) => {
//     next(new Error('Oh NO!'));
// })
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(err.statusCode || 500).send(err.message);
// })

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Message Board app - listening on port ${PORT}!`);
})