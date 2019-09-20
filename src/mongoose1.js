const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/Class', {useNewUrlParser: true,useUnifiedTopology: true})

const Student = mongoose.model('Student',{
        name: String,
        age: Number
    })

const peter = new Student({
    name: 'peter',
    age: 12
})

peter.save().then((re) => console.log('student saved'+ re));


const carSchema = new mongoose.Schema({
    brand: String,
    type: String,
    color: String,
    city: {type: String, default : '鲁K'}
})

const Car = mongoose.model("Car",carSchema)

const taxi = new Car({
    brand: 'Toyota',
    type: 'mpv',
    color: 'white',
    city: '鲁B'
})

taxi.save().then((re)=>{
    console.log("car saved"+re)
})
