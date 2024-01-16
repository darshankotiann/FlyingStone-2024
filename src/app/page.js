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

    setProfiles([{
      key: "1",
      profileImg: "https://source.unsplash.com/150x150/?portrait?3",
      name: "Nikhil Murarka",
      designation: "Producer",
      description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
    },
    {
      key: "2",
      profileImg: "https://source.unsplash.com/150x150/?portrait?3",
      name: "Nikhil Murarka",
      designation: "Producer",
      description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
    },
    {
      key: "3",
      profileImg: "https://source.unsplash.com/150x150/?portrait?3",
      name: "Nikhil Murarka",
      designation: "Producer",
      description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
    },
    ])

  }, []);
  return (
    <>
      <Navbar />
      <HeroSectionComponent />
      <AboutUsComponents />
      <ServiceComponent />
      <TeamComponent />
      <JoinUs />
      <ContactUsComponent />
      <Footer />
    </>
  )
}
