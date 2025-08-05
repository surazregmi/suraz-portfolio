import ContactLink from "@/components/ui/ContactLink";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-400 mb-8">
          I'd love to hear from you. Reach out through any of these platforms.
        </p>

        <div className="space-y-6">
          <ContactLink
            href="mailto:link2surajregmi@gmail.com"
            Icon={FaEnvelope}
            text="Email "
          />
          <ContactLink
            href="https://www.linkedin.com/in/suraj-regmi123/"
            Icon={FaLinkedin}
            text="LinkedIn"
          />
          <ContactLink
            href="tel:+610423248465"
            Icon={FaPhoneAlt}
            text="+61 0423 248 465"
          />
        </div>
      </div>
    </div>
  );
}
