import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Login = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const loginUser= async(e)=>{
        e.preventDefault();
        const res=await fetch('https://mernback-jma2.onrender.com/singin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=await res.json();
        console.log(data.mess)
        if(res.status===422){
            console.log("Invalid Login")
        }
        else{
            console.log("Add Cookie");
            setCookie('Name', "coder", { path: '/' });
            console.log("Login Successful");
            navigate('/');
        }
    }
    return (
        <>
        <form method="post">
            <div className="form-outline mb-4">
                <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id="form2Example1" className="form-control" />
                <label className="form-label" for="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} id="form2Example2" className="form-control" />
                <label className="form-label" for="form2Example2">Password</label>
            </div>

            <button type="submit" onClick={loginUser} className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/singup">Register</Link></p>
                <p>or sign up with:</p>
                
            </div>
        </form>
        </>
    )
}
export default Login;
