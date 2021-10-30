import React from "react";
import Blog from "./Blog";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const BlogDetail = (props)=> {
    const [blog, setBlog] = useState([])
    const createBlog = ()=> {
        return {__html:blog.content}
    }

    useEffect(()=> {
        const slug = props.match.params.id
        let url = '/api/blog/' + slug
        const fetchData = async() => {
            try {
                const res = await axios.get(url)
                setBlog(res.data)
            }

            catch(err) {

            }
        } ; 

        fetchData()
    }, [props.match.params.id])

    return (
        <div className = 'container mt-3'>
            <h1 className='display-2'> {blog.title}</h1>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr/>
            <Link to='/blog' className='font-weight-bold'>
                Back To Blogs Section
            </Link>
        </div>
    )
} ; 

export default BlogDetail