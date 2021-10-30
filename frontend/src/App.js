import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './HigherOrderComponents/Layout'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'

const App = ()=> (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route exact path='/blog' component = {Blog}/>
                <Route exact path = '/blog/:id' component = {BlogDetail} />
            </Switch>
        </Layout>
    </Router>
) ; 

export default App