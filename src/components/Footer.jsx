import logo from '../assets/manifestgold.png';
import logo2 from '..//assets/manifestalone.png';
const Footer = () => {
  return (
    <footer className="bg-transparent text-[#b59f73] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center ">
            <h2 className="text-3xl font-semibold font-IvyMode-Regular md:hidden">
              Manifest
            </h2>
            <img src={logo2} alt="Logo" className="w-40 hidden md:block" />
          </div>
          <p className="text-md md:text-base md:text-lg">
            Atakent, 6398. Sk. 1/A, 35550 <br /> Karşıyaka/İzmir
          </p>
          <div className="flex flex-col space-y-2">
            <p className="text-md md:text-base md:text-lg">+905380247094</p>
            <p className="text-md md:text-base md:text-lg">
              manifest@gmail.com
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-60 sm:w-60 md:w-72 mt-2 mb-2"
          />
        </div>

        <div className="flex flex-col space-y-4 text-center md:text-right">
          <h2 className="text-2xl md:text-3xl md:text-4xl font-semibold font-IvyMode-Regular">
            Hızlı Erişim
          </h2>
          <ul className="space-y-1 md:space-y-2">
            <li>
              <a
                href="#menu"
                className="hover:underline text-md md:text-base md:text-lg"
              >
                Menü
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline text-md md:text-base md:text-lg"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className="hover:underline text-sm sm:text-base md:text-lg"
              >
                Rezervasyon
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-24 mb-14 flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-6 space-y-1 sm:space-y-0">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-sm sm:text-base md:text-lg"
        >
          INSTAGRAM
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="https://wa.me/905464781881"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-sm sm:text-base md:text-lg"
        >
          WHATSAPP
        </a>
        <span className="hidden md:inline">|</span>
        <a
          href="https://www.tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-sm sm:text-base md:text-lg"
        >
          TRIP ADVISOR
        </a>
      </div>

      <div className="container mx-auto border-t border-[#b59f73] mt-10 pt-6 text-center">
        <p className="text-stone-600 font-poppins text-xs sm:text-sm md:text-base tracking-[0.25em]">
          COPYRIGHT 2024 © MANIFEST, ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
