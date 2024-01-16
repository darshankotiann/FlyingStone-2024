import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const AboutUsComponents = () => {
    return (
        <>
            <div className='bg-[#070E17] flex flex-col lg:flex-row py-8 px-[5%] gap-2' >
                <div className='mb-4 lg:mb-0'>
                    <h2 className={montserrat.className + "  text-2xl text-white font-bold !italic"}>About <span className='text-[#98C4FF] !italic'>Us</span></h2>
                    <p className={montserrat.className + " py-3 text-sm text-white"}>
                        At Flying Stone Films, we are a renowned film production company based in India with over 15 years of industry experience. As a trusted name in the global film industry, we have successfully catered to numerous projects, establishing ourselves as a leading provider of top-quality film production services. With a deep understanding of the ever-evolving film landscape, we combine our expertise, creativity, and technical finesse to bring compelling stories to life on the screen.
                    </p>
                    <button type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Discover More</button>
                </div>
                <div className="hidden lg:inline-block h-[250px] mx-4 min-h-[1em] w-1 self-stretch bg-[#306BB9] opacity-100 dark:opacity-50">
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <div>
                        <h2 className={montserrat.className + " text-2xl text-white font-bold !italic"}>Our <span className='text-[#98C4FF] !italic'>Vision</span> </h2>
                        <p className={montserrat.className + " text-sm text-white"}>
                            Welcome to Flying Stone Films, a leading film production company based in India with over 15 years of operational excellence. Our vision is to be a global powerhouse in the film industry, known for our creative prowess, technical innovation, and unwavering commitment to delivering exceptional cinematic experiences. As we strive to attract clients from across the globe, we aim to forge long-lasting partnerships and bring captivating stories to life on screen.
                        </p>
                    </div>
                    <div>
                        <h2 className={montserrat.className + " text-2xl text-white font-bold !italic"}>Our <span className='text-[#98C4FF] !italic'>Mission</span></h2>
                        <p className={montserrat.className + " text-sm text-white"}>
                            At Flying Stone Films, our primary mission is to deliver unparalleled quality and creativity in every project we undertake. We strive to exceed our clients expectations by meticulously crafting captivating narratives, evoking emotions, and creating visually striking cinematic experiences that leave a lasting impact. As we aim to attract clients from across the globe, our mission is to be recognized as the go-to production company for international projects set in India.
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}
export default AboutUsComponents