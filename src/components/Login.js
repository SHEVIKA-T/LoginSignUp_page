import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../styles/login.css";


function Login() {

    const history=useNavigate();
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                name,email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:name}})
                    
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
            
        }
        catch(e){
            console.log(e);

        }
    
    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
            <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Name"  /><br /><br />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br /><br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br /><br />
               <center><input type="submit" onClick={submit} /><br /></center> 

            </form>
            <p>New User?</p>
           
            <Link to="/signup">SignIn</Link><br />

        </div>
    )
}

export default Login