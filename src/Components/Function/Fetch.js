import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const resData = await response.json();
                setData(resData.users);
            } catch (err) {
                setError(err.message);  
            } finally {
                setLoading(false);  
            }
        };
        fetchAllUsers();
    }, []);

 
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th >Id</th>
                    <th >First Name</th>
                    <th >Age</th>
                    <th >Email</th>
                    <th >Address</th>
                    <th >Image</th>
                </tr>
            </thead>
            <tbody style={{textAlign:"center"}}>
                {data.map(user => (
                    <tr key={user.id}>
                        <td >{user.id}</td>
                        <td >{user.firstName}</td>
                        <td >{user.age}</td>
                        <td >{user.email}</td>
                        <td >{user.address.address}</td>
                        <td >
                            <img src={user.image} alt={user.firstName} style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Fetch;
