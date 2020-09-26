const express = require('express');
const router = express.Router();
const Prognosis = require('../database/models')

router.get('/api/pronostics', (req,res,next) => {
    Prognosis.find()
    .then(prognosis => res.status(200).json(prognosis))
    .catch(error => res.status(400).json({error}));
});

router.post('/api/pronostics',(req, res, next) => {
    const prognosis = new Prognosis({
        ...req.body,
    });
    console.log(prognosis)
    prognosis.save()
    .then(() => res.status(201).json({message:'objet enregistré !'}))
    .catch(error => res.status(400).json({error}));
});

module.exports = router;
