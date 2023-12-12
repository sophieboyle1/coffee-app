import React from "react";
import Coffees from './coffees';

function Read() {
    const data = [
        {
            "name": "Espresso",
            "id": "coffee1",
            "description": "A full-flavored, concentrated form of coffee that is served in shots.",
            "imageUrl": "https://link-to-espresso-image.jpg",
            "price": "2.99",
            "origin": ["Ethiopia"],
            "roast": "Dark"
        },
        {
            "name": "Latte",
            "id": "coffee2",
            "description": "A coffee drink made with espresso and steamed milk.",
            "imageUrl": "https://link-to-latte-image.jpg",
            "price": "3.99",
            "origin": ["Colombia"],
            "roast": "Medium"
        },
        {
            "name": "Cappuccino",
            "id": "coffee3",
            "description": "An espresso-based coffee drink that is traditionally prepared with steamed milk foam.",
            "imageUrl": "https://link-to-cappuccino-image.jpg",
            "price": "3.49",
            "origin": ["Brazil"],
            "roast": "Medium"
        }
    ];

    return (
        <div>
            <h2>Hello from Read Component!</h2>
            <Coffees myCoffees={data}></Coffees>
        </div>
    );

}

export default Read;