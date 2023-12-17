import { useState } from "react";
import axios from "axios";

function Create() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState('');
    const [roast, setRoast] = useState('');
    const [message, setMessage] = useState(''); // State for success message

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the coffee object from the state
        const newCoffee = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            origin: origin,
            roast: roast
        };
        
        // reset coffee form 
        const resetForm = () => {
            setName('');
            setImageUrl('');
            setDescription('');
            setOrigin('');
            setRoast('');
        };

        // Make a POST request to add the new coffee
        axios.post('http://localhost:4000/api/coffee', newCoffee)
        .then(() => {
            resetForm(); // Reset form on successful POST
            setMessage('Coffee successfully added!'); // Set success message
        })
        .catch((error) => {
            setMessage('An error occurred: ' + error.message); // Set error message
        });
    }

    return (
        <section className="custom-section form-section">
            <div className="container">
                <div className="row">
                <h2>Add Your Favourite Coffee</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="coffee-name" className="contact-form-text">Coffee Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="coffee-name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="coffee-image-url" className="contact-form-text">Coffee Image URL:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="coffee-image-url"
                                    value={imageUrl}
                                    onChange={(e) => { setImageUrl(e.target.value) }}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="coffee-description" className="contact-form-text">Coffee Description:</label>
                                <textarea
                                    className="form-control"
                                    id="coffee-description"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    rows="3"
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="origin" className="contact-form-text">Origin:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="origin"
                                    value={origin}
                                    onChange={(e) => { setOrigin(e.target.value) }}
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="roast" className="contact-form-text">Roast:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="roast"
                                    value={roast}
                                    onChange={(e) => { setRoast(e.target.value) }}
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">Add Coffee</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    );
}

export default Create;
