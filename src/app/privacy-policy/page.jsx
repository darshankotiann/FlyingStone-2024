
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[114px] p-10">
                <p className="text-sm">
                    Flying Stone Films is committed to protecting the privacy and security of your personal information. This Privacy Policy
                    describes in detail how we collect, use, and handle your personal information when you visit our website or interact
                    with us.
                </p>
                <h2 className="font-bold text-lg mt-4">Information We Collect</h2>
                <ul>
                    <li>
                        <span className="font-bold"> Personal Information:</span> When you engage with our services, we may collect personal information such as your
                        name, email address, phone number, and payment details. This information is essential for us to provide you with
                        the best possible service and ensure a smooth and personalized experience
                    </li>
                    <li>
                        <span className="font-bold">Usage Information: </span>In addition to personal information, we may also collect information about how you interact
                        with our website. This includes data such as your IP address, browser type, and pages visited. This information
                        helps us understand how our website is being used and allows us to improve its functionality and user experience.
                    </li>
                </ul>
                <h2 className="font-bold text-lg mt-4">How We Use Your Information</h2>
                <p>
                    We use the information we collect for various purposes, all aimed at enhancing your experience with Flying Stone
                    Films. These purposes include:
                </p>
                <ul>
                    <li>
                        <span className="font-bold">Providing and improving our services: </span> The personal and usage information we collect allows us to deliver the
                        services you request and continuously improve them based on your feedback and preferences.

                    </li>
                    <li>
                        <span className="font-bold">Communicating with you:  </span>We may use your contact information to communicate with you regarding your
                        inquiries, requests, or any updates related to our services. This ensures that you are always informed and up to
                        date.
                    </li>
                    <li>
                        <span className="font-bold">Marketing and promotional activities:</span> With your consent, we may use your personal information to send you
                        marketing communications, such as newsletters, special offers, and updates about our latest projects. You have the
                        right to opt out of receiving these communications at any time.

                    </li>
                </ul>
                <h2 className="font-bold text-lg mt-4">Information Sharing and Disclosure</h2>
                <p className="text-sm">
                    At Flying Stone Films, we take your privacy seriously. We do not sell, trade, or otherwise transfer your personal
                    information to outside parties without your explicit consent. However, there are instances where we may need to share
                    your information with trusted third parties who assist us in operating our website, conducting our business, or servicing
                    you. These third parties are bound by strict confidentiality agreements and are only authorized to use your information
                    for the specific purposes outlined in this Privacy Policy.
                </p>
                <h2 className="font-bold text-lg mt-4">Security</h2>
                <p className="text-sm">
                    We understand the importance of keeping your personal information secure. To ensure the safety and confidentiality of
                    your data, we have implemented a variety of security measures. These measures include encryption, firewalls, and
                    regular monitoring of our systems to detect and prevent any unauthorized access or breaches.
                </p>
                <h2 className="font-bold text-lg mt-4">Your Choices</h2>
                <p className="text-sm">
                    We believe in giving you control over your personal information. You have the right to access, correct, and delete your
                    personal information. If you wish to exercise any of these rights or have any questions or concerns about how your
                    information is being handled, please contact us using the information provided at the end of this Privacy Policy.
                    Additionally, you have the right to opt out of receiving marketing communications from us. You can do this by following
                    the unsubscribe instructions included in our emails or by contacting us directly.
                </p>
                <h2 className="font-bold text-lg mt-4">Changes to This Privacy Policy</h2>
                <p className="text-sm">
                    We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will
                    notify you of any material changes by posting the updated Privacy Policy on our website and indicating the date of the
                    last update. It is your responsibility to review this Privacy Policy periodically to stay informed about how we are
                    protecting your personal information.
                </p>
            </div>
            <Footer />
        </>

    )
}
export default PrivacyPolicy;