require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session')

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('db connected')
}).catch( err => console.log(err))

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.post('/auth/logout', ctrl.logout)
app.get('/api/posts/:userid', ctrl.getAllPosts)


app.listen(SERVER_PORT, () => console.log(`Welcome to port ${SERVER_PORT}`))