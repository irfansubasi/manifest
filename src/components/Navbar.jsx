import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`z-[500] fixed top-0 left-0 right-0 h-[100px] flex items-center justify-between transition-all duration-300`}
        style={{
          background: isOpen
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
      >
        <div className="relative z-[100]">
          <button
            className="text-white p-3 focus:outline-none fixed top-7 left-10"
            onClick={toggleMenu}
          >
            <div
              className={`w-8 h-1 bg-[#b59f73] mb-1 transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-[#b59f73] mb-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-[#b59f73] transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-[#201c14] z-[99] transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <img
              className="w-[10rem] mb-[5rem]"
              src="./assets/manifestgold.png"
              alt="logo"
            />
            <ul className="font-IvyMode-Regular text-[#b59f73] text-5xl md:text-7xl space-y-8 text-center">
              <li>
                <a
                  className="hover:underline"
                  href="#home"
                  onClick={toggleMenu}
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="#about"
                  onClick={toggleMenu}
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="#lorem"
                  onClick={toggleMenu}
                >
                  Lorem
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="#menu"
                  onClick={toggleMenu}
                >
                  Menü
                </a>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href="#reservation"
                  onClick={toggleMenu}
                >
                  Rezervasyon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
