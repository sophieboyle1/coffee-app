import React from 'react';
import CoffeeItem from "./coffeeItems";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Coffees(props){
    if (!Array.isArray(props.myCoffees)) {
        // If `myCoffees` is not an array, return a fallback UI or null
        return <div>No coffees available</div>;
    }

    return (
        <div className="custom-section-2">
        <h2>Favourite Coffee</h2>
        <Row className="d-flex align-items-stretch">
            {props.myCoffees.map((coffee) => {
                return (
                    <Col md={4} sm={6} xs={12} key={coffee._id} className="d-flex">
                        <CoffeeItem myCoffee={coffee} ReloadData={props.ReloadData} />
                    </Col>
                );
            })}
        </Row>
        </div>
    );
}

export default Coffees;
