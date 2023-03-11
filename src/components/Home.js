import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const callHomePage = async () => {
           try {
//                 const res = await fetch('/home', {
//                     method: "GET",
//                     headers: {
//                         Accept:"application/json",
//                         "Content-Type": "application/json"
//                     },
//                     credentials: "include"
//                 });
               const res=await fetch('https://mernback-jma2.onrender.com/home');
                const data=await res.json();
                setUserData(data);
            } catch (err) {
                console.log(err);
                navigate('/login')
            }
        }
        callHomePage();
    }, [navigate]);
    return (
        <>
            <div>
                <form method='GET'>
                    <p>welcome {userData.name}  </p>
                    <h1 className='heading'>We Are Mern Developer </h1>
                </form>
            </div>
        </>
    )
}
export default Home;
