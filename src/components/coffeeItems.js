import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CoffeeItems(props) {
    // Destructure props for cleaner access to the coffee object's properties
    const { name, description, imageUrl, origin, roast } = props.myCoffee;

    return (
        <div>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={imageUrl} style={{ width: '150px', height: '125px' }} alt={`A delicious cup of ${name}`} />
                        <footer className="blockquote-footer">
                            <p>{description}</p> {/* Make sure to render the description */}
                            Origin: {origin} <br />
                            Roast: {roast}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={'/edit/' + props.myCoffee._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={() => {
                    axios.delete('http://localhost:4000/api/coffee/' + props.myCoffee._id)
                        .then((res) => {
                            // Call the ReloadData function from props
                            props.ReloadData();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}>Delete</Button>

            </Card>
        </div>
    );
}

export default CoffeeItems;


