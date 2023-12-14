const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
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

app.post('/api/coffee', (req,res)=>{
    console.log(req.body);
    res.send("coffee Created")
})

// A simple GET route for the root of the server
app.get('/', (req, res) => {
    res.send('Welcome to the Coffee API!');
});

// A GET route to send back an array of coffees
app.get('/api/coffees', (req, res) => {
    const coffees = [
        {
            "id": "coffee1",
            "name": "Espresso",
            "description": "A full-flavored, concentrated form of coffee that is served in shots.",
            "imageUrl": "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg",
            "origin": "Italy",
            "roast": "Dark"
        },
        {
            "id": "coffee2",
            "name": "Latte",
            "description": "A coffee drink made with espresso and steamed milk.",
            "imageUrl": "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.latte_.updated-6483.jpg",
            "origin": "Italy",
            "roast": "Medium"
        },
        {
            "id": "coffee3",
            "name": "Cappuccino",
            "description": "An espresso-based coffee drink traditionally prepared with steamed milk foam.",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",
            "origin": "Italy",
            "roast": "Medium"
        }
    ];

    res.json({
        myCoffees: coffees,
        "coffee data works":"Hello coffees"
    }) 
});

app.listen(port, () => {
    console.log(`Coffee API listening on port ${port}`);
});

