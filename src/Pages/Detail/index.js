import React, { Component } from 'react'
import Navbar from '../../Components/Navbar'
import DetailMovie from '../../Components/DetailMovie'
import Review from '../../Components/Review'
import Recommendation from '../../Components/Recommendation'
import Footer from '../../Components/Footer'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <DetailMovie/>
                <Review/>
                <Recommendation/>
                <Footer/>
            </div>
        )
    }
}
