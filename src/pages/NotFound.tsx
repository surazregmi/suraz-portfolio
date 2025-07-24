import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-green-600">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
