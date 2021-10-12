/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const assert = require('assert');
const session = require('supertest-session');
const app = require('../../src/app');

const agent = session(app);

const pokemon = {
    name: 'example',
    height: 50,
};

describe('Pokemon routes', () => {
    
    describe('GET /pokemons', () => {
        it('should get 200', () => agent.get('/pokemons').expect(200)).timeout(40000);
    });

    describe('GET /pokemons/:id', () => {
        it('should get 200', (done) => {
            agent.get('/pokemon/1').expect(200).timeout(40000);
            done();
        });
        it('should res with 404 if the pokemon is not found.', (done) => {
            agent.get('/pokemon/impossibleToExist').expect(404).timeout(40000);
            done();
        });
    });


    describe('POST /pokemons', () => {
        it('should create a new pokemon', (done) => {
            agent.post('/pokemon').send(pokemon).expect(200);
            done();
        });
    })


})
