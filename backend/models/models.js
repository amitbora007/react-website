const mongoose = require('mongoose');
const infoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    payment_confirmed: {
        type: String,
    },
    confirmation_mail_sent: {
        type: String,
    },
}, { timestamps: true });


const Info = mongoose.model('Info', infoSchema)
const Register = mongoose.model('Register', registerSchema)
module.exports = {Info, Register};