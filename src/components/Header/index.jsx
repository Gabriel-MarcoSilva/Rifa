import React from "react";
import "./style.css"
import logo from "../../Images/logoRAS.png"

const Header = () =>{
    return(
        <div className="header">
           {/* <img src={logo} alt="logo RAS"/>*/ }

           <div className="container-image">
                <img src={logo} className="logo"/>
           </div>
           
        </div>
    )
}

export default Header