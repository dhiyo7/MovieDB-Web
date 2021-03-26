import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Home from "./Home"

export default function Router(){
    return (
        <BrowserRouter>
            <Route path="/" component={Home}/>
            <Route path='/external' component={() => { window.location = 'https://reactjs.org/'; return null;} }/>

        </BrowserRouter>
    )
}