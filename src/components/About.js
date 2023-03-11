import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const About = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        const callAboutPage = async () => {
            try {
//                 const res = await fetch('https://mernback-jma2.onrender.com/about', {
//                     method: "GET",
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     }
//                 });
                const res=await fetch('https://mernback-jma2.onrender.com/about');
                const data = await res.json();
                console.log(cookies.Name);
                console.log(localStorage.getItem('password'));
                console.log(sessionStorage.getItem('cinema'));
                setUserData(data);
                if (!res.status === 200) {
                    const error = new Error(res.error);
                    throw error;
                }
            } catch (err) {
                console.log(err);
                navigate('/login');
            }
        }
        callAboutPage();
    }, [navigate]);
    return (
        <>
            <div className='container'>
                <form method='GET'>
                    <div className="card text-center">
                        <img src="..." className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h1>Cookie Name : {cookies.Name}</h1>
                            <h5 className="card-title">{userData.name}</h5>
                            <p className="card-text">{userData.email}</p>
                            <p className="card-text">{userData.phone}</p>
                            <p className="card-text">{userData.work}</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default About;
