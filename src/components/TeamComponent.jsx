import React, { useState, useEffect } from 'react'
import { Montserrat } from "next/font/google";
import { useParams } from "next/navigation"


const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const TeamComponent = ({ profiles }) => {
    return (
        <>
            <div className='bg-[#0A111B] p-10'>
                <div className=''>
                    <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center text-white font-bold !italic"}>Our <span className='text-[#98C4FF]'>Team</span> </h2>
                    <p className={montserrat.className + " text-sm lg:text-md text-center text-white py-4"}>Trusted experts delivering customized solutions, seamless productions, and captivating storytelling with unwavering commitment to excellence.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-4'>
                    {
                        profiles?.map((profile) => {
                            return (
                                <div key={profile.key} className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900">
                                    <img src={profile.profileImg} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                    <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                                        <div className="my-2 space-y-1">
                                            <h2 className="text-lg font-semibold text-white">{profile.name}</h2>
                                            <h2 className="text-md font-semibold text-[#306BB9]">{profile.designation}</h2>
                                            <p className="px-5 text-xs sm:text-base text-white">{profile.description}</p>
                                        </div>
                                        <div className="flex justify-center pt-2 space-x-4 align-center">
                                            <a rel="noopener noreferrer" href={profile.imdb} aria-label="GitHub" className="p-2 rounded-md text-white hover:dark:text-violet-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.25rem] fill-current" viewBox="0 0 24 24" id="imdb"><path d="M5 15.001a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5zM11 15.001a.5.5 0 0 1-.5-.5v-4.5h-.09l-.92 4.598a.5.5 0 0 1-.98 0l-.92-4.598H7.5v4.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .49.402L9 11.951l.51-2.549a.5.5 0 0 1 .49-.401h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zM14 15.001h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5zm-.5-1h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-.5v4zM17 15.001a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5z"></path><path d="M18 15.001c-.827 0-1.5-.673-1.5-1.5v-2c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v2c0 .827-.673 1.5-1.5 1.5zm0-4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5z"></path><path d="M21 17.001H3a2.503 2.503 0 0 1-2.5-2.5v-5c0-1.378 1.122-2.5 2.5-2.5h18c1.378 0 2.5 1.122 2.5 2.5v5c0 1.378-1.122 2.5-2.5 2.5zm-18-9c-.827 0-1.5.673-1.5 1.5v5c0 .827.673 1.5 1.5 1.5h18c.827 0 1.5-.673 1.5-1.5v-5c0-.827-.673-1.5-1.5-1.5H3z"></path></svg>
                                            </a>
                                         
                                            <a rel="noopener noreferrer" href={profile.link} aria-label="Email" className="p-2 rounded-md text-white hover:dark:text-violet-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full text-center pt-8'>
                    <button type="button" onClick={() => location.href = "/team"} class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View More</button>
                </div>
            </div>
        </>
    )
}

export default TeamComponent