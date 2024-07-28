const express = require('express')
const app = express()
const port = 3000

app.set("view engine", 'ejs');

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('After Middleware!! Hello World!')
})

app.get('/home', (req, res, next) => {
    res.render('index')
    next();
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
