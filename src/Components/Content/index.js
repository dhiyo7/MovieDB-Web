import React, { Component } from 'react'
import ContentTittle from '../ContentTittle'
import { Link } from 'react-router-dom';
import image from '../../Assets/Images/image1.png'

export default class Content extends Component {
    render() {
        return (
            <>
                <ContentTittle />
                <div>
                    <div className="flex flex-wrap bg-navbar w-full h-screen">
                        <div className="w-3/12 bg-slider p-3">
                            <div className="w-3/4 -mt-28 bg-slider ml-22 text-white border-b-2 border-navbar">
                                <h1 className="px-2 py-2">Sort Result By</h1>
                            </div>
                            <div className="w-3/4 px-1 py-4 bg-slider ml-22 text-white border-b-2 border-navbar">
                                <select className="py-1 px-1 bg-search rounded-full">
                                    <option className="bg-slider">Popularity</option>
                                    <option className="bg-slider">Popularity Descending</option>
                                    <option className="bg-slider">Release Date Ascending</option>
                                    <option className="bg-slider">Popularity Ascending</option>
                                    <option className="bg-slider">Rating Ascending</option>
                                    <option className="bg-slider">Rating Descending</option>
                                </select>
                            </div>
                            <div className="w-3/4 bg-slider ml-22 text-white border-b-2 border-navbar">
                                <h1 className="px-2 py-2">Genres</h1>
                            </div>
                            <div className="w-3/4 bg-slider ml-22 text-white">
                                <ul class="space-y-2 text-sm">
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>Technology</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>History</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>Politics</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>Romance</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>Science</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center space-x-3 p-2 rounded-md font-medium focus:shadow-outline justify-between">
                                            <span>Sports</span>
                                            <input type="checkbox" class="form-checkbox h-3 w-3 text-yellow-600" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="w-9/12 p-3 bg-slider">
                            <div className="flex flex-wrap -m-2">
                                <div className="lg:w-1/3 sm:w-1/2 p-4 -mt-30">
                                    <div className="flex relative">
                                        <div className="bg-gray-500 opacity-80 px-3 py-2 h-12 z-10 ml-55">
                                            7.2
                                    </div>
                                        <img alt="gallery" className="absolute inset-0 h-96 object-cover object-center" src={image} />
                                        <div className="-ml-64 h-96 w-66 px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                            <div className="pl-2 mr-2 mt-2 inline-block ml-16">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            </div>
                                            <p className="font-bold inline-block text-base text-white mb-5">7.3</p>
                                            <h1 className="title-font text-lg font-medium text-white mb-3 text-center">Action</h1>
                                            <Link className="flex mt-10 text-white bg-red-600 border py-2 px-20 focus:outline-none hover:bg-gray-400 rounded-full">View</Link>
                                            <Link className="flex mt-10 rounded-full text-black bg-white border py-2 px-20 focus:outline-none hover:bg-gray-400 hover:text-white" href="./Borrow.html">Add</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4 -mt-30">
                                    <div className="flex relative">
                                        <div className="bg-gray-500 opacity-80 px-3 py-2 h-12 z-10 ml-55">
                                            7.2
                                    </div>
                                        <img alt="gallery" className="absolute inset-0 h-96 object-cover object-center" src={image} />
                                        <div className="-ml-64 h-96 w-66 px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                            <div className="pl-2 mr-2 mt-2 inline-block ml-16">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            </div>
                                            <p className="font-bold inline-block text-base text-white mb-5">7.3</p>
                                            <h1 className="title-font text-lg font-medium text-white mb-3 text-center">Action</h1>
                                            <Link className="flex mt-10 text-white bg-red-600 border py-2 px-20 focus:outline-none hover:bg-gray-400 rounded-full">View</Link>
                                            <Link className="flex mt-10 rounded-full text-black bg-white border py-2 px-20 focus:outline-none hover:bg-gray-400 hover:text-white" href="./Borrow.html">Add</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4 -mt-30">
                                    <div className="flex relative">
                                        <div className="bg-gray-500 opacity-80 px-3 py-2 h-12 z-10 ml-55">
                                            7.2
                                    </div>
                                        <img alt="gallery" className="absolute inset-0 h-96 object-cover object-center" src={image} />
                                        <div className="-ml-64 h-96 w-66 px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                            <div className="pl-2 mr-2 mt-2 inline-block ml-16">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            </div>
                                            <p className="font-bold inline-block text-base text-white mb-5">7.3</p>
                                            <h1 className="title-font text-lg font-medium text-white mb-3 text-center">Action</h1>
                                            <Link className="flex mt-10 text-white bg-red-600 border py-2 px-20 focus:outline-none hover:bg-gray-400 rounded-full">View</Link>
                                            <Link className="flex mt-10 rounded-full text-black bg-white border py-2 px-20 focus:outline-none hover:bg-gray-400 hover:text-white" href="./Borrow.html">Add</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 sm:w-1/2 p-4">
                                    <div className="flex relative">
                                        <div className="bg-gray-500 opacity-80 px-3 py-2 h-12 z-10 ml-55">
                                            7.2
                                    </div>
                                        <img alt="gallery" className="absolute inset-0 h-96 object-cover object-center" src={image} />
                                        <div className="-ml-64 h-96 w-66 px-8 py-10 relative z-10 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                            <div className="pl-2 mr-2 mt-2 inline-block ml-16">
                                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            </div>
                                            <p className="font-bold inline-block text-base text-white mb-5">7.3</p>
                                            <h1 className="title-font text-lg font-medium text-white mb-3 text-center">Action</h1>
                                            <Link className="flex mt-10 text-white bg-red-600 border py-2 px-20 focus:outline-none hover:bg-gray-400 rounded-full">View</Link>
                                            <Link className="flex mt-10 rounded-full text-black bg-white border py-2 px-20 focus:outline-none hover:bg-gray-400 hover:text-white" href="./Borrow.html">Add</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="flex mt-10 w-44 text-white bg-red-600 border py-2 px-12 focus:outline-none hover:bg-gray-400 rounded-full mx-auto my-8">Load More</Link>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
