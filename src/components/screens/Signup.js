import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Signup = ()=>{
const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [check, setCheck] = useState(false);

const PostData = ()=>{
    const headers = {
        'Content-Type': 'application/json',
      };
      const data ={
        name:name,
        password:password,
        email:email,
      };
    axios.post('/signup',data,headers)
    .then(response=>{
        console.log(response);
        if(response.status === 200){
            setCheck(true);
        }
    }, err =>{
        alert("Tài khoản đã tồn tại");
    })
    .catch(err => console.log(err));
};

    return(
        <div className="my-card">
        <div className="card auth-card">
            <h2 className="brand-logo">Signup</h2>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={e=>{setName(e.target.value)}}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={e=>{setEmail(e.target.value)}}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e=>{setPassword(e.target.value)}}
            />
            <input
                type="password"
                placeholder="re password"
            />
            <button 
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={()=>{PostData()}}
            >
                Signup
                <i className="material-icons right"></i>
            </button>
            {
          check? <p>Đăng ký thành công <Link to="/login">Login Now</Link></p>: null
      }
      </div>
      
      </div>
    );
};

export default Signup;