import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let { id } = useParams();

    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState(''); 
    const [roast, setRoast] = useState(''); 

    const navigate = useNavigate();

    useEffect(
        () => {

            axios.get('http://localhost:4000/api/coffee/' + id)
                .then((response) => {
                    setName(response.data.name);
                    setImageUrl(response.data.imageUrl);
                    setDescription(response.data.description);
                    setOrigin(response.data.origin);
                    setRoast(response.data.roast);
                })
                .catch(
                    (error) => {
                        console.log(error);
                    }
                );
        }, []
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const coffee = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            origin: origin,
            roast: roast
        }

        axios.put('http://localhost:4000/api/coffee/' + id, coffee)
            .then((res) => {
                navigate('/read');
            })
            .catch(
                (error) => {
                    console.log(error)
                });
    }
    return (
        <div>
            <h2>Hello from Edit component!</h2>
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