import { RiCustomerService2Fill } from "react-icons/ri";
import Image from "next/image";

import Link from "next/link";
function ProductComponent() {
  return (
    <div className="md:auto-cols-[minmax(250px, 1fr)] mx-4 place-content-center">
      <div className="grid grid-cols-2 gap-8 text-black max-w-[1000px] w-full justify-center">
        {/* Product 1 */}
        <div className="flex justify-items-center w-full h-[170px]">
          <Link href="/product&services#section1">
            <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-2xl border-2 max-h-[240px] max-w-[440px] w-full p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <Image
                src="/images/power3.jpg"
                width={150}
                height={100}
                alt="power3"
                className="w-[150px] h-[100px] rounded-lg"
              />
              <div className="w-full max-w-[450px] h-[130px]">
                <div className="flex flex-col gap-2  ">
                  <h1 className="text-blue-500 font-bold border-b-2">
                    Energy Storage
                  </h1>
                  <p className="text-sm">
                    Powerwall is a home battery that provides you with 24/7
                    energy security.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 2 */}
        <div className="flex justify-items-center w-full h-[170px]">
          <Link href="/product&services#section2">
            <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-2xl border-2 max-h-[240px] max-w-[440] p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <Image
                src="/images/solar4.jpg"
                width={150}
                height={100}
                alt="solar4"
                className="w-[150px] h-[100px] rounded-lg"
              />
              <div className="w-full max-w-[450px] h-[130px]">
                <div className="flex flex-col gap-2 ">
                  <h1 className="text-blue-500 font-bold border-b-2">
                    Solar Roof
                  </h1>
                  <p className="text-sm">
                    Solar Roof installation for clean energy in your own home
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 3 */}
        <div className="flex justify-items-center w-full h-[170px]">
          <Link href="/product&services#section3">
            <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-2xl border-2 max-h-[240px] max-w-[440] p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <Image
                src="/images/solar5.jpg"
                width={150}
                height={100}
                alt="solar5"
                className="w-[150px] h-[100px] rounded-lg"
              />
              <div className="w-full max-w-[450px] h-[130px]">
                <div className="flex flex-col gap-2 ">
                  <h1 className="text-blue-500 font-bold border-b-2">
                    Solar Farm
                  </h1>
                  <p>Providing clean renewable Energy to millions of lives</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Product 4 */}
        <div className="flex justify-items-center w-full h-[170px] ">
          <Link href="/product&services#testimonials">
            <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-2xl border-2 max-h-[240px] max-w-[450px] w-full p-4 transform hover:scale-105 transition duration-300 ease-in-out">
              <h1 className="text-blue-500 font-bold text-8xl">
                <RiCustomerService2Fill />
              </h1>
              <div className="flex flex-col gap-2 w-full max-w-[450px] h-[130px]">
                <p className="text-lg">See what services we offer</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductComponent;
