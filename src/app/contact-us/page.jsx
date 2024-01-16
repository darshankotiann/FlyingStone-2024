import Navbar from "@/components/Navbar"
import ContactUsComponent from "@/components/ContactUsComponent"
import Footer from "@/components/Footer"
const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[114px] ">
                <ContactUsComponent />
            </div>
            <Footer />
        </>
    )
}
export default ContactUs