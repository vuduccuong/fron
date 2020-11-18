import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../context/AppProvider';

//key
import {USER_KEY} from '../../client/utils/localkeys';

const Nav = ()=>{
  const {isLg} = useContext(AppContext);

  const ListNav = ()=>{
    return(
      isLg ? [
        <li><Link to="/profile">Profile</Link></li>,
        <li><div style={{color:"black"}} onClick={()=>{
          localStorage.setItem(USER_KEY,"");
          window.location.reload();
      }}>Logout</div></li>
      ]
       :
      [
        <li><Link to="/login">SignIn</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    )
  };

    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">Intagram</Link>
      <ul id="nav-mobile" className="right ">
        {ListNav()}
      </ul>
    </div>
  </nav>
    );
};

export default Nav;