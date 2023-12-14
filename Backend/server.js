const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.o3nriae.mongodb.net/');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const coffeeSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    description: String,
    origin: String,
    roast: String
})

const coffeeModel = mongoose.model('my_coffees', coffeeSchema);

app.put('/api/coffee/:id', async(req, res)=>{
    console.log("Update: "+req.params.id);
  
    let coffee = await coffeeModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(coffee);
  })

app.post('/api/coffee', (req, res) => {
    console.log(req.body);

    coffeeModel.create({
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description,
        origin: req.body.origin,
        roast: req.body.roast
    })
        .then(() => { res.send("coffee Created") })
        .catch(() => { res.send("coffee NOT Created") });
})

// A simple GET route for the root of the server
app.get('/', (req, res) => {
    res.send('Welcome to the Coffee API!');
});

app.get('/api/coffees', async (req, res) => {

    let coffees = await coffeeModel.find({});

    console.log(coffees);
    res.json({ myCoffees: coffees });
})

app.get('/api/coffee/:id',async (req,res)=>{
    console.log(req.params.id);
    let coffee = await coffeeModel.findById({_id:req.params.id})
    res.send(coffee);
    })

app.listen(port, () => {
    console.log(`Coffee API listening on port ${port}`);
});

