import axios from "axios";
import Coffees from './coffees';
import { useEffect, useState } from "react";

function Read() {
    // State to store the coffee data
    const [data, setData] = useState([]);

    // Function to fetch coffee data from the API
    const fetchData = () => {
        axios.get('http://localhost:4000/api/coffees')
            .then((response) => {
                // Set the fetched data in the state
                setData(response.data.myCoffees);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {/* Pass the coffee data to the Coffees component */}
            <Coffees myCoffees={data} setMyCoffees={setData} ReloadData={fetchData}></Coffees>
        </div>
    );
}

export default Read;