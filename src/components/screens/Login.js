import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

//key
import {TOKEN_KEY, USER_KEY} from '../../client/utils/localkeys';

const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const DoLogin = ()=>{
        const headers = {
            'Content-Type': 'application/json',
          };
          const data ={
            email:email,
            password:password
          };
        axios.post('/signin',data,headers)
        .then(response=>{
            if(response && response.status === 200){
                localStorage.setItem(TOKEN_KEY, response.data.token);
                localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
                history.push('/');
            }else{
                alert("thất bại");
            }
        })
        .catch(err => console.log(err));
    };
    return(
        <div className="my-card">
        <div className="card auth-card">
            <h2 className="brand-logo">Intagram</h2>
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
            <button 
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={()=>{DoLogin()}}
            >
                Login
                <i className="material-icons right"></i>
            </button>
      </div>
      </div>
    );
};

export default Login;