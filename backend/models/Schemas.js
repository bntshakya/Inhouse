const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    emailid:{type:String},
    password:{type:String}
});

const Admin = mongoose.model('admin',adminSchema);
//const Tweets = mongoose.model('tweets', tweetSchema, 'tweets');
const mySchemas = {'Admin':Admin};

module.exports = mySchemas;