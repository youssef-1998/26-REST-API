const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
const assert = require('assert');

const app = express()

app.use(bodyParser.json())

const mongo_url = 'mongodb://localhost:27017'
const dataBase = 'first-api'

MongoClient.connect(mongo_url,{ useUnifiedTopology: true } ,(err, client) => {
    assert.equal(err, null, 'data base connexion failed')

    const db = client.db(dataBase)

    app.post('/newContact', (req, res) => {
        let newContact = req.body
        db.collection('contacts').insertOne(newContact, (err, data) => {
            if (err) res.send('cant add contact')
            else res.send("contact aded")
        })
    })  

    app.get('/contacts', (req, res) => {
        db.collection('contacts').find().toArray((err, data) => {
            if (err) res.send('cant fecth contacts')
            else res.send(data)
        })
    })

    app.get('/contacts/:id', (req, res) => {
        let searchcontactId = ObjectID(req.params.id)
        db.collection('contacts').findOne({ _id: searchcontactId }, (err, data) => {
            if (err) res.send('cant fecth contacts')
            else res.send(data)
        })

    })

    app.put('/modifyContact/:id', (req, res) => {
        let id = ObjectID(req.params.id)
        let modifiedcontact = req.body
        db.collection('contacts').findOneAndUpdate({ _id: id }, {$set: { ...modifiedcontact }}, (err, data) => {
            if (err) res.send('cant modify contact')
            else res.send('contact was modifed')
        })
    })

    app.delete('/delete_contact/:id', (req, res) => {
        let contactToRemoveId = ObjectID(req.params.id)
        db.collection('contacts').findOneAndDelete({ _id: contactToRemoveId }, (err, data) => {
            if (err) res.send('cant delet contact')
            else res.send('contact was deleted')
        })
    })
    
})

app.listen(5000, (err) => {
    if (err) console.log("server err")
    else console.log('server is running on port 5000')
})









// var tab = [
//     {
//         name: "contact1",
//         phon: 42558,
//         mail: "contact1@gmail.com"
//     },
//     {
//         name: "contact2",
//         phon: 585558,
//         mail: "contact2@gmail.com"
//     },
//     {
//         name: "contact3",
//         phon: 522555,
//         mail: "contact3@gmail.com"
//     },
// ]

// app.get('/contacts', (req, res) => {
//     res.send(tab)
// })

// app.get('/contacts/:name', (req, res) => {
//     let contactName = req.params.name
//     let contactToFetech = tab.filter(e => e.name === contactName)
//     res.send(contactToFetech)
// })

// console.log('initiale tab value', tab)

// app.post('/add_contact', (req, res) => {
//     let newcontact = req.body
//     tab.push(newcontact)
//     res.send(tab)
//     console.log("new tab value" , tab)
// })

// app.put('modify_contact', (req, res) => {
//     let modifiedcontact = req.body
//     tab = tab.map(e => e.name === modifiedcontact.name ? e = modifiedcontact : e)
//     res.send(tab)
// })

// app.delete('/delete_contact/:name', (req, res) => {
//     let contactToRemmove = req.params.name
//     tab = tab.filter(e => e.name !== contactToRemmove)
//     res.send(tab)
// })

