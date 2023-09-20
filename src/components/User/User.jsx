import { useLoaderData } from "react-router-dom";
import EachUser from "../EachUser/EachUser";
import './User.css'

const User = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Our Users : {users.length}</h2>
            <p>Here is our Users.</p>
            <div className="user">
                {
                    users.map(user => <EachUser key={user.id} user={user}></EachUser>)
                }
            </div>            
        </div>
    );
};

export default User;