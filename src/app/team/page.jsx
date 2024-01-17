"use client"
import Navbar from "@/components/Navbar"
import TeamComponent from "@/components/TeamComponent"
import JoinUs from "@/components/JoinUsComponent"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
import { useEffect,useState } from "react"
const Team = () => {
    const [profiles, setProfiles] = useState([])
    
    useEffect(() => {
        setProfiles([
            {
                key: "1",
                profileImg: "/assets/team/anup.png",
                name: "Anup Poddar",
                designation: "Producer",
                description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
            },
            {
                key: "2",
                profileImg: "/assets/team/dhruv.jpg",
                name: "Dhruv Murarka",
                designation: "Marketing Director",
                description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
            },
            {
                key: "3",
                profileImg: "/assets/team/aishwarya.jpg",
                name: "Aishwarya Meshraam",
                designation: "Executive Producer",
                description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
            },
            {
                key: "4",
                profileImg: "/assets/team/nikhil.png",
                name: "Nikhil Murarka",
                designation: "Producer",
                description: "Weaving together the threads of creativity to craft captivating and memorable works of art."
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