const cors = require('cors')
var bodyParser = require('body-parser')
var express = require("express")
var app = express()
const data = require('./credentials.json')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//CORS!!!!
// app.use(cors("http://localhost:3000"))
app.use(cors())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/', async function(req, res){
    res.send(data)
})

app.listen(8000, function(){
    console.log("Connected to Port:8000")
})