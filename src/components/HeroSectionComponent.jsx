import Image from 'next/image'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const HeroSectionComponent = () => {
    return (
        <div className='relative w-full h-screen  flex flex-col justify-center items-center'>
            <div className="">
                <Image
                    src="/assets/hero-section.png"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt="flying stone hero image"
                />
            </div>
            <div className='relative mt-[114px] flex flex-col items-center z-10 gap-3 lg:w-1/2 text-center px-5 lg:px-0'>
                <div className='text-center'>
                    <h2 className={montserrat.className + " text-2xl lg:text-5xl uppercase text-white font-bold !italic"}>International Film </h2>
                    <h2 className={montserrat.className + " text-2xl lg:text-5xl uppercase  text-[#98C4FF] font-bold !italic"}>Production Specialists</h2>
                </div>
                <p className={montserrat.className + " font-normal text-center text-sm lg:text-md text-white"}>
                    Welcome to our film production services company in India, where we make international filmmaking dreams come true with our film production services. With our expertise and resources, we provide unparalleled support to filmmakers seeking to create their next cinematic masterpiece using our film production services. Let us be your partner in bringing your vision to life through our film production services.
                </p>
                <button type="button" onClick={()=>location.href="/about"} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Discover More</button>
            </div>
        </div>
    )
}
export default HeroSectionComponent