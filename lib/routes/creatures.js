const { Router } = require('express');

const creaturesArr = [];

module.exports = Router()

    .post('/api/v1/creatures', (req, res) => {
        //destructure so that nobody can fuck witchu
        //what we receive
        const {
            type,
            color,
            teeth,
            quality
        } = req.body;

        //here we create an item to store in our array
        const creature = {
            type,
            color,
            teeth,
            quality
        };

        creaturesArr.push(creature);

        res.send(creature);
    })
    
    .get('/api/v1/creatures', (req, res) => {
        res.send(creaturesArr);
    })

    .get('/api/v1/creatures/:id', (req, res) => {
        res.send(creaturesArr[req.params.id]);
    })

    .put('/api/v1/creatures/:id', (req, res) => {
        const {
            type,
            color,
            teeth,
            quality
        } = req.body;

        const updatedCreature = {
            type,
            color,
            teeth,
            quality
        };

        creaturesArr[req.params.id] = updatedCreature;

        res.send(updatedCreature);
    })

    .delete('/api/v1/creatures/:id', (req, res) => {
        const deleted = creaturesArr.splice(req.params.id, 1);
        res.send(deleted[0]);
    });
