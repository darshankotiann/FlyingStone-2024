"use client"
import Navbar from "@/components/Navbar"
import AboutUsComponents from "@/components/AboutUsComponent"
import ServiceComponent from "@/components/ServiceComponent"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
const About = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <AboutUsComponents />
                <ServiceComponent />
                <ContactUsComponent />
                <Footer />
            </div>

        </>
    )
}
export default About