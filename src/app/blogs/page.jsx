"use client"
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar"
import BlogCardComponent from "@/components/BlogCardComponent";
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

import { db } from "../../../configurations/firebase_config";
import { collection, query, onSnapshot } from "firebase/firestore";


const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const q = query(collection(db, "blogs"));
        const getBlogs = onSnapshot(q, (querySnapshot) => {
            const blogs = [];
            querySnapshot.forEach((doc) => {
                blogs.push({ ...doc.data(), id: doc.id });
            });
            console.log(blogs)
            setBlogs(blogs);
        });

    }, []);
    return (
        <>
            <Navbar />
            <div className="mt-[120px] p-10">
                <div>
                    <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center  text-[#090F17] font-bold !italic"}>Writings <span className='text-[#98C4FF]'>From our team</span> </h2>
                    <p className={montserrat.className + " text-sm lg:text-md text-center py-4"}>Trusted experts delivering customized solutions, seamless productions, and captivating storytelling with unwavering commitment to excellence.</p>
                </div>
                <div class="max-w-screen-xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        {
                            blogs?.map((blog) => {
                                console.log(blog.id)
                                return (
                                    <BlogCardComponent id={blog.id} imgURL={blog.img} title={blog.title} description={blog.description} date={blog.date} />
                                )
                            })
                        }
                    </div>
                </div>
                <ContactUsComponent />
            </div>
            <Footer />
        </>
    )
}

export default Blog