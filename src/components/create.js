import { useState } from "react";
import axios from "axios";

function Create() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState(''); 
    const [roast, setRoast] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("name " + name);

        // Construct the coffee object from the state
        const newCoffee = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            origin: origin,
            roast: roast
        };

        // Make a POST request to add the new coffee
        axios.post('http://localhost:4000/api/coffee', newCoffee)
        .then()
        .catch();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Coffee Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Coffee Image URL: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={imageUrl}
                        onChange={(e) => { setImageUrl(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Coffee Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Origin:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={origin}
                        onChange={(e) => { setOrigin(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Roast:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={roast}
                        onChange={(e) => { setRoast(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Add Coffee"></input>
            </form>
        </div>
    );
}

export default Create;
