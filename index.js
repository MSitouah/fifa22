import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
const favicon = require('express-favicon');
const date = require('dayjs');
let os = require('os')


const path = require('path');


const app = express();
const port = 8000;


// db connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
// bodyparser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'images','favicon.ico')));

app.use(express.static(path.join(__dirname,'public','images')));

routes(app);

var data = require('./data.json');
let dom ='';
data.forEach(element => {
    dom += `<tr> <td>${element.id}</td><td> ${element.country}</td><td> ${element.group_letter} </td></tr>`
});

import { countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'


app.get('/', function(req, res) {
    res.send(`
            <h3>Welcome ${os.userInfo().username }</h3>
            <p>${os.userInfo().homedir}</p>
            <p> ${date().format("YYYY-MM-DD h:mm:ss")}</p>
            <p> HTTP Code : ${res.statusCode} </p> 
            <p> Node server and Express runing on port ${port}</p> 
            ${getUnicodeFlagIcon('US')}
            <table><tr><th>Id</th><th>Country</th><th>Group</th></tr>${dom}</table>
            `
    )
});


app.listen(port, () =>
    console.log(`Node server and Express runing on port ${port}`)
);
