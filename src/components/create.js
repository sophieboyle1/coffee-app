import { useState } from "react";

function Create() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: " + name + " Image URL: " + imageUrl + " Description: " + description);
    }

    return (
        <div>
            <h2>This is my Create Coffee Component.</h2>
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
                <input type="submit" value="Add Coffee"></input>
            </form>
        </div>
    );
}

export default Create;
