import React from 'react'
import NavBar from '../components/NavBar'

const Layouts = (props)=> (
    <div>
        <NavBar />
        {props.children}
    </div>
)

export default Layouts