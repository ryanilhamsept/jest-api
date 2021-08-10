/* eslint no-unused-vars: off */

const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

const Path = '/users?page=2';

function getAPI() {
  return api.get(Path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    //.set('Authorization', `Bearer ${process.env.TOKEN}`);
}

module.exports = {
  getAPI,
};
