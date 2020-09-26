const express = require('express');
const router = express.Router();
const User = require('../database/models/');

router.get('/api/users', (req,res,next) => {
    User.find()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({error}));
});

router.post('/api/users',(req, res, next) => {
    console.log(req);
    const user = new User({
        ...req.body,
    });
    console.log(req);
    user.save()
    .then(() => res.status(201).json({message:'user enregistré !'}))
    .catch(error => res.status(400).json({error}));
});

module.exports = router; 
