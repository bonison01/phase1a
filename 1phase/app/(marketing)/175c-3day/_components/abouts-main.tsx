import React from "react";
import Link from "next/link";

export function AboutsMain() {
  return (
    <div className="text-center pt-20 pb-10 sm:pt-32">
      {/* Button container with flex layout */}
      <div className="flex justify-center space-x-4 mb-4">
        {/* Buttons with Link components */}
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/175c-today">
            <a>Today Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/175c-total">
            <a>Total Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/175c-pending">
            <a>Pending Orders</a>
          </Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link href="/175c-3day">
            <a>Last 3 day Orders</a>
          </Link>
        </button>
      </div>

      {/* Embedded Google Sheets iframe */}
      <div className="w-full max-w-screen-lg mx-auto">
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRWYs8ubYVSuH9JiNDx8lsNz6aRB-X4jOyXoKrpmi6W_EPBsBIZqhA40qAlBwFdXlGazX7JqAu6v_nY/pubhtml?gid=1755402323&single=true"
          width="300%"
          height="600" // Adjust the height as needed
          frameBorder="0"
          allowFullScreen
          title="Embedded Google Sheets"
          style={{ minHeight: "800px" }} // Set minimum height for responsiveness
        ></iframe>
      </div>

      {/* Optional: Add a button or link */}
      <div className="flex justify-center mt-4">
        <Link href="/test">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Button
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutsMain;
