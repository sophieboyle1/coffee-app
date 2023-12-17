import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CoffeeItems(props) {
    // Destructure props for cleaner access to the coffee object's properties
    const { name, description, imageUrl, origin, roast, _id } = props.myCoffee;

    const handleDelete = () => {
        axios.delete('http://localhost:4000/api/coffee/' + _id)
            .then((res) => {
                // Call the ReloadData function from props
                props.ReloadData();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section>
        <div className="custom-section">
                <div className="container">
                    <div className="row">
                        <Card className="mb-3 custom-card d-flex flex-column" style={{ minHeight: '400px' }}> {/* Add margin-bottom for spacing between items */}
                            <Card.Header as="h5">{name}</Card.Header> {/* Use "as" prop to specify the element type */}
                            <Card.Body>
                                <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: 'auto' }} alt={`A delicious cup of ${name}`} />
                                <Card.Text>
                                    {description} {/* Render the description outside of the footer to match other content styles */}
                                </Card.Text>
                                <footer className="blockquote-footer">
                                    Origin: {origin} <br />
                                    Roast: {roast}
                                </footer>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={'/edit/' + _id} className="btn btn-light float-right" id="edit-btn-form">Edit</Link>

                                <Button variant='danger' onClick={handleDelete} className="ml-2">Delete</Button> {/* Add margin-left for spacing */}
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
        </div>
        </section>
    );
}

export default CoffeeItems;


