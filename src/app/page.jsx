import NavbarComponents from "./components/Navbar";
import { FaSun } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { TbBrandCarbon } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";
import { BiSolidCity } from "react-icons/bi";
import BottomComponents from "./components/Bottom";
import ProductComponent from "./components/product";
import Testimonials from "./components/testimonial";

export default function Home() {
  return (
    <>
      <div className="place-content-center font-sans">
        {/* Transparent Navigation Bar */}
        <div className="absolute w-full bg-transparent z-10 pointer-events-auto ">
          <NavbarComponents />
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-screen">
          <img
            src="/images/Solar2.jpg"
            alt="Solar Background"
            className="object-cover  w-full h-full "
          />

          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <div className="flex flex-row justify-center items-center text-6xl font-extrabold mb-4">
                <h1>Solar</h1>
                <div className="text-8xl text-yellow-300">
                  <FaSun />
                </div>
                <div>Era</div>
              </div>
              <p className="text-xl mb-8 font-semibold">
                Empowering the Future with Innovative Solar Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="relative flex flex-col mt-36 justify-center items-center ">
          <div className="flex flex-col p-8 m-16 items-center justify-center w-full">
            <p className="flex text-center font-semibold text-[32px] max-w-[1000px] w-full">
              Solar
              <FaSun className="translate-y-3 text-yellow-300" />
              {
                "Era's mission is to be a catalyst for positive change by offering innovative solar energy solutions"
              }
            </p>
          </div>
          <div className=" flex flex-row gap-20 p-4 justify-center text-center font-bold ">
            <div className="flex flex-col  items-center">
              <div className="p-4">
                <GrUserWorker className="text-6xl" />
              </div>
              <p className="text-3xl">100k+</p>
              <p className="font-semibold text-xl">Employees</p>
            </div>

            <div className="flex flex-col  items-center">
              <div className="p-4">
                <BiSolidCity className="text-6xl" />
              </div>
              <p className="text-3xl">99+</p>
              <p className="font-semibold text-xl">Cities Powered</p>
            </div>

            <div className="flex flex-col  items-center">
              <div className="p-4">
                <FaGlobe className="text-6xl" />
              </div>
              <p className="text-3xl">1</p>
              <p className="font-semibold text-xl"> Vision</p>
            </div>

            <div className="flex flex-col  items-center">
              <div className="p-4">
                <TbBrandCarbon className="text-6xl" />
              </div>
              <p className="text-3xl">8.4 Mmt*</p>
              <p className="font-semibold text-xl">CO2e Avoided in 2021</p>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent "></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-transparent "></div>
            <img
              src="/images/Solar3.jpg"
              alt="Solar 2"
              className="w-full h-full"
            />
          </div>

          {/* Story & Team*/}
          <div className="relative w-full h-full">
            <div className="p-20">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-500 to-transparent "></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-500 to-transparent "></div>

              <div className="absolute inset-0 flex items-center justify-center md:auto-cols-[minmax(250px, 1fr)] ">
                <div className="grid grid-cols-1 gap-8 text-black">
                  <div className="flex flex-col py-8 px-5 bg-[#f4f5fc] text-black rounded-xl shadow-2xl w-max h-max max-w-[850px] max-h-[450px] ">
                    <div className="flex flex-row">
                      <image
                        src="/images/group of people.jpg"
                        className="w-max h-max max-w-[350px] max-h-[250px] rounded-md -translate-x-10"
                      />
                      <div className="flex flex-col p-8 justify-center border-l-2 ">
                        <p className="text-slate-500 text-[16px]">OUR STORY</p>
                        <p className="text-[38px] font-bold border-b-2">
                          Our Story here at SolarEra
                        </p>
                        <p className="text-[16px]">
                          From our humble beginnings, we have evolved into a
                          leading force in the renewable energy sector. Our
                          commitment to excellence, environmental
                          responsibility, and community empowerment has set us
                          apart on the path to a brighter, greener future.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col py-8 px-5 bg-[#f4f5fc] text-black rounded-xl shadow-2xl w-max h-max max-w-[850px] max-h-[450px] ">
                    <div className="flex flex-row">
                      <div className="flex flex-col p-8 justify-center border-r-2 ">
                        <p className="text-slate-500 text-[16px]">OUR PEOPLE</p>
                        <p className="text-[38px] font-bold border-b-2">
                          The Team at SolarEra
                        </p>
                        <p className="text-[16px]">
                          {
                            "Our team consists of skilled engineers, technicians, and renewable energy experts with extensive experience in solar power solutions and believes of making a better future of energy. Committed to innovation, we work collaboratively to design and implement cutting-edge solar technologies. Our passion for sustainability drives us to create solutions that contribute to a cleaner and greener world"
                          }
                        </p>
                      </div>
                      <img
                        src="/images/solarteam.avif"
                        className="w-max h-max max-w-[350px] max-h-[250px] rounded-md translate-x-10 translate-y-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/power2.avif"
                alt="Solar Power"
                className="w-full object-fill"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Product */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-slate-500 via-black to-slate-500 text-white p-20 pt-80">
          <p className="flex flex-row text-center justify-center m-8 text-[38px] animate-bounce">
            Discover our Exciting Products
          </p>
          <div className="bg-slate-500 p-12 rounded-xl shadow-lg max-w-[1000px] w-full">
            <ProductComponent />
          </div>
        </div>

        <div>
          <Testimonials />
        </div>
        <BottomComponents />
      </div>
    </>
  );
}
