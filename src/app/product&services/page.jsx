import BottomComponents from "../components/Bottom";
import NavbarComponents from "../components/Navbar";

import { ImPower } from "react-icons/im";
import { FaSun } from "react-icons/fa";
import { TbSolarPanel2 } from "react-icons/tb";
import { TbSolarElectricity } from "react-icons/tb";
import Testimonials from "../components/testimonial";

function Page() {
  return (
    <>
      <div className="m-0 divContainer overflow-x-hidden font-sans">
        <div className="absolute w-full bg-transparent z-10 pointer-events-auto">
          <NavbarComponents />
        </div>

        <div>
          {/* Image */}
          <img src="/images/solar9.avif" className="object-top relative" />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div className="flex flex-col gap-2 justify-center items-center text-4xl font-extrabold mb-4">
              <p>What we Offer at</p>
              <div className="flex flex-row gap-2 text-4xl">
                <h1>Solar</h1>
                <div className="text-6xl text-yellow-300 -translate-y-2">
                  <FaSun />
                </div>
                <div>Era</div>
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-screen-xl mx-auto">
          {/* Section1 */}
          <section id="section1">
            <div>
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
                <img
                  src="/images/storage.avif"
                  className="object-cover w-full"
                  alt="Power Image"
                />

                <div className=" flex flex-row gap-4 absolute top-0 left-0 p-10 text-white">
                  <div className="flex flex-col gap-4 max-w-[500px] ">
                    <p className="text-6xl p-4 text-center shadow-md text-slate-500">
                      PowerWall
                    </p>
                    <p>
                      Powerwall is an integrated battery system that stores your
                      solar energy for backup protection when the grid goes
                      down. Your system detects outages, powers your home and
                      electric vehicle with backup energy and automatically
                      recharges with sunlight to keep your appliances running
                      for days.
                    </p>
                  </div>
                  <div className=" md:auto-cols-[minmax(250px, 1fr)] max-w-[600px] place-content-center p-12 ">
                    <p className="font-bold text-2xl text-white py-3">
                      PowerWall Specs
                    </p>
                    <div className="grid grid-cols-2 gap-4  text-white font-bold  text-md">
                      <p className="border-b-2">Energy Capacity 13.5 kWh*</p>
                      <p className="border-b-2">
                        On-Grid Power 5 kW continuous
                      </p>
                      <p className="border-b-2">Scalable Up to 10 units</p>
                      <p className="border-b-2">
                        Backup Power 7 kW peak 106A LRA motor start Seamless
                        backup transition
                      </p>
                      <p className="border-b-2">
                        Size and Weight L x W x D 45.3 in x 29.6 in x 5.75 in
                        251.3 lbs
                      </p>
                      <p className="border-b-2">
                        Installation Floor or wall mounted Indoor or outdoor Up
                        to 10 Powerwalls -4°F to 122°F Water and dust resistance
                      </p>
                      <p className="border-b-2">Warranty 10 years</p>
                    </div>
                  </div>
                </div>

                {/* icon */}
                <div className="absolute bottom-0 right-0 flex flex-row p-3 gap-20 text-center justify-center text-white w-full">
                  <div className="flex flex-col items-center">
                    <div className="p-4">
                      <ImPower className="text-xl" />
                    </div>

                    <p className="font-semibold text-sm max-w-20">
                      Power Your Appliances
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="p-4">
                      <TbSolarPanel2 className="text-xl" />
                    </div>

                    <p className="font-semibold text-sm max-w-20">
                      Recharge With Solar
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="p-4">
                      <TbSolarElectricity className="text-xl" />
                    </div>

                    <p className="font-semibold text-sm max-w-20">
                      Use Stored Energy in Outages
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-16 p-14 bg-gradient-to-t from-[#b1d6f1] to-transparent ">
                <div className="flex flex-row border-2 shadow-2xl rounded-lg bg-white">
                  <img
                    src="/images/solar8.jpg"
                    className="max-w-[500px] max-h-[250px] place-self-center"
                  />

                  <div className=" flex flex-col gap-4 p-10">
                    <p>
                      Powerwall is a compact home battery that reduces your
                      reliance on the grid by storing your solar energy for use
                      when the sun isn't shining. You can add additional
                      Powerwall units to your system to reduce your impact
                      further and better prepare your home for power outages.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl">starting from</p>
                      <p className="font-extrabold text-3xl">$59.999.99</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Order Now
                      </button>
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Consultation
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row border-2 shadow-2xl rounded-lg bg-white">
                  <div className=" flex flex-col gap-4 p-10">
                    <h1>PowerWall & SolarRoof </h1>
                    <p>
                      The Solar Roof features sleek glass solar tiles and robust
                      steel roofing tiles that seamlessly blend with your home's
                      aesthetic while generating clean and sustainable energy.
                      The integrated Power Storage Pack ensures you have a
                      reliable energy source day and night. Store excess energy
                      generated during the day and use it when the sun sets.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl">starting from</p>
                      <p className="font-extrabold text-3xl">$399.999.99</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <div className="flex flex-row gap-8">
                        <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                          Order Now
                        </button>
                        <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                          Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section2 */}
          <section id="section2">
            {/* iorutyeorthiwerug */}

            <div className="relative">
              <img
                src="/images/solarroof.avif"
                className="object-cover w-full"
                alt="Power Image"
              />

              <div>
                {/* Text Content */}
                <div className="flex flex-col absolute top-0 left-0 gap-4 max-w-[500px]  text-black p-4 m-4">
                  <p className="text-slate-500 font-bold text-6xl shadow-2xl rounded-xl text-center">
                    Solar Roof
                  </p>
                  <p className="mt-4">
                    Install Solar Roof and power your home with a fully
                    integrated solar and energy storage system. The glass solar
                    tiles and steel roofing tiles look great up close and from
                    the street, complementing your home’s natural styling.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full m-4 p-4">
                  {/* Spec */}
                  <div className="md:auto-cols-[minmax(250px, 1fr)]  place-content-center  text-black font-extrabold">
                    <p className="font-bold text-2xl px-6">SolarRoof Specs</p>
                    <div className="grid grid-cols-2  gap-4 p-6 font-bold">
                      <p className="border-b-2 border-black">
                        Solar Glass Tiles 72 W
                      </p>
                      <p className="border-b-2 border-black">
                        Steel Tiles Corrosion and weather resistant
                      </p>
                      <p className="border-b-2 border-black">
                        Wind Rating Class F (highest rating)
                      </p>
                      <p className="border-b-2 border-black">
                        Fire Rating Class A (highest rating)
                      </p>
                      <p className="border-b-2 border-black">
                        Hail Rating Class 3
                      </p>
                      <p className="border-b-2 border-black">
                        Roof Pitch ≥ 2:12
                      </p>
                      <p className="border-b-2 border-black">
                        Tile and Power Warranty 25 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col gap-16 p-14 bg-black">
                <div className="flex flex-row border-2 shadow-2xl rounded-lg bg-white">
                  <img
                    src="/images/solar roof.avif"
                    className="max-w-[500px] max-h-[250px] place-self-center"
                  />
                  <div className=" flex flex-col gap-4 p-10">
                    <p>
                      Solar Roof is comprised of both glass solar tiles and
                      steel roofing tiles. Glass solar tiles produce energy,
                      while architectural-grade steel tiles add longevity and
                      corrosion resistance to your roof. Both are durable,
                      strong and engineered for all-weather protection. With a
                      25-year warranty, Solar Roof will continue to produce
                      clean energy and protect your home for decades to come.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl">starting from</p>
                      <p className="font-extrabold text-3xl">$199.999.99</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Order Now
                      </button>
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Consultation
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row border-2 shadow-2xl rounded-lg bg-white">
                  <div className=" flex flex-col gap-4 p-10">
                    <h1>PowerWall & SolarRoof </h1>
                    <p>
                      The Solar Roof features sleek glass solar tiles and robust
                      steel roofing tiles that seamlessly blend with your home's
                      aesthetic while generating clean and sustainable energy.
                      The integrated Power Storage Pack ensures you have a
                      reliable energy source day and night. Store excess energy
                      generated during the day and use it when the sun sets.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-xl">starting from</p>
                      <p className="font-extrabold text-3xl">$399.999.99</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Order Now
                      </button>
                      <button className="flex justify-center text-center p-4 max-w-[200px] rounded-md border-2 border-black transition-transform transform hover:scale-105 hover:text-white hover:bg-black">
                        Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section3*/}
          <section id="section3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
              <img src="/Images/solarfarm.avif" />

              <div className="absolute inset-0 flex flex-col  justify-center container mx-auto p-10 text-white">
                <div className="flex flex-row gap-2 justify-center items-start text-4xl px-4 font-extrabold">
                  <h1>Solar</h1>
                  <div className="text-6xl text-yellow-300 -translate-y-2">
                    <FaSun />
                  </div>
                  <div>Era</div>
                </div>
                <h2 className="text-4xl font-bold mb-8 text-center">
                  Solar Services
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex justify-center">
                    <p className="text-xl font-bold text-center">
                      Here at Solar Era we offer many great services to amke
                      aour vison of amking the world powerwerd by renewable
                      clean save Energy for All
                    </p>
                  </div>

                  <div className="container mx-auto ">
                    <div className="container mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service 1: Turnkey Solar Farm Development */}
                        <div className="p-4 bg-transparent rounded-lg shadow-2xl transition-transform transform hover:scale-105">
                          <h3 className="text-xl font-bold mb-4">
                            Turnkey Solar Farm Development
                          </h3>
                          <p>
                            We offer end-to-end solutions, from site assessment
                            and design to construction and seamless grid
                            integration. Our turnkey approach ensures a smooth
                            transition to solar energy, maximizing efficiency
                            and minimizing environmental impact.
                          </p>
                        </div>

                        {/* Service 2: Customized System Design */}
                        <div className="p-4 bg-transparent rounded-lg shadow-2xl transition-transform transform hover:scale-105">
                          <h3 className="text-xl font-bold mb-4">
                            Customized System Design
                          </h3>
                          <p>
                            Our team of experts tailors solar farm designs to
                            meet specific client needs and local conditions.
                            Whether for utility-scale projects or
                            community-based initiatives, our designs prioritize
                            optimal energy production and long-term reliability.
                          </p>
                        </div>

                        {/* Service 3: Efficient Operation and Maintenance */}
                        <div className="p-4 bg-transparent rounded-lg shadow-2xl transition-transform transform hover:scale-105">
                          <h3 className="text-xl font-bold mb-4">
                            Efficient Operation and Maintenance
                          </h3>
                          <p>
                            Solar Era Solutions provides ongoing operation and
                            maintenance services to ensure the sustained
                            performance of solar farms. Proactive monitoring,
                            regular inspections, and swift issue resolution are
                            integral to maximizing energy output and return on
                            investment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />
        </main>
        <BottomComponents />
      </div>
    </>
  );
}
export default Page;
