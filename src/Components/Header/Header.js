import React,{useContext} from 'react';
import {useHistory,Link} from 'react-router-dom'

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, firebaseContext } from '../../context/firebaseContext';


function Header() {

    const {user} =useContext(authContext)
    const {firebase}=useContext(firebaseContext)

    const history= useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>history.push('/')} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span onClick={()=>{if(!user){
          history.push('./login')
        }}} >{user ? user.displayName :'login'}</span>
          <hr />
        </div>
         {user && <span onClick={()=>{
          firebase.auth().signOut()
          history.push("/")
         }}>logout</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create'>SELL</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
