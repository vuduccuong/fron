import React,{useState, useEffect, Fragment} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Nav from '../NavBar';
import axios from 'axios';

//key
import {TOKEN_KEY, USER_KEY} from '../../../client/utils/localkeys';
import './home.css';

const Home = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [hadLogin, setHadLogin] = useState(false);

    const DoLogin = (e)=>{
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
          };
          const data ={
            email:email,
            password:password
          };
        axios.post('https://intagram-apiv1.herokuapp.com/signin',data,headers)
        .then(response=>{
            if(response && response.status === 200){
                localStorage.setItem(TOKEN_KEY, response.data.token);
                localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
                setHadLogin(true);
            }else{
                alert("thất bại");
            }
        })
        .catch(err => console.log(err));
    };

    useEffect(()=>{
        console.log('re render');
        const strUser = localStorage.getItem(USER_KEY);
        if(strUser){
            setHadLogin(true);
            history.push('/');
        }
    },[hadLogin,history]);

    return(
       !hadLogin ? 
       <main className="main-app">
       <article className="main-article">
           <div className="main-article__right">
               {/* <image className="" src=""/>
               <image className="" src=""/>
               <image className="" src=""/>
               <image className="" src=""/> */}
           </div>
           <div className="main-article__left">
               <div className="main-left-login">
                   <h2 className="brand-logo">Intagram</h2>
                   <div className="form-login">
                       <form className="form-login__form">
                           <div className="form-area">
                               <div className="form-login__user">
                                   <label>
                                       <span>Số điện thoại, tên người dùng hoặc email</span>
                                       <input
                                       type="text"
                                       value={email}
                                       onChange={e=>{setEmail(e.target.value)}}
                                       />
                                   </label>
                               </div>
                               <div className="form-login__user">
                                   <label>
                                       <span>Mật khẩu</span>
                                       <input
                                           type="password"
                                           value={password}
                                           onChange={e=>{setPassword(e.target.value)}}
                                       />
                                   </label>
                               </div>
                               <div className="form-login__button">
                                   <button
                                       onClick={(e)=>{DoLogin(e)}} 
                                       className="btn waves-effect waves-light w-100"
                                    >
                                        Đăng nhập
                                    </button>
                               </div>
                               <div className="form-login__other">
                                   <div className="other-line"></div>
                                   <div className="other-text">Hoặc</div>
                                   <div className="other-line"></div>
                               </div>
                               <div className="form-login__social">
                                   <a href="/" className="social-facebook">Đăng nhập bằng facebook</a>
                               </div>
                           </div>
                           <a className="fogot-pass" href="/">Quên mật khẩu?</a>
                       </form>
                   </div>
               </div>
               <div className="form-register">
                   <div className="form-register__info">
                       <p>Bạn chưa có tài khoản? </p>
                       <Link to="/signup" style={{marginLeft:10}} >Đăng ký</Link>
                   </div>
               </div>
               <div className="form-dowload">
                   <p className="form-dowload__text">Tải ứng dụng</p> 
                   <div className="form-dowload__photo">
                       <a href="/">
                           <img src={`${process.env.PUBLIC_URL}/images/3025bd262cee.png`} alt="apple" />
                       </a>
                       <a href="/">
                           <img src={`${process.env.PUBLIC_URL}/images/c36c88b5a8dc.png`} alt="chplay" />
                       </a>
                   </div>
               </div>
           </div>
       </article>
   </main>
        : 
        <Fragment>
            <Nav />
            <h2>Home Page</h2>
        </Fragment>
        
    );
};

export default Home; 