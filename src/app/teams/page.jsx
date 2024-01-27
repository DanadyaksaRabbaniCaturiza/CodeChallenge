import React from "react";
import NavbarComponents from "../components/Navbar";
import TeamComponent from "../components/team";
import { FaSun } from "react-icons/fa";
import BottomComponents from "../components/Bottom";
import Image from "next/image";

function Page() {
  const executiveTeam = [
    {
      name: "Roman Johnson",
      role: "CEO",
      bio: "Visionary leader with a passion for sustainable energy.",
      image: "/ceo.avif",
    },
    {
      name: "Jane White",
      role: "CFO",
      bio: "Financial strategist ensuring fiscal responsibility.",
      image: "/cfo.jpeg",
    },
    {
      name: "James Abraham",
      role: "CTO",
      bio: " Details on the technology and engineering leadership.",
      image: "/cto.jpg",
    },
  ];

  const operationsTeam = [
    {
      name: "Sam Archer",
      role: "Operations Manager",
      bio: "Overseeing day-to-day operations for efficiency.",
      image: "/operations.avif",
    },
    {
      name: "Emily Kormack",
      role: "Project Manager",
      bio: "Managing and coordinating various energy projects.",
      image: "/projects.avif",
    },
    {
      name: "Finn Fielder",
      role: "Field Engineers",
      bio: " Information about engineers working on-site for implementation.",
      image: "/field.jpg",
    },
  ];

  const technicalTeam = [
    {
      name: "Alex Hex",
      role: "Renewable Energy Specialist",
      bio: "Expert in the latest renewable energy technologies.",
      image: "/tech.jpg",
    },
    {
      name: "Christoher Lee",
      role: "Electrical Engineer",
      bio: "Focused on optimizing electrical systems for efficiency.",
      image: "/engineer.jpg",
    },
    {
      name: "Thomas",
      role: "Mechanical Engineers",
      bio: " Information about those focusing on mechanical systems.",
      image: "/mechanical.jpg",
    },
  ];

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen">
        {/* Navigation Bar */}
        <div className="absolute w-full bg-transparent z-10 pointer-events-auto ">
          <NavbarComponents />
        </div>

        <div className="relative w-full h-screen">
          <Image
            src="/group.avif"
            width={2073}
            height={1377}
            alt="Solar Era Team"
            className="object-cover w-full h-full absolute"
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-white text-center bg-gradient-to-b from-black to-transparent"
            style={{ zIndex: 1 }}
          >
            <div className="flex flex-col justify-center items-center text-4xl font-extrabold mb-4">
              <div className="flex flex-row gap-2 text-4xl">
                <p>Meet</p>
                <h1>Solar</h1>
                <div className="text-6xl text-yellow-300 -translate-y-4">
                  <FaSun />
                </div>
                <div>Era</div>
              </div>

              <p>Amazing Team</p>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="container mx-auto mt-16 p-8 relative z-10">
          <h1 className="text-3xl font-bold mb-8">Meet Our Amazing Team</h1>

          {/* Executive Team */}
          <h2 className="text-2xl font-bold mb-4">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <TeamComponent key={index} {...member} />
            ))}
          </div>

          {/* Operations Team */}
          <h2 className="text-2xl font-bold my-4">Operations Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationsTeam.map((member, index) => (
              <TeamComponent key={index} {...member} />
            ))}
          </div>

          {/* Technical Team */}
          <h2 className="text-2xl font-bold my-4">Technical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalTeam.map((member, index) => (
              <TeamComponent key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <BottomComponents />
    </>
  );
}

export default Page;
