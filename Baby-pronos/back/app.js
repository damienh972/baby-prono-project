const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userController = require('./controller/user.controller');
const birthCampaignController = require('./controller/birthCampaign.controller');
const prognosisController = require('./controller/prognosis.controller');



mongoose.connect('mongodb+srv://projets:SmartCowork2020@damscluster.oysbg.mongodb.net/baby_pronos?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée'));
    


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

//user routes

app.get('/api/users',userController);
app.post('/api/users', userController);

//birth's campaigns route
app.get('/api/campaigns',birthCampaignController);
app.post('/api/campaigns',birthCampaignController);

// prognosis routes
app.get('/api/pronostics', prognosisController);
app.post('/api/pronostics', prognosisController);

module.exports = app;