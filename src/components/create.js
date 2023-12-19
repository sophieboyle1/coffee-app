import { useState } from "react";
import axios from "axios";

function Create() {
    // useState hooks for managing the form fields and the submission message
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState('');
    const [roast, setRoast] = useState('');
    const [message, setMessage] = useState(''); // State for success or error message

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Construct the coffee object from the current state
        const newCoffee = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            origin: origin,
            roast: roast
        };
        
        // Function to reset the form fields back to initial state
        const resetForm = () => {
            setName('');
            setImageUrl('');
            setDescription('');
            setOrigin('');
            setRoast('');
        };

        // Making a POST request to the server to add the new coffee
        axios.post('http://localhost:4000/api/coffee', newCoffee)
        .then(() => {
            resetForm(); // Reset the form fields on successful POST
            setMessage('Coffee successfully added!'); // Set a success message
        })
        .catch((error) => {
            setMessage('An error occurred: ' + error.message); // Set an error message
        });
    }

    // The form section for creating a new coffee entry
    return (
        <section className="custom-section form-section">
            <div className="container">
                <div className="row">
                    <h2>Add Your Favourite Coffee</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Form fields for adding coffee details */}
                        <div className="row contact-form-text">
                            {/* Input for coffee name */}
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
                            {/* Input for coffee image URL */}
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
                            {/* Textarea for coffee description */}
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
                            {/* Input for coffee origin */}
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
                            {/* Input for coffee roast */}
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
                            {/* Submit button for the form */}
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
