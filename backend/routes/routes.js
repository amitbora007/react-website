const express = require('express');
const { createInfo, deleteInfo, readInfo, updateInfo } = require('../controller/info.js');
const { createRegInfo, deleteRegInfo, readRegInfo, updateRegInfo } = require('../controller/register.js');

const infoRouter = express.Router();
infoRouter.get('/', readInfo);
infoRouter.post('/', createInfo);
infoRouter.patch('/:id', updateInfo)
infoRouter.delete('/:id', deleteInfo);


const registerRouter = express.Router();
registerRouter.get('/', readRegInfo);
registerRouter.post('/', createRegInfo);
registerRouter.patch('/:id', updateRegInfo)
registerRouter.delete('/:id', deleteRegInfo);
module.exports = {infoRouter, registerRouter};