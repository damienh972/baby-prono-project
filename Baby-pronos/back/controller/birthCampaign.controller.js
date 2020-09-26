const express = require('express');
const router = express.Router();
const BirthCampaign = require('../database/models/');

router.get('/api/campaigns', (req,res,next) => {
    BirthCampaign.find()
    .then(campaign => res.status(200).json(campaign))
    .catch(error => res.status(400).json({error}));
});

router.post('/api/campaigns',(req, res, next) => {
    const campaigns = new BirthCampaign({
        ...req.body,
    });
    campaigns.save()
    .then(() => res.status(201).json({message:'campagne enregistrée !'}))
    .catch(error => res.status(400).json({error}));
});

module.exports = router; 
