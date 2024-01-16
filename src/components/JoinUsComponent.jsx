import Image from 'next/image'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const JoinUs = () => {
    return (
        <div className='relative w-full h-screen  flex flex-col justify-center items-center'>
            <div className="">
                <Image
                    src="/assets/contact-us-banner.png"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt="flying stone hero image"
                />
            </div>

            <div className='relative mt-[114px] flex flex-col items-center z-10 gap-3'>
                <div className='text-center'>
                    <h2 className={montserrat.className + " text-3xl lg:text-6xl uppercase text-white font-bold !italic"}>Capturing Every</h2>
                    <h2 className={montserrat.className + " text-3xl lg:text-6xl uppercase  text-[#98C4FF] font-bold !italic"}>Moment Live</h2>
                </div>
                <p className={montserrat.className + " font-normal text-center text-sm lg:text-md text-white"}>
                    Experience the Magic of Indian Cinema, Uniting Hearts Worldwide. From Bollywood to Global Screens, We Create Cinematic Wonders.
                </p>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Discover More</button>
            </div>
        </div>
    )
}

export default JoinUs