import BottomComponents from "../components/Bottom";
import NavbarComponents from "../components/Navbar";
import { FaSun } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import { RxStarFilled } from "react-icons/rx";
import { IoMdHappy } from "react-icons/io";
function Page() {
  return (
    <>
      <div className="font-sans">
        <div className="absolute w-full bg-transparent z-10 pointer-events-auto ">
          <NavbarComponents />
        </div>
        <Image
          src="/images/circuit.avif"
          width={2000}
          height={1500}
          alt="circuit"
          className=" object-cover w-full h-[350px] "
        />
        <div className="absolute inset-x-0 top-40 flex flex-col justify-center items-center text-4xl font-extrabold mb-4 text-white">
          <div className="flex flex-row gap-2 text-4xl text-center">
            <p>About</p>
            <div className="flex flex-row gap-2">
              <h1>Solar</h1>
              <div className="text-6xl text-yellow-300 -translate-y-3">
                <FaSun />
              </div>
              <div>Era</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-center items-center p-10">
          <div className="flex flex-col py-8 px-5 bg-[#f4f5fc] text-black rounded-xl shadow-2xl w-max h-max max-w-[850px] max-h-[450px] ">
            <div className="flex flex-row">
              <Image
                src="/Images/building.jpg"
                width={3368}
                height={2240}
                alt="Building"
                className="w-max h-max max-w-[350px] max-h-[250px] rounded-md -translate-x-10"
              />
              <div className="flex flex-col p-8 justify-center border-l-2 ">
                <p className="text-[38px] font-bold border-b-2 text-slate-500">
                  About Us
                </p>
                <p className="text-[16px]">
                  Welcome to Solar Era, your trusted partner in harnessing the
                  power of the sun for a sustainable and brighter future. As a
                  leading solar energy company, we are committed to providing
                  innovative and reliable solar solutions that empower
                  individuals, businesses, and communities to embrace clean,
                  renewable energy sources.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-8 px-5 bg-[#f4f5fc] text-black rounded-xl shadow-2xl w-max h-max max-w-[850px] max-h-[450px] ">
            <div className="flex flex-row">
              <div className="flex flex-col p-8 justify-center border-r-2 ">
                <p className="text-[38px] font-bold border-b-2">Our Mission</p>
                <p className="text-[16px]">
                  At Solar Era, our mission is to accelerate the global
                  transition to clean energy by making solar power accessible,
                  affordable, and efficient for everyone. We believe in a world
                  where clean energy is the driving force behind a sustainable
                  and resilient future.
                </p>
              </div>
              <div className="text-[250px] ">
                <SiFuturelearn />
              </div>
            </div>
          </div>

          <div className="flex flex-col  py-8 px-5 bg-[#f4f5fc] text-black rounded-xl shadow-2xl w-max h-max max-w-[850px] max-h-[450px] ">
            <div className="flex flex-row">
              <Image
                src="/Images/power10.jpg"
                width={4600}
                height={3070}
                alt="power10"
                className="w-max h-max max-w-[350px] max-h-[250px] rounded-md -translate-x-10"
              />
              <div className="flex flex-col p-8 justify-center border-l-2 ">
                <p className="text-[38px] font-bold border-b-2 text-slate-500">
                  Our Vision
                </p>
                <p className="text-[16px]">
                  We envision a future where every rooftop is a potential power
                  plant, where solar farms dot the landscape, and where
                  individuals have the power to generate their own energy. Solar
                  Era strives to be a catalyst for change, leading the way
                  towards a world powered by the limitless energy of the sun.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why */}

        <div className="flex flex-row  justify-center gap-6 p-20 py-56 ">
          <div className="flex flex-col gap-4 w-[300px] p-2 rounded-xl ">
            <p className="text-xl font-extrabold border-b-2 p-4 ">
              Why Solar Era?
            </p>
            <p className="text-lg">
              Solar Era provide clean energy for the masses while also lead the
              development of solar power where we can have power to move forward
              to the future even better
            </p>
          </div>
          <div className="flex flex-row gap-8 ">
            {/* 1 */}
            <div className="flex flex-col gap-4 p-8 items-center max-w-[300px] max-h-[600px] border-2 rounded-xl shadow-2xl font-medium">
              <p className="max-w-[210px] max-h-[210px]">
                <FaLightbulb className="text-[150px] text-yellow-300" />
              </p>
              <p className="text-[15px] text-center font-bold max-w-[210px] max-h-[100px]">
                Expertise and Innovation
              </p>
              <p className="text-[12px] max-w-[210px] max-h-[225px]">
                With years of experience in the solar industry, our team of
                experts brings unparalleled knowledge and expertise to every
                project. We stay at the forefront of technological advancements,
                ensuring that our clients benefit from cutting-edge solar
                solutions
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col gap-4 p-8 items-center max-w-[300px] max-h-[600px] border-2 rounded-xl shadow-2xl font-medium">
              <p className="max-w-[210px] max-h-[210px]">
                <IoMdHappy className="text-[150px] text-yellow-300" />
              </p>
              <p className="text-[15px] text-center font-bold  max-w-[210px] max-h-[100px]">
                Customer-Centric Approach
              </p>
              <p className="text-[12px] max-w-[210px] max-h-[225px]">
                Customer satisfaction is at the heart of everything we do. We
                work closely with our clients to understand their unique energy
                needs and provide customized solar solutions. From design to
                installation and beyond, Solar Era is dedicated to delivering
                excellence and exceeding expectations.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col gap-4 p-8 items-center max-w-[300px] max-h-[600px] border-2 rounded-xl shadow-2xl font-medium">
              <p className="max-w-[210px] max-h-[210px]">
                <RxStarFilled className="text-[150px] text-yellow-300" />
              </p>
              <p className="text-[15px] text-center font-bold  max-w-[210px] max-h-[100px]">
                Our Commitment to Quality
              </p>
              <p className="text-[11px] max-w-[210px] max-h-[225px]">
                Solar Era is committed to delivering topnotch, durable solar
                solutions. We source top-tier components, adhere to industry
                best practices, and employ rigorous quality control measures for
                the reliability and longevity of our installations. Join us on
                the journey towards a cleaner, brighter future. Discover the
                possibilities with Solar Era and embrace the power of the sun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BottomComponents />
    </>
  );
}
export default Page;
