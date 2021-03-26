import React, { Component } from 'react'

export default class ContentTittle extends Component {
    render() {
        return (
            <div className="bg-slider">
                <div className="bg-navbar h-72 w-full ml-auto flex justify-between">
                    <div>
                        <h1 className="border-line border-t-8 inline-block mt-20 mx-24 w-24"> </h1>
                        <h1 className="text-white font-bold mx-24 text-2xl">Discover Movies</h1>
                    </div>
                    <div className="mt-24 mx-20">
                        <span class="px-2 py-1 text-sm leading-none text-red-100">My movies</span>
                        <span class="px-2 py-1 text-sm leading-none text-red-100 bg-search rounded-full">2 movies</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}
