import React, { useState } from "react";

function App() {
  // State for toggling extra details
  const [showAboutDetails, setShowAboutDetails] = useState(false);
  const [showExperienceDetails, setShowExperienceDetails] = useState(false);
  const [showProjectsDetails, setShowProjectsDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Title Bar */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">My React App</h1>
      </header>

      {/* Sections */}
      <div className="mt-8 space-y-6 px-4">
        {/* Section 1: About Me */}
        <section className="border-4 border-red-500 rounded-lg p-4">
          <h2 className="text-xl text-red-500 font-semibold text-center mb-4">
            About Me
          </h2>
          <p className="text-center text-gray-700">
            Hi, I’m <span className="font-bold">Sai Goutham Kumar</span>. I’m a
            Computer Science student at Stevens Institute of Technology,
            passionate about web development and software engineering.
          </p>
          {showAboutDetails && (
            <p className="mt-4 text-center text-gray-600">
              I enjoy solving problems, exploring new technologies, and
              contributing to impactful projects.
            </p>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowAboutDetails(!showAboutDetails)}
            >
              {showAboutDetails ? "Hide Details" : "Learn More"}
            </button>
          </div>
        </section>

        {/* Section 2: Experience */}
        <section className="border-4 border-green-500 rounded-lg p-4">
          <h2 className="text-xl text-green-500 font-semibold text-center mb-4">
            Experience
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <span className="font-bold">Front-End Developer Intern</span> at
              GreatPelican, where I worked on building user-friendly interfaces
              and optimized web applications.
            </li>
            <li>
              Grader for the{" "}
              <span className="font-bold">Internet of Things (EE 629A)</span>{" "}
              course at Stevens Institute of Technology.
            </li>
          </ul>
          {showExperienceDetails && (
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Improved UI design to increase user engagement.</li>
              <li>Collaborated with teams to deliver high-quality features.</li>
            </ul>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowExperienceDetails(!showExperienceDetails)}
            >
              {showExperienceDetails ? "Hide Details" : "View Details"}
            </button>
          </div>
        </section>

        {/* Section 3: Projects */}
        <section className="border-4 border-yellow-500 rounded-lg p-4">
          <h2 className="text-xl text-yellow-500 font-semibold text-center mb-4">
            Projects
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <span className="font-bold">Movie Ticket Booking System</span>: A
              website with manager and cashier interfaces, supporting features
              like movie addition, scheduling, and dynamic pricing using Python,
              Flask, MySQL, HTML, and CSS.
            </li>
            <li>
              <span className="font-bold">React Projects</span>: Built various
              React applications, integrating tools like Tailwind CSS for
              responsive and visually appealing designs.
            </li>
          </ul>
          {showProjectsDetails && (
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Integrated APIs for dynamic data updates.</li>
              <li>
                Used Tailwind CSS for consistent and responsive UI designs.
              </li>
            </ul>
          )}
          <div className="flex justify-center mt-4">
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowProjectsDetails(!showProjectsDetails)}
            >
              {showProjectsDetails ? "Hide Details" : "Explore Projects"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
