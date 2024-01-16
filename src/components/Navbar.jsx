"use client"
import React, { useState } from "react";
import Image from "next/image"
import { Pacifico, Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ['latin'], weight: ["variable"] })
const Navbar = () => {

    return (
        <header>
            <nav class="bg-white fixed w-full z-20 top-0 left-0 border-b drop-shadow-sm">
                <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
                    <a class="logo" href="#">
                        <Image src="/Assets/logo.png" width={100} height={100} />
                    </a>
                    <input type="checkbox" id="check" />
                    <span class="menu bg-white lg:bg-white flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out">
                        <li ><a className={nunito.className + "text-md  text-[#000] font-bold"} href="/">Home</a></li>
                        <li><a className={nunito.className + " text-md   text-[#000] font-bold"} href="/about">About</a></li>
                        <li><a className={nunito.className + " text-md    text-[#000] font-bold"} href="/our-service">Our Services</a></li>
                        <li><a className={nunito.className + " text-md    text-[#000] font-bold"} href="/team">Our Team</a></li>
                        <li><a className={nunito.className + " text-md    text-[#000] font-bold"} href="/blogs">Blogs</a></li>
                        <li><a className={nunito.className + " text-md    text-[#000] font-bold"} href="/contact-us">Contact Us</a></li>
                        <label for="check" class="close-menu text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </label>
                    </span>
                    <label for="check" class="open-menu ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                    </label>
                </ul>
            </nav>
        </header>


        
    )
}

export default Navbar;