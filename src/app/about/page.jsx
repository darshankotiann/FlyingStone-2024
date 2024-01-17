"use client"
import React, { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import AboutUsComponents from "@/components/AboutUsComponent"
import ServiceComponent from "@/components/ServiceComponent"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"

const About = () => {
    const [aboutContent, setAboutContent] = useState({
        aboutDiscription: "...loading",
        missionContent: "...loading",
        vissionContent: "...loading"
    });
    useEffect(() => {
        setAboutContent({
            aboutDiscription: "Flying Stone Films is a leading film production services company in India, specializing in providing film production services to international filmmakers who want to shoot in India. With our extensive experience and network in the Indian film industry, we offer top-notch film production support and resources to bring your vision to life. From pre-production to post-production, our talented team ensures a seamless film production services process. Trust Flying Stone Films, a film production services company, for your next project and discover the beauty and diversity of India's rich cinematic landscape. Contact us today to discuss how our film production services company can help make your film a success.",
            missionContent: "To ignite imaginations, capture stories, and create timeless cinematic experiences that transcend borders, we offer top-notch film production services. We are committed to providing unparalleled film production services, seamless collaboration, and the utmost attention to detail. Our mission is to be the go-to film production services company in India for international filmmakers, delivering exceptional results that exceed expectations. We strive to showcase the rich cultural heritage and breathtaking landscapes of India on the global stage, while fostering creative partnerships and fostering an environment of mutual respect and artistic exploration. At Flying Stone Films, we are dedicated to elevating storytelling and bringing visions to life with passion, integrity, and a commitment to excellence in tv film & video production services.",
            vissionContent: "To revolutionize the global film industry, Flying Stone Films offers comprehensive film production services. Our vision is to be the go-to destination for immersive production experiences. We create a collaborative environment where filmmakers can bring captivating stories to life on the silver screen. Through state-of-the-art facilities, cutting-edge technology, and a talented team, we aim to elevate filmmaking. Our film production services company provides seamless production processes, stunning locations, and a vibrant network of experts. With Flying Stone Films as their partner, filmmakers will discover a seamless production process, stunning locations, and a vibrant network of experts. Our commitment to excellence, creativity, and professionalism drives us forward as we set a new benchmark for the film industry."
        })
    }, [])
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <AboutUsComponents aboutContent={aboutContent} />
                <ServiceComponent />
                <ContactUsComponent />
                <Footer />
            </div>

        </>
    )
}
export default About