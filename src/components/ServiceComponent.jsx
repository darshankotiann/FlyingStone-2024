import React, { useState, useEffect } from 'react'
import { Montserrat } from "next/font/google";
import ServiceCardComponent from './ServiceCardComponent';
const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })


const ServiceComponent = () => {
    const [services, setServices] = useState([]);
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
        setServices([{
            name: "TV Series",
            img: "/assets/camera.png",
            content: `With our expertise in TV series productions, we have mastered the art of storytelling and visual excellence. Our focus remains on creating compelling and entertaining TV series for diverse genres and audiences.`,
            description: `With our expertise in TV series productions, we have mastered the art of storytelling and visual excellence. Our focus remains on creating compelling and entertaining TV series for diverse genres and audiences. We are adept at employing our skills and knowledge to deliver exceptional results.`
        },
        {
            name: "Cinematography",
            img: "/assets/studio.png",
            content: `Our skilled cinematographers bring visual narratives to life, employing their expertise in Best Cinematography Services to capture stunning visuals and enhance the storytelling experience.`,
            description: `Our skilled cinematographers bring visual narratives to life, employing their expertise in Best Cinematography Services to capture stunning visuals and enhance the storytelling experience.`
        },
        {
            name: "Brand Shoots",
            img: "/assets/video.png",
            content: `We excel in producing brand shoots that effectively showcase the essence and identity of a brand, helping businesses connect with their target market through visual storytelling.`,
            description: `We excel in producing brand shoots that effectively showcase the essence and identity of a brand, helping businesses connect with their target market through visual storytelling.`
        },
        {
            name: "Production Services",
            img: "/assets/production.png",
            content: `We provide film production services end-to-end, 
            including pre-production, production, and post-production,
             ensuring a seamless and efficient filmmaking process.`,
            description: `We provide film production services end-to-end, 
            including pre-production, production, and post-production, 
            ensuring a seamless and efficient filmmaking process.
             As one of the leading India film production companies, 
             we take pride in offering comprehensive services for all your filming needs.`
        },
        {
            name: "Advertisements",
            img: "/assets/ads.png",
            content: `We are proud to be known as the Advertisement and Commercial Production Experts. Our expertise lies in producing captivating advertisements and commercials that effectively convey the brand message and capture the audience's attention. `,
            description: `We are proud to be known as the Advertisement and Commercial Production Experts. Our expertise lies in producing captivating advertisements and commercials that effectively convey the brand message and capture the audience's attention. With years of experience in this field, we have honed our skills to deliver exceptional results. Trust us to handle all aspects of advertisement and commercial production, from brainstorming creative ideas to meticulous execution. `
        },
        {
            name: "Portfolio Shoot",
            img: "/assets/photography.png",
            content: `Flying Stone Films offers exceptional portfolio shoots that showcase
      your unique talents`,
            description: `Flying Stone Films offers exceptional portfolio shoots that showcase
            your unique talents`
        },
        {
            name: "Short Films",
            img: "/assets/film.png",
            content: `Our team is passionate about creating impactful short films that resonate with audiences and convey powerful messages within a limited timeframe.`,
            description: `Our team is passionate about creating impactful short films that resonate with audiences and convey powerful messages within a limited timeframe.`
        },
        {
            name: "Web Series",
            img: "/assets/server.png",
            content: `Our expertise in Web Series Productions extends to creating engaging and high-quality web series, catering to the growing demand for digital content in the Web Series Productions industry`,
            description: `Our expertise in Web Series Productions extends to creating engaging and high-quality web series, catering to the growing demand for digital content in the Web Series Productions industry`
        },
        {
            name: "Luxury Wedding Shoots",
            content: `We offer exquisite and personalized luxury wedding shoot services, ensuring that every precious moment is beautifully captured and preserved.`,
            description: `We offer exquisite and personalized luxury wedding shoot services, ensuring that every precious moment is beautifully captured and preserved.`,
            img: "/assets/wedding.png"
        }])
    }, []);
    return (
        //Comment
        <section class="bg-white">
            <div class="py-8 lg:py-16  mx-auto w-full lg:px-32 px-5">
                <h2 className={montserrat.className + " text-2xl lg:text-4xl uppercase text-center  text-[#090F17] font-bold !italic"}>Our <span className='text-[#98C4FF]'>Services</span> </h2>
                <p className={montserrat.className + " text-sm lg:text-md text-center py-4"}>We provide a comprehensive range of film production services. Our objective is to meet all your needs and deliver high-quality work. Trust us for pre-production, production support, and post-production services. Let our company be your partner in bringing your vision to life.</p>
                <div className="flex  flex-wrap gap-5 justify-center ">
                    {services.map((service) => {
                        return (
                            <>
                                <ServiceCardComponent service={service} />
                            </>
                        )
                    })}
                </div>

            </div>
            <div id="works"></div>
        </section>
    )
}
export default ServiceComponent