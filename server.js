const express       =require ('express')
const mongoose      =require('mongoose')
const morgan        =require('morgan')
const bodyParser    =require('body-parser')
const userRoutes = require("./routes/users");

mongoose.connect('mongodb://localhost:27017/Ecommerce',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify: false,})
const db = mongoose.connection
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('database connection established')

})
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/users", userRoutes)
const PORT  =process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})