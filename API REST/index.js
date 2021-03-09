const express =require("express");
const bodyParser = require ("body-parser")
const app =express()
require('./models/dbconfig')
const postsRoutes = require('./routes/postsController')
const cors = require('cors')

app.use(bodyParser.json())
app.use('/',postsRoutes)
app.use(cors())
//app.use(cors({origin:'http://localhost:3300'}))

app.listen(5500,()=>{
    console.log('server ruining on port 5500');
})