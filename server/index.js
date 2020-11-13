require('dotenv').config();

const express = require('express');
const massive = require('massive');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('db connected')
}).catch( err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Welcome to port ${SERVER_PORT}`))