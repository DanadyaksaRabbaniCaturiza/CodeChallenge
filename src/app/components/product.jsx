import { IoIosPerson } from "react-icons/io";

function ProductComponent() {
  return (
    <div className="md:auto-cols-[minmax(250px, 1fr)] mx-4 place-content-center">
      <div className="grid grid-cols-2 gap-8 text-black">
        {/* Product 1 */}
        <div className="flex justify-items-center w-[450px] h-[170px]">
          <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-2xl border-2 max-h-[240px] max-w-[440] p-4">
            <img
              src="/images/power3.jpg"
              className="w-[150px] h-[100px] rounded-lg"
            />
            <div className="w-[250px] h-[130px]">
              <div className="flex flex-col gap-2  ">
                <h1 className="text-blue-500 font-bold border-b-2">
                  Energy Storage
                </h1>
                <p>
                  Powerwall is a home battery that provides you with 24/7 energy
                  security.
                </p>
                <a
                  href="/product&services#section1"
                  className="text-center border-b-2 w-20 hover:text-red-500 transition-transform transform hover:scale-105"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex justify-items-center w-[450px] h-[170px]">
          <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-md max-h-[240px] max-w-[440] p-4">
            <img
              src="/images/solar4.jpg"
              className="w-[150px] h-[100px] rounded-lg"
            />
            <div className="w-[250px] h-[130px]">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-blue-500 font-bold border-b-2">
                  Solar Roof
                </h1>
                <p>Solar Roof installation for clean energy in your own home</p>
                <a
                  href="/product&services#section2"
                  className="text-center border-b-2 w-20 hover:text-red-500 transition-transform transform hover:scale-105"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex justify-items-center w-[450px] h-[170px]">
          <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-md max-h-[240px] max-w-[440] p-4">
            <img
              src="/images/solar5.jpg"
              className="w-[150px] h-[100px] rounded-lg"
            />
            <div className="w-[250px] h-[130px]">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-blue-500 font-bold border-b-2">
                  Solar Farm
                </h1>
                <p>Providing clean renewable Energy to millions of lives</p>
                <a
                  href="/product&services#section3"
                  className="text-center border-b-2 w-20 hover:text-red-500 transition-transform transform hover:scale-105"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex justify-items-center w-[450px] h-[170px] ">
          <div className="flex flex-row gap-6 items-center bg-white rounded-lg shadow-md max-h-[240px] max-w-[440] w-full h-[170px] p-4">
            <h1 className="text-blue-500 font-bold text-8xl">
              <IoIosPerson />
            </h1>
            <div className="flex flex-col gap-2 w-[250px] h-[130px]">
              <p>See what our customers say</p>
              <a
                href="/product&services#testimonials"
                className="text-center border-b-2 w-20 hover:text-red-500 transition-transform transform hover:scale-105"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductComponent;
