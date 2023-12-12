import Card from 'react-bootstrap/Card';

function CoffeeItem(props) {
    // Destructure props for cleaner access to the coffee object's properties
    const { name, description, imageUrl, price, origin, roast } = props.myCoffee;

    return (
        <div>
            <Card>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={imageUrl} alt={`A delicious cup of ${name}`} />
                        <footer>
                            Price: ${price} <br />
                            Origin: {origin.join(', ')} <br />
                            Roast: {roast}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CoffeeItem;
