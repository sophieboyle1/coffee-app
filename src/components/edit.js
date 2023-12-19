import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    // Get the "id" parameter from the URL using useParams
    let { id } = useParams();

    // State variables to manage the form fields
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState('');
    const [roast, setRoast] = useState('');

    // Use the useNavigate hook to programmatically navigate to other pages
    const navigate = useNavigate();

    // useEffect hook to fetch coffee data for editing
    useEffect(() => {
        // Make a GET request to fetch the coffee data based on the "id" parameter
        axios.get('http://localhost:4000/api/coffee/' + id)
            .then((response) => {
                // Update the state with the fetched coffee data
                setName(response.data.name);
                setImageUrl(response.data.imageUrl);
                setDescription(response.data.description);
                setOrigin(response.data.origin);
                setRoast(response.data.roast);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // The empty dependency array ensures this effect runs only once

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the coffee object from the current state
        const coffee = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            origin: origin,
            roast: roast
        };

        // Make a PUT request to update the coffee data based on the "id" parameter
        axios.put('http://localhost:4000/api/coffee/' + id, coffee)
            .then((res) => {
                // Navigate to the "read" page on successful update
                navigate('/read');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        // The form section for editing a coffee entry
        <section className="custom-section form-section">
            <div className="container">
                <div className="row">
                    <h2>Edit Coffee Details</h2>
                    <form onSubmit={handleSubmit} className="contact-form-text">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="coffee-name" className="form-label">Coffee Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="coffee-name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="coffee-image-url" className="form-label">Coffee Image URL:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="coffee-image-url"
                                    value={imageUrl}
                                    onChange={(e) => { setImageUrl(e.target.value) }}
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="coffee-description" className="form-label">Coffee Description:</label>
                                <textarea
                                    className="form-control"
                                    id="coffee-description"
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }}
                                    rows="3"
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="origin" className="form-label">Origin:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="origin"
                                    value={origin}
                                    onChange={(e) => { setOrigin(e.target.value) }}
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="roast" className="form-label">Roast:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="roast"
                                    value={roast}
                                    onChange={(e) => { setRoast(e.target.value) }}
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}