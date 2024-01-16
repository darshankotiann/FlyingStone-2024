"use client"
import Navbar from "@/components/Navbar"
import TeamComponent from "@/components/TeamComponent"
import JoinUs from "@/components/JoinUsComponent"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
const Team = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <TeamComponent />
                <JoinUs />
                <ContactUsComponent />
            </div>
            <Footer />
        </>
    )
}
export default Team