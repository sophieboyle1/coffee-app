const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

// Use CORS to allow cross-origin requests
app.use(cors());

// Custom middleware to set HTTP headers for CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require("body-parser");

// Configuring body-parser to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importing and configuring mongoose for MongoDB interactions
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://[your-mongodb-connection-string]');
}

// Define a schema for the coffee data
const coffeeSchema = new mongoose.Schema({
    name: String,
    imageURL: String,
    description: String,
    origin: String,
    roast: String
})

// Create a model from the schema
const coffeeModel = mongoose.model('my_coffees', coffeeSchema);

// Route to handle DELETE request
app.delete('/api/coffee/:id', async (req, res) => {
    console.log('Deleting: ' + req.params.id);
    let coffee = await coffeeModel.findByIdAndDelete({ _id: req.params.id });
    res.send(coffee);
})

// Route to handle PUT request for updating data
app.put('/api/coffee/:id', async (req, res) => {
    console.log("Update: " + req.params.id);

    let coffee = await coffeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(coffee);
})

// Route to handle POST request for creating new data
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

// Route to send a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Coffee API!');
});

// Route to get all coffee data
app.get('/api/coffees', async (req, res) => {

    let coffees = await coffeeModel.find({});

    console.log(coffees);
    res.json({ myCoffees: coffees });
})

// Route to get a specific coffee by ID
app.get('/api/coffee/:id', async (req, res) => {
    console.log(req.params.id);
    let coffee = await coffeeModel.findById({ _id: req.params.id })
    res.send(coffee);
})

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Coffee API listening on port ${port}`);
});