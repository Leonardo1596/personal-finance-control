const mongoose = require('mongoose');

const transactionsSchema = mongoose.Schema({
    description: {
        type: 'string',
        required: true
    },
    value: {
        type: 'number',
        required: true
    },
    type: {
        type: 'string',
        required: true
    }
})

const userSchema = mongoose.Schema({
    email: {
        type: 'string',
        required: true
    },
    username: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    transactions: [transactionsSchema]
});


module.exports = mongoose.model('users', userSchema)