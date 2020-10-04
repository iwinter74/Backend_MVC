const express = require('express');

const app = express()

const mongoose = require('mongoose');
// const indexRoutes = require('./routes/indexRoutes')
// const contactRoutes = require('./routes/contactRoutes')
// const aboutRoutes = require('./routes/aboutRoutes')

const indexController = require('./controllers/indexController')
const aboutController = require('./controllers/aboutController')
const contactController = require('./controllers/contactController')

const dbUri = 'secret'
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected')
        app.listen(3000, () => {
            console.log('listening')
        })
    })
    .catch(err => console.log(err))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())



// app.use(indexRoutes)
// app.use(aboutRoutes)
// app.use(contactRoutes)
app.get('/', indexController.index_Index)
app.get('/about', aboutController.about_Index)
//contact_index
app.get('/contact', contactController.contact_index)
//contact_New
app.get('/contact/new', contactController.contact_New)
//contact_Add_New
app.post('/contact/new', contactController.contact_Add_New)

