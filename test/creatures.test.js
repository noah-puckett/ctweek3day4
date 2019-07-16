const request = require('supertest');
const app = require('../lib/app');

describe('creaturess routes', () => {
    
    it('can create a creature with POST', () => {
        return request(app)
            .post('/api/v1/creatures')
            .send({ type: 'gremlin', color: 'greenish brown', teeth: '70-150', quality: 'good rowdy boys' })
            .then(res => {
                expect(res.body).toEqual({ type: 'gremlin', color: 'greenish brown', teeth: '70-150', quality: 'good rowdy boys' });
            });
    }); 

    it('can get an array of creatures with GET', () => {
        return request(app)
            .get('/api/v1/creatures')
            .then(res => {
                expect(res.body).toEqual([{ 
                    type: 'gremlin', 
                    color: 'greenish brown', 
                    teeth: '70-150', 
                    quality: 'good rowdy boys' 
                }]);
            });
    });

    it('can get a creature by array index', () => {
        return request(app)
            .get('/api/v1/creatures/0')
            .then(res => {
                expect(res.body).toEqual({ 
                    type: 'gremlin', 
                    color: 'greenish brown', 
                    teeth: '70-150', 
                    quality: 'good rowdy boys' 
                });
            });
    });

    it('can update a creature with put', () => {
        const newCreature = {
            type: 'goblin',
            color: 'ashy',
            teeth: 'at least 5',
            quality: 'screm babby'
        };

        return request(app)
            .put('/api/v1/creatures/0')
            .send(newCreature)
            .then(res => {
                expect(res.body).toEqual({
                    type: 'goblin',
                    color: 'ashy',
                    teeth: 'at least 5',
                    quality: 'screm babby'
                });
            });
    });

    it('can delete a creature by array index', () => {
        return request(app)
            .delete('/api/v1/creatures/0')
            .then(res => {
                expect(res.body).toEqual({
                    type: 'goblin',
                    color: 'ashy',
                    teeth: 'at least 5',
                    quality: 'screm babby'
                });
            });
    });

});
