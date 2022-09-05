const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    }
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', UserSchema);