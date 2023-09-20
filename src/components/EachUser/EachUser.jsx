/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const EachUser = ({user}) => {

    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid purple',
        padding: '10px',
        borderRadius: '20px',
        margin: '10px' 
    }

    const handleDetails = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div style={userStyle} className="">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}> Show Details</Link><br /> <br />
            <button className="btn" onClick={handleDetails}>Click To see Details</button>
        </div>
    );
};

export default EachUser;