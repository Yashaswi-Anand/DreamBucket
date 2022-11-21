const express = require('express');
const port = 8000
const db = require('./config/mongoose')
const app = express()
const userRoute = require('./routes/userRoutes')

app.use(express.urlencoded({extended: true}))
app.use('/', userRoute)

app.get('/', (req,res) =>{
    return res.send('Hello, backend !!!')
})

app.get('/home', (req,res) =>{
    return res.send('Home page!!!')
})

app.listen(port, function(err){
    if(err) {console.log(err);}
    console.log(`Server is running on port: ${port}`);
})