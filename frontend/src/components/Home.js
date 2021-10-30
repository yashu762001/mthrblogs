import React from "react";
import {Link, NavLink} from 'react-router-dom'

const introstyle = {
    marginTop : "15px", 
    fontWeight : "bold", 
    fontFamily : "Festive" , 
    fontSize : "36px"
}

const buttonstyle = {
    backgroundColor : "#ed2939",
    borderRadius : "10px", 
    width : "170px", 
    height : "80px",
    fontWeight : "bold", 
    fontSize : "56px", 
    fontFamily : "Festive" 
}

const Home = ()=> (
    <div class="col-lg-6 mx-auto">
    <p style = {introstyle}>Welcome to The Technical Blogs By Yash Mathur. I am currently a Btech Student At IIT Madras. I am very passionate about technology. I would love to share my knowledge with everyone using this platform.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to='/blog'>
      <button style={buttonstyle} >Blogs</button>
      </Link>
      
    </div>
  </div>
)

export default Home