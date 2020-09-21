const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/api/pronostics', (req,res,next) => {
    const pronostics = [
        {
            id:1,
            name:"Damien/sendes",
            sex:"F",
            weight:3.9,
            height:48,
            date:"23/02/2021"
        },
        {
            id:2,
            name:"Magali",
            sex:"F",
            weight:3.4,
            height:46,
            date:"28/02/2021"
        },
    ];
    res.status(200).json(pronostics);
});
   
module.exports = app;