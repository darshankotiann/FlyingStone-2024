import React, { useState, useEffect } from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })


const ServiceComponent = () => {
    const [services, setServices] = useState([]);
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
    }, []);
    return (
        <section class="bg-white">
            <div class="py-8 lg:py-16  mx-auto w-full lg:px-32 px-5">
                <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center  text-[#090F17] font-bold !italic"}>Our <span className='text-[#98C4FF]'>Services</span> </h2>
                <p className={montserrat.className + " text-sm lg:text-md text-center py-4"}>Trusted experts delivering customized solutions, seamless productions, and captivating storytelling with unwavering commitment to excellence.</p>
                <div className="flex  flex-wrap gap-5 justify-center ">
                    {services.map((service) => {
                        return (
                            <div class="max-w-sm p-6 bg-[#EAF0F8] border border-gray-200 rounded-lg shadow ">
                                <img src={service.img} class="w-[2rem] mb-2" />
                                <a href="#">
                                    <h5 className={montserrat.className + " mb-2 text-2xl font-bold tracking-tight text-[#1D1934]"}>{service.name}</h5>
                                </a>
                                <p className={montserrat.className + " text-sm text-[#B5B4BD] mb-3"}>{service.content}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div id="works"></div>
        </section>
    )
}
export default ServiceComponent