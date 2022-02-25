import Messanger from "../messangers";

function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 p-12 px-8">
        <div className="max-w-7xl mx-auto sm:grid-cols-2 md:gap-8 gap-5  grid lg:grid-cols-4 text-sm">
          <ul className="space-y-2">
            <li className="text-white font-bold leading-10">Get to Know Us</li>
            <li>
              <a className="text-gray-300 hover:underline ">Careers</a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">Blog</a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                About Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Star-Stadium Devices
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Star-Stadium Science
              </a>
            </li>
          </ul>

          <ul className="space-y-2 ">
            <li className=" text-white font-bold leading-10">
              Make Money with Us
            </li>
            <li>
              <a className="text-gray-300 hover:underline ">
                Sell products on Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Sell on Star-Stadium Business
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Sell apps on Star-Stadium
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Self-Publish with Us
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Host an Amazon Hub
              </a>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="text-white font-bold leading-10">
              Star-Stadium Payment
            </li>
            <li>
              <a className="text-gray-300 hover:underline ">
                Star-Stadium Business Card
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">Shop with Points</a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Reload Your Balance
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Star-Stadium Currency Converter
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-white font-bold leading-10">Let Us Help You</li>
            <li>
              <a className="text-gray-300 hover:underline ">
                Star-Stadium and COVID-19
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">Your Account</a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">Your Orders</a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Shipping Rates - Policies
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Returns - Replacements
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Manage Your Content and Devices
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">
                Star-Stadium Assistant
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:underline">Help</a>
            </li>
          </ul>

          <div className="md:col-span-4 flex md:items-center gap-6 my-4 flex-col">
            <p className="text-white font-semibold">FOLLOW STDIUM-STAR</p>
            <Messanger />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
