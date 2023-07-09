const mongoose = require('mongoose');
const {Register} = require('../models/models.js');
const { sendEmail } = require('../helpers/mailer.js');
const dotenv  = require('dotenv');
dotenv.config();

const readRegInfo = async (req, res) => {

    const info = await Register.find().then(()=>{
        res.status(200).json({status: true, data: info});
    })
    .catch((error)=>{
        res.status(404).json({status: false, data: error});
    });
}


const createRegInfo = async (req, res) => {
    const mailOptions = new Register(req.body);

    await mailOptions.save().then(() => {
        res.json({ status: true, data: 'Data saved' });
        let mailDetails = {
            from: "amitbora007@gmail.com",
            to: mailOptions.email,
            subject: "Register Successful",
            text: `Welcome ${mailOptions.name}, \nYou've successfully registered with us. To attend the web seminar please complete the payment. `, //mailOptions.content
        };
        sendEmail(mailDetails);
    })
    .catch((error) => {
        console.error('Error saving data:', error);
        res.status(500).json({ status: false, data: error });
    });
}


const updateRegInfo = async (req, res) => {
    const { id } = req.params;
    const { name, content } = req.body;
    const info = { name, content, _id: id };

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({status: false, data: `The id ${id} is not valid`});
    }

    await Register.findByIdAndUpdate(id, info, { new: true }).then(()=>{
        res.json({status: true, data: info});
    })
    .catch((error)=>{
        res.json({status: false, data: error});
    });
}


const deleteRegInfo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
         return res.status(404).json({status: false, data: `The id ${id} is not valid`});
    }

    await Register.findByIdAndRemove(id).then(()=>{
        res.json({ status: true, data: 'deleted successfully' });
    })
    .catch((error)=>{
        res.json({status: false, data: error});
    });
}

module.exports = {readRegInfo, createRegInfo, updateRegInfo, deleteRegInfo} ;