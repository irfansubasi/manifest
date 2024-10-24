import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`z-[500] fixed top-0 left-0 right-0 h-[100px]`}
        style={{
          background: isOpen
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
        }}
      >
        <div className="relative z-[100]">
          <button
            className="text-white p-3 focus:outline-none fixed top-4 right-4"
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

        {/* Full Screen Overlay Menu */}
        <div
          className={`fixed inset-0 bg-[#201c14] z-[99] transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-center items-center h-full">
            <ul className="font-IvyMode-Bold text-[#b59f73] text-3xl space-y-8 text-center">
              <li>
                <a href="#home" onClick={toggleMenu}>
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#lorem" onClick={toggleMenu}>
                  İstenilen Bölüm
                </a>
              </li>
              <li>
                <a href="#menu" onClick={toggleMenu}>
                  Menü
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  İletişim
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
