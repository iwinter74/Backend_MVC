
const Contacts = require('../models/contactItem')
//contact_index

const contact_index = (req, res) => {
    res.render('contact')
}

//contact_New
const contact_New = (req, res) => {
    res.render('new')
}

const contact_Add_New = (req, res) => {
    const newContact = new Contacts({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    newContact.save()
        .then(result => {
            console.log('new contact saved')
            res.redirect('/contact')
        })
        .catch(err => console.log(err))

}

module.exports = {
    contact_index,
    contact_New,
    contact_Add_New
}