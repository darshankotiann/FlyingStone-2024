"use client"
import Navbar from "@/components/Navbar"
import TeamComponent from "@/components/TeamComponent"
import JoinUs from "@/components/JoinUsComponent"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"
const Team = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        setProfiles([
            {
                key: "1",
                profileImg: "/assets/team/anup.png",
                name: "Anup Poddar",
                designation: "Producer",
                imdb: "https://www.imdb.com/name/nm1233924/?ref_=ext_shr_lnk",
                link: "https://www.linkedin.com/in/anup-kumar-poddar-86229516/",
                description: "An experienced Producer known for bringing compelling stories to life on the big screen.        "
            },
            {
                key: "2",
                profileImg: "/assets/team/dhruv.jpg",
                name: "Dhruv Murarka",
                designation: "Marketing Director",
                imdb: "https://www.imdb.com/name/nm9364627/?ref_=ext_shr_lnk",
                link: "https://www.linkedin.com/in/dhruv-m-85996a182/",
                description: "A visionary Marketing Director adept at promoting and positioning films for maximum audience engagement."
            },
            {
                key: "3",
                profileImg: "/assets/team/aishwarya.jpg",
                name: "Aishwarya Meshraam",
                designation: "Executive Producer",
                imdb: "",
                link: "https://www.linkedin.com/in/aishwarya-meshraam-7a3943240/",
                description: " A dynamic Executive Producer with a keen eye for innovative and impactful film projects.        "
            },
            {
                key: "4",
                profileImg: "/assets/team/nikhil.png",
                name: "Nikhil Murarka",
                designation: "Board Member",
                description: "A strategic Board Member providing invaluable guidance and expertise in the film production industry.",
                imdb: "",
                link: "https://www.linkedin.com/in/nikhil-murarka-7b9029128/",
            },
        ])
    })
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <TeamComponent profiles={profiles} />
                <JoinUs />
                <ContactUsComponent />
            </div>
            <Footer />
        </>
    )
}
export default Team