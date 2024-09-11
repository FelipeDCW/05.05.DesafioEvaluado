const express = require('express')
const app = express()


app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000)