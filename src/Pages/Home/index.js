import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import Slider from '../../Components/Slider'
import Content from '../../Components/Content'
import Footer from '../../Components/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Slider/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
