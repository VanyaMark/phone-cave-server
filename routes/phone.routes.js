const express = require("express");
const router = express.Router();


const phones = require('../phones.json')

//Route to get all phones

router.get('/phones', (req, res, next) => {
    res.json(phones)
})

router.get('/phones/:id', (req, res, next) => {
    const {phoneId} = req.params;

    
})

module.exports = router
