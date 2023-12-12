import Card from 'react-bootstrap/Card';

function CoffeeItems(props) {
    // Destructure props for cleaner access to the coffee object's properties
    const { name, description, imageUrl, origin, roast } = props.myCoffee;

    return (
        <div>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={imageUrl} style={{ width: '150px', height: '150px' }} alt={`A delicious cup of ${name}`} />
                        <footer className="blockquote-footer">
                            <p>{description}</p> {/* Make sure to render the description */}
                            Origin: {origin} <br />
                            Roast: {roast}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeItems;


