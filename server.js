require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}))

//Connect database
const URI=process.env.MONGO_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log("Connected to database")
})

//Routes

app.use('/user', require('./routes/userRoutes'))
app.use('/api',require('./routes/categoryRoutes'))
app.use('/api',require('./routes/upload'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log("Server is running on port",PORT)
})