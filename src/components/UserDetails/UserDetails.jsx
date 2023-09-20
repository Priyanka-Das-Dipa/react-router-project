import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const {name, company, website} = user;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Here is the User Details</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
            <p>Company:{company.name}</p>
            <button className="btn" onClick={handleGoBack}>Go Back</button> 
        </div>
        
    );
};

export default UserDetails;