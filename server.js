const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var CV = require('./modals/cv')
const app = express()

mongoose.connect('mongodb+srv://mian:1234@first-db.05y5r.mongodb.net/cv-generator?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('DB Connected'); })
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
app.use(cors())

app.post('/', (req, res) => {
    // console.log(req.body);
    let cv = new CV(req.body)
    cv.save()
        .then((res) => {
            console.log(res)
                .then(() => { res.send() });
        })
})

app.get('/data', (req, res) => {

    CV.find().then((cvData) => {
        console.log(cvData, "data");
        res.send(cvData)
    })
})



app.listen(process.env.PORT || 150, () => {
    console.log('Running...');
})