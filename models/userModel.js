const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: [true, 'A User must have a fullname']
    },
    email: {
        type: String,
        unique: [true, 'A User must have unique email'],
        require: [true, 'A User must provide their email']
    },
    username: {
        type: String,
        unique: [true, 'A User must have unique username'],
        require: [true, 'A User must provide their own Username']
    },
    password: {
        type: String,
        require: [true, 'A User must provide their password for registration and login.']
    },
    country: {
        type: String,
        require: [true, 'A user must provide his own country']
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;