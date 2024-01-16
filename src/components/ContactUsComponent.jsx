"use client"
import React, { useState } from "react";
import axios from "axios";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const ContactUsComponent = () => {
    const InitialState = {
        subject: "Query from the Website",
        name: "",
        email: "",
        mobileno: "",
        message: ""
    }

    const [FormData, setFormData] = useState(InitialState);
    const HandleEvent = (e) => {
        setFormData({
            ...FormData,
            [e.target.id]: e.target.value
        })

    }
    const HandleForm = (e) => {
        e.preventDefault();
        axios.post('https://flying-stone-email.vercel.app/selfmail', FormData
        ).then((res) => {
            alert("Response Recorded")
            setFormData(InitialState)
        }).catch((err) => {
            console.log(err)
        })
        console.log(FormData);
    }
    return (
        <div className='p-10'>
            <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center  text-[#090F17] font-bold !italic"}>Connect <span className='text-[#98C4FF]'>With us</span> </h2>
            <p className={montserrat.className + " text-sm lg:text-md text-center py-4"}>Trusted experts delivering customized solutions, seamless productions, and captivating storytelling with unwavering commitment to excellence.</p>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className="w-full">
                    <img className='lg:max-w-md mx-auto' src='/assets/contact-us-form.png' />
                </div>
                <div className='w-full'>
                    <form className='max-w-md mx-auto' onSubmit={(e) => { HandleForm(e) }}>
                        <div class="mb-5">
                            <input type="email" placeholder="Eamil" id="email" onChange={HandleEvent} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div class="mb-5">
                            <input type="text" id="mobileno" placeholder="Mobile No" onChange={HandleEvent} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div class="mb-5">
                            <textarea id="message" rows="4" onChange={HandleEvent} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUsComponent