import React, { useEffect, useState } from 'react';
import CoffeeItem from "./coffeeItems";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";

function Coffees(props) {
    // Use a local state to trigger re-renders
    const [localCoffees, setLocalCoffees] = useState(props.myCoffees);

    // Synchronize local state when props.myCoffees changes
    useEffect(() => {
        setLocalCoffees(props.myCoffees);
    }, [props.myCoffees]);

    const handleDelete = async (coffeeId) => {
        try {
            // Optimistically update the UI before the backend operation
            const updatedCoffees = localCoffees.filter(coffee => coffee._id !== coffeeId);
            setLocalCoffees(updatedCoffees);

            // Call the API to delete the coffee from the backend
            await axios.delete(`http://localhost:4000/api/coffee/${coffeeId}`);

            // Update the parent state if it's being managed outside
            props.setMyCoffees(updatedCoffees);
        } catch (error) {
            console.error("Error deleting coffee: ", error);
            // Fetch the latest list of coffees from the parent state or server
            // to ensure UI consistency in case of failure
            setLocalCoffees(props.myCoffees);
        }
    };

    if (!localCoffees || localCoffees.length === 0) {
        return <h2>No coffees to display, Add your favourite Coffee!</h2>;
    }

    return (
        <div className="custom-section-2">
            <h2>Favourite Coffee</h2>
            <Row className="d-flex align-items-stretch">
                {localCoffees.map((coffee) => (
                    <Col md={4} sm={6} xs={12} key={coffee._id} className="d-flex">
                        <CoffeeItem
                            myCoffee={coffee}
                            onDelete={handleDelete}
                            ReloadData={props.ReloadData}  // Add this if ReloadData is indeed needed
                        />

                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Coffees;
