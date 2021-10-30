import React from "react";
import Layout from '../HigherOrderComponents/Layout'
import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

const titlestyle = {
    fontWeight : "bold", 
    fontSize : "28px", 
    fontFamily : "Festive", 
    marginRight : "15px", 
    textAlign : "center",
    color : "black"
}

const imagestyle = {
    width : "75%",
    height : "300px", 
    marginBottom : "10px", 
    cursor : "pointer", 
    textAlign : "center",
    display : "box"
}

const genstyle = {
    fontSize : "16px",
    fontFamily : "Festive", 
    fontWeight : "bold", 
    color : "black", 
    textAlign : "center"
}


const Blog = ()=> {
    const [blogs, setBlog] = useState([]) ; 
   useEffect(()=> {
    const fetchBlogs= async()=> {
        try {
            const res = await axios.get(`/api/blog/`) ; 
            setBlog(res.data) ; 
            console.log(res.data)
        }

        catch(err) {
            console.log("Error in API Calling")
        }
    }

    fetchBlogs()
   }, [])

   const getBlog = ()=> {
    let list = []
    let result = []
    console.log(blogs)
    blogs.map(blogPost=>{
        return list.push(
           <div>
               <p style = {titlestyle}> {blogPost.title}</p>
               <div style = {{display : "block", textAlign : "center"}}>
                   <Link to = {`/blog/${blogPost.slug}`}>
               <img src = {blogPost.thumbnail} style = {imagestyle} />
               </Link>
               </div>
               <p style = {genstyle}> Author : Yash Mathur </p>
               <p style = {genstyle}> Posted on : {blogPost.day} {blogPost.month}</p>
           </div>
        ) ; 
    }) ; 
    //console.log(list)
    for(let i=0; i<list.length; i++) {
        result.push(
            <div key= {i}>
                <div>
                    {list[i]}
                </div>
            </div>
        )
    }
    return result;
    //return []
}

   return (
    <div className="container mt-3">
        {getBlog()}

    </div>
   ) ; 
 } ; 

export default Blog