import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CoffeeItems(props) {
    // Extracting individual properties from the myCoffee object passed as props for easier access
    const { name, description, imageUrl, origin, roast, _id } = props.myCoffee;

    // Function to handle the deletion of a coffee item
    const handleDelete = () => {
        // Using axios to send a DELETE request to the server
        axios.delete('http://localhost:4000/api/coffee/' + _id)
            .then((res) => {
                // Calling the onDelete function passed as a prop with the coffee ID
                props.onDelete(_id);
            })
            .catch((error) => {
                // Logging any errors encountered during the DELETE request
                console.log(error);
            });
    };

    return (
        <section>
            <div className="custom-section">
                <div className="container">
                    <div className="row">
                        {/* Displaying each coffee item in a card */}
                        <Card className="mb-3 custom-card d-flex flex-column" style={{ minHeight: '400px' }}>
                            <Card.Header as="h5">{name}</Card.Header> {/* Displaying the name of the coffee */}
                            <Card.Body>
                                {/* Displaying the image of the coffee */}
                                <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: 'auto' }} alt={`A delicious cup of ${name}`} />
                                <Card.Text>
                                    {description} {/* Displaying the description of the coffee */}
                                </Card.Text>
                                <footer className="blockquote-footer">
                                    Origin: {origin} <br /> {/* Displaying the origin of the coffee */}
                                    Roast: {roast} {/* Displaying the roast level of the coffee */}
                                </footer>
                            </Card.Body>
                            <Card.Footer>
                                {/* Link to the edit page for the coffee */}
                                <Link to={'/edit/' + _id} className="btn btn-light float-right" id="edit-btn-form">Edit</Link>

                                {/* Button to delete the coffee, calling handleDelete when clicked */}
                                <Button variant='danger' onClick={handleDelete} className="ml-2">Delete</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoffeeItems;