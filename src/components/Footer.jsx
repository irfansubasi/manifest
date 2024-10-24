import logo from '../assets/manifestgold.png';
import logo2 from '..//assets/manifestalone.png';
const Footer = () => {
  return (
    <footer className="bg-transparent text-[#b59f73] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center ">
            <img src={logo2} alt="Logo" className="w-40" />
          </div>
          <p>Adres: Mavişehir, İzmir</p>
          <p>Telefon: 05464781881</p>
          <p>E-posta: manifest@gmail.com</p>
        </div>

        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-60" />
        </div>

        <div className="flex flex-col space-y-4 text-right">
          <h2 className="text-4xl font-semibold font-IvyMode-Regular">
            Hızlı Erişim
          </h2>
          <ul className="space-y-2 ">
            <li>
              <a href="#menu" className="hover:underline">
                Menü
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          INSTAGRAM
        </a>
        <span>|</span>
        <a
          href="https://wa.me/905464781881"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          WHATSAPP
        </a>
        <span>|</span>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          TRIP ADVİSOR
        </a>
      </div>
      <div className="container mx-auto border-t border-[#b59f73] mt-10 pt-6 text-center">
        <p className=" text-stone-600 font-poppins text-sm tracking-[0.25em]">
          {' '}
          COPYRIGHT 2024 © MANIFEST, ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
