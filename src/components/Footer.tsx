import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <div className="mb-6 md:mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h3>
          <p className="text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            I'm always interested in discussing new opportunities, innovative
            projects, and the latest in web development. Let's connect and
            create something extraordinary together.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <a
              href="mailto:link2surajregmi@gmail.com"
              className="flex items-center justify-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">link2surajregmi@gmail.com</span>
            </a>
            <a
              href="tel:+61423248465"
              className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">+61 0423248465</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700/50 pt-6">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Suraj Kumar Regmi.
          </p>
        </div>
      </div>
    </footer>
  );
}
