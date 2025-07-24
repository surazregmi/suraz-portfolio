// src/components/UnderConstruction.tsx
import Button from "@/components/ui/Button";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

interface UnderConstructionProps {
  pageName: string;
}

export default function UnderConstruction({
  pageName,
}: UnderConstructionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 text-gray-500">
      <div className="animate-bounce mb-8 rounded-full bg-green-400 p-6 shadow-lg">
        <FaTools className="w-16 h-16" />
      </div>

      <h1 className="text-5xl font-extrabold mb-4">
        🚧 {pageName} Under Construction
      </h1>
      <p className="text-xl max-w-xl text-center mb-8">
        {pageName} page will be back soon. Stay tuned!
      </p>

      <Link to="/resume">
        <Button type="green" label="Back To Home Page" />
      </Link>
    </div>
  );
}
