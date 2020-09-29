var mongoose = require('mongoose')

var Schema = mongoose.Schema

var CVs = new Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String,
    address: String,
    summary: String,
    degree: String,
    degreeDuration: String,
    college: String,
    jobTitle: String,
    jobDuration: String,
    company: String,
    motherLang: String,
    nativeLang: String,
    project: String
})

module.exports = mongoose.model('CVs', CVs)