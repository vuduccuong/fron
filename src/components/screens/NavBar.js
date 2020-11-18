import React from 'react';
import {Link, useHistory} from 'react-router-dom';

//key
import {USER_KEY} from '../../client/utils/localkeys';

const Nav = ()=>{
  const history = useHistory();
    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">Intagram</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><div onClick={()=>{
            localStorage.setItem(USER_KEY,null)
            history.push('/');
        }}>Logout</div></li>
      </ul>
    </div>
  </nav>
    );
};

export default Nav;