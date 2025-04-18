"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="mb-8">
        <Image
          src="/what_bytes_logo.webp"
          alt="What Bytes Logo"
          width={150}
          height={75}
          className="mx-auto"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-gray-400">
        404 - Page Not Found
      </h1>

      <p className="text-xl mb-8 text-gray-400">
        Oops! The page you are looking for doesn't exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/skill-test"
          className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Go to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
