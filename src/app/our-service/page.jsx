"use client"
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import ServiceComponent from "@/components/ServiceComponent";
import ContactUsComponent from "@/components/ContactUsComponent";
import Footer from "@/components/Footer";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../configurations/firebase_config";
import React, { useState, useEffect } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })


const OurService = () => {
    const [workLists, setWorkLists] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "works"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const works = [];
            querySnapshot.forEach((doc) => {
                works.push({ ...doc.data(), id: doc.id });
            });
            setWorkLists(works);
        });
    }, []);
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <ServiceComponent />
                <div class=" mx-auto w-full lg:px-32 px-5">
                    <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center  text-[#090F17] font-bold !italic"}>Our <span className='text-[#98C4FF]'>Works</span> </h2>
                    <p className={montserrat.className + " text-sm lg:text-md text-center py-4"}>Trusted experts delivering customized solutions, seamless productions, and captivating storytelling with unwavering commitment to excellence.</p>
                    <div className="flex flex-row flex-wrap gap-5 ">
                        {workLists.map((workList) => {
                            return (
                                <div class="w-full max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow ">
                                    <a href="#">
                                        <img className="p-2 rounded-t-lg w-full h-[50vh]" src={workList.mainImg} alt="product image" />
                                    </a>
                                    <div class="px-5 pb-5">
                                        <a href="#">
                                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 "> {workList.title}</h5>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <ContactUsComponent />
            </div>
            <Footer />
        </>
    )
}
export default OurService