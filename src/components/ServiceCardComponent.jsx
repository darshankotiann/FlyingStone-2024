import React, { useState } from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const ServiceCardComponent = ({ service }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div key={service.id} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className=" overflow-hidden max-w-sm p-6 bg-[#EAF0F8] relative  border border-gray-200 rounded-lg shadow ">
            <img src={service.img} className="w-[2rem] mb-2" />
            <a href="#">
                <h5 className={montserrat.className + " mb-2 text-2xl font-bold tracking-tight text-[#1D1934]"}>{service.name}</h5>
            </a>
            <p className={montserrat.className + " text-sm text-[#B5B4BD] mb-3"}>{service.content}</p>
            <div className={isHover ? 'absolute p-5 top-0 left-0 w-full h-full z-20 bg-[#e0e9f5] duration-500' : "absolute left-0 -top-full w-full h-full z-20 bg-[#e0e9f5] duration-500"}>
                <p className={montserrat.className + " text-sm text-black mb-3"}>{service.description}</p>

            </div>
        </div>
    )
}

export default ServiceCardComponent