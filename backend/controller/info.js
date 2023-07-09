const mongoose = require('mongoose');
const {Info} = require('../models/models.js');
const { sendEmail } = require('../helpers/mailer.js');
const dotenv  = require('dotenv');
dotenv.config();

const readInfo = async (req, res) => {

    const info = await Info.find().then(()=>{
        res.status(200).json({status: true, data: info});
    })
    .catch((error)=>{
        res.status(404).json({status: false, data: error});
    });
}


const createInfo = async (req, res) => {
    const mailOptions = new Info(req.body);
    console.log(mailOptions);

    await mailOptions.save().then(() => {
        res.status(201).json({ status: true, data: 'Data saved' });
        let mailDetails = {
            
            from: `${mailOptions.name} <${mailOptions.email}>`,
            to: "amitbora007@gmail.com",
            subject: mailOptions.subject,
            text: mailOptions.content
        };            
        sendEmail(mailDetails);
    })
    .catch((error) => {
        console.error('Error saving data:', error);
        res.status(500).json({ status: false, data: error });
    });
}


const updateInfo = async (req, res) => {
    const { id } = req.params;
    const { name, content } = req.body;
    const info = { name, content, _id: id };

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({status: false, data: `The id ${id} is not valid`});
    }

    await Info.findByIdAndUpdate(id, info, { new: true }).then(()=>{
        res.json({status: true, data: info});
    })
    .catch((error)=>{
        res.json({status: false, data: error});
    });
}

const deleteInfo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({status: false, data: `The id ${id} is not valid`});
    }

    await Info.findByIdAndRemove(id).then(()=>{
        res.json({ status: true, data: 'deleted successfully' });
    })
    .catch((error)=>{
        res.json({status: false, data: error});
    });
}

module.exports = {readInfo, createInfo, updateInfo, deleteInfo} ;