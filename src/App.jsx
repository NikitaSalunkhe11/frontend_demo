import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [usersData, setusersData] = useState([]);
    const getData = async () => {
        const res = await axios.get("http://18.205.115.254:4000/api/users");
        setusersData(res.data.users);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <h1>Test 1</h1>
            <h1>List of users</h1>
            {usersData.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}
export default App;
