const express = require('express')
var data = require('./data.json')
const app = express()
var cors = require('cors')

app.use(cors())

const port = process.env.PORT || 4000

app.get('/', function(req, res){
	res.send('Welcome to FIFA22 Qatar')
})
app.get('/teams', function(req,res){
	res.send(data)
})
console.log(`Node server listening on localhost:${port}`)
app.listen(port)