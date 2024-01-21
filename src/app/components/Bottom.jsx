import { FaSun } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
function BottomComponents() {
  return (
    <>
      <div className="bg-gray-800 text-white pt-4">
        <h2 className="text-2xl text-center font-bold ">Contact Our Company</h2>
      </div>
      <footer className="flex flex-row gap-4 bg-gray-800 text-white pt-8">
        <div className="flex flex-col gap-4 px-4">
          <div className="flex flex-row gap-2 justify-center items-start text-4xl px-4 font-extrabold">
            <h1>Solar</h1>
            <div className="-translate-y-2 text-6xl text-yellow-300">
              <FaSun />
            </div>
            <div>Era</div>
          </div>
          <p className="text-2xl justify-center px-4 place-self-center">
            Follow Us On
          </p>
          <div className="flex flex-row place-self-center gap-2 ">
            <FaFacebookSquare />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="container mx-auto flex flex-col items-center ">
          {/* Company Contact Information */}
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Office 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Office in Cityville
                </h3>
                <p>Email: contact@company-cityville.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 456 Corporate Blvd, Suite 789, Cityville</p>
              </div>

              {/* Office 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Office in Townsville
                </h3>
                <p>Email: contact@company-townsville.com</p>
                <p>Phone: (987) 654-3210</p>
                <p>Address: 789 Main St, Suite 123, Townsville</p>
              </div>

              {/* Office 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Office in Townsville
                </h3>
                <p>Email: contact@company-townsville.com</p>
                <p>Phone: (987) 654-3210</p>
                <p>Address: 789 Main St, Suite 123, Townsville</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-gray-800 text-white">
        <div className="text-2xl text-center font-bold p-4">
          <p>&copy; 2016 SolaEra. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
export default BottomComponents;
