import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

const AboutUsComponents = ({ aboutContent }) => {

    return (
        <>
            <div className='bg-[#070E17] flex flex-col lg:flex-row py-8 px-[5%] gap-2' >
                <div className='mb-4 lg:mb-0'>
                    <h2 className={montserrat.className + "  text-2xl text-white font-bold !italic"}>About <span className='text-[#98C4FF] !italic'>Us</span></h2>
                    <p className={montserrat.className + " py-3 text-sm text-white"}>
                        {aboutContent.aboutDiscription}
                    </p>
                    <button type="button" onClick={()=>location.href="/about"} class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Discover More</button>
                </div>
                <div className="hidden lg:inline-block h-[250px] mx-4 min-h-[1em] w-1 self-stretch bg-[#306BB9] opacity-100 dark:opacity-50">
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <div>
                        <h2 className={montserrat.className + " text-2xl text-white font-bold !italic"}>Our <span className='text-[#98C4FF] !italic'>Vision</span> </h2>
                        <p className={montserrat.className + " text-sm text-white"}>
                            {aboutContent.vissionContent}
                        </p>
                    </div>
                    <div>
                        <h2 className={montserrat.className + " text-2xl text-white font-bold !italic"}>Our <span className='text-[#98C4FF] !italic'>Mission</span></h2>
                        <p className={montserrat.className + " text-sm text-white"}>
                            {aboutContent.missionContent}
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}
export default AboutUsComponents