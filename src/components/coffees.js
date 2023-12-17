import React from 'react';
import CoffeeItem from "./coffeeItems";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Coffees(props) {
    // Function to call after a coffee is deleted
    const handleDelete = (coffeeId) => {
        // Ensure myCoffees is an array before filtering
        if (Array.isArray(props.myCoffees)) {
            const updatedCoffees = props.myCoffees.filter(coffee => coffee._id !== coffeeId);
            props.setMyCoffees(updatedCoffees);
        }
    };

    // Check if myCoffees is not an array or is empty
    if (!Array.isArray(props.myCoffees) || props.myCoffees.length === 0) {
        return <h2>No coffees to display, Add your favourite Coffee!</h2>;
    }

    return (
        <div className="custom-section-2">
            <h2>Favourite Coffee</h2>
            <Row className="d-flex align-items-stretch">
                {props.myCoffees.map((coffee) => (
                    <Col md={4} sm={6} xs={12} key={coffee._id} className="d-flex">
                        <CoffeeItem 
                            myCoffee={coffee} 
                            onDelete={() => handleDelete(coffee._id)} 
                            ReloadData={props.ReloadData} 
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Coffees;
