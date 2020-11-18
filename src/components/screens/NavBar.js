import React from 'react';
import {Link} from 'react-router-dom';

//key
import {USER_KEY} from '../../client/utils/localkeys';

const Nav = ()=>{
    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">Intagram</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><div style={{color:"black"}} onClick={()=>{
            localStorage.setItem(USER_KEY,"");
            window.location.reload();
        }}>Logout</div></li>
      </ul>
    </div>
  </nav>
    );
};

export default Nav;