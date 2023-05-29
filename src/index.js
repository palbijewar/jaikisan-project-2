const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const route = require('../src/routes/route');

dotenv.config();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/jaiKisan", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)

app.listen(process.env.PORT || 5000,()=>{
   console.log(`server running successfuly on PORT !`)
});

