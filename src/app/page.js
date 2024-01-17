"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import Navbar from '@/components/Navbar'
import HeroSectionComponent from '@/components/HeroSectionComponent'
import AboutUsComponents from '@/components/AboutUsComponent'
import ServiceComponent from '@/components/ServiceComponent'
import TeamComponent from '@/components/TeamComponent'
import JoinUs from '@/components/JoinUsComponent'
import ContactUsComponent from '@/components/ContactUsComponent'
import Footer from '@/components/Footer'


import { Pacifico, Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })
// const montserrat = montserrat({ subsets: ['latin'], weight: ["variable"] })
export default function Home() {
  const [services, setServices] = useState([]);
  const [profiles, setProfiles] = useState([])
  const [aboutContent, setAboutContent] = useState({
    aboutDiscription: "...loading",
    missionContent: "...loading",
    vissionContent: "...loading"
  });

  useEffect(() => {
    setServices([{
      name: "Photography", img: "/assets/camera.png", content: `we expertly capture the essence of your story, creating captivating visuals that leave a
          lasting impact on your audience.
          
      `},
    {
      name: "Cinematography", img: "/assets/studio.png", content: ` As our expert cinematographers capture the essence of your narrative,
      delivering an unforgettable visual experience that resonates with your audience` },
    {
      name: "Brand Shoots", img: "/assets/video.png", content: `Creating a powerful narrative that resonates, inspires, and
      influences your target market` },
    {
      name: "Production Services", img: "/assets/production.png", content: `Trust Flying Stone Films' production services to bring your vision
      to life, handling pre-production logistics etc` },
    {
      name: "Advertisements", img: "/assets/ads.png", content: `Flying Stone Films crafts compelling and visually
      captivating advertisements that captivate audiences`},
    {
      name: "Portfolio Shoot", img: "/assets/photography.png", content: `Flying Stone Films offers exceptional portfolio shoots that showcase
      your unique talents` },
    {
      name: "Short Films", img: "/assets/film.png", content: `Flying Stone Films creates captivating short films that immerse
      audiences in powerful storytelling` },
    {
      name: "Web Series", img: "/assets/server.png", content: `Flying Stone Films creates captivating web series
      that transport audiences into immersive storylines` }, {
      name: "Royal Weddings & Extravagant Events", content: `Trust Flying Stone Films to capture every
      enchanting detail, from opulent decor to heartfelt vows`, img: "/assets/wedding.png"
    }])

    setProfiles([
      {
        key: "1",
        profileImg: "/assets/team/anup.png",
        name: "Anup Poddar",
        designation: "Producer",
        description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
      },
      {
        key: "2",
        profileImg: "/assets/team/dhruv.jpg",
        name: "Dhruv Murarka",
        designation: "Marketing Director",
        description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
      },
      {
        key: "3",
        profileImg: "/assets/team/aishwarya.jpg",
        name: "Aishwarya Meshraam",
        designation: "Executive Producer",
        description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
      },
    ])

    setAboutContent({
      aboutDiscription: "Flying Stone Films is a leading film production services company in India, specializing in providing film production services to international filmmakers who want to shoot in India. With our extensive experience and network in the Indian film industry, we offer top-notch film production support and resources to bring your vision to life. From pre-production to post-production, our talented team ensures a seamless film production services process.",
      missionContent: "To ignite imaginations, capture stories, and create timeless cinematic experiences that transcend borders, we offer top-notch film production services. We are committed to providing unparalleled film production services, seamless collaboration, and the utmost attention to detail. Our mission is to be the go-to film production services company in India for international filmmakers, delivering exceptional results that exceed expectations.",
      vissionContent: "To revolutionize the global film industry, Flying Stone Films offers comprehensive film production services. Our vision is to be the go-to destination for immersive production experiences. We create a collaborative environment where filmmakers can bring captivating stories to life on the silver screen. Through state-of-the-art facilities, cutting-edge technology, and a talented team, we aim to elevate filmmaking."
    })

  }, []);
  return (
    <>
      <Navbar />
      <HeroSectionComponent />
      <AboutUsComponents aboutContent={aboutContent} />
      <TeamComponent profiles={profiles} />
      <JoinUs />
      <ServiceComponent />
      <ContactUsComponent />
      <Footer />
    </>
  )
}
