//test
import './App.css';
import './fonts/fonts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';

import logo from './assets/manifestgold.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MenuItem from './components/MenuItem';

import menuData from './data/menu.json';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const [logoScale, setLogoScale] = useState(1);
  const [isLogoFixed, setIsLogoFixed] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleValue = Math.max(0.3, 1 - scrollY / 100);
      setLogoScale(scaleValue);

      if (window.scrollY > 100) {
        setIsLogoFixed(true);
      } else {
        setIsLogoFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <header
        id="home"
        className="w-full h-dvh relative flex justify-center items-center"
      >
        <div className="container z-50 mx-auto px-7 flex justify-center items-center">
          <img
            src={logo}
            alt=""
            className={`${
              isLogoFixed ? 'fixed top-[15px] md:top-[-40px] transition' : ''
            } w-[40rem] transition-transform duration-1000`}
            style={{ transform: `scale(${logoScale})` }}
          />
        </div>
        <div className="h-full inset-0 bg-black opacity-[0.35] absolute">
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={30}
            effect={'fade'}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="h-full"
          >
            <SwiperSlide>
              <img
                src="./assets/images/12.webp"
                alt="Image 1"
                className={`h-full w-full object-cover transition-transform duration-9000 ${
                  activeIndex === 0 ? 'scale-110' : 'scale-100'
                }`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./assets/images/8.webp"
                alt="Image 2"
                className={`h-full w-full object-cover transition-transform duration-9000 ${
                  activeIndex === 1 ? 'scale-110' : 'scale-100'
                }`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./assets/images/1.webp"
                alt="Image 3"
                className={`h-full w-full object-cover transition-transform duration-9000 ${
                  activeIndex === 2 ? 'scale-110' : 'scale-100'
                }`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="contact absolute bottom-[50px] left-[50%]">
          <ul className="flex gap-x-5">
            <li>
              <a
                className="hover:underline"
                target="_blank"
                href="https://wa.me/+905307297686"
              >
                WHATSAPP
              </a>
            </li>
            <span> | </span>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                href="tel:+905307297686"
              >
                HEMEN ARA
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className="info-section container mx-auto">
          <div id="about" className="about-us mt-20">
            <h1
              data-aos="fade-up"
              className="flex items-center justify-center text-center text-5xl md:text-6xl font-IvyMode-Bold mb-10"
            >
              — Hakkımızda —
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2" data-aos="fade-left">
                <img
                  src="./assets/images/entrance.webp"
                  alt="Sol Resim"
                  className="w-full h-auto rounded"
                />
              </div>

              <div
                className="w-full md:w-1/2 p-8 card-text"
                data-aos="fade-right"
              >
                <p className="text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam placeat autem perspiciatis molestiae molestias, beatae
                  reiciendis ea est nisi magnam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita natus odit voluptate error aperiam saepe.
                  <br />
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas aliquam nulla, dolor dolorum magni perspiciatis iste
                  soluta voluptatibus tenetur nemo recusandae obcaecati neque
                  nam inventore.
                </p>
              </div>
            </div>
          </div>

          <div className="desc1 mt-40" id="lorem">
            <h1
              data-aos="fade-up"
              className="text-center text-5xl md:text-6xl font-IvyMode-Bold mb-10"
            >
              — Lorem —
            </h1>
            <div className="flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="w-full p-8 card-text" data-aos="fade-left">
                <p className="text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aperiam placeat autem perspiciatis molestiae molestias, beatae
                  reiciendis ea est nisi magnam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita natus odit voluptate error aperiam saepe.
                  <br />
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas aliquam nulla, dolor dolorum magni perspiciatis iste
                  soluta voluptatibus tenetur nemo recusandae obcaecati neque
                  nam inventore.
                </p>
              </div>
              <div className="" data-aos="fade-right">
                <img
                  src="./assets/images/food1.jpg"
                  alt="Sol Resim"
                  className="w-[60rem] h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="menu"
          className="menu-section container mx-auto text-center mt-40 py-12"
        >
          <h1
            data-aos="fade-up"
            className="mb-8 text-5xl md:text-6xl font-IvyMode-Bold"
          >
            — MENÜ —
          </h1>
          {Object.keys(menuData).map((categoryKey, categoryIndex) => (
            <Accordion
              key={categoryIndex}
              className={`bg-transparent text-[#b59f73] shadow-none drop-shadow-none my-5 ${
                categoryIndex !== Object.keys(menuData).length - 1
                  ? 'border-b border-[#b59f73] md:mx-8'
                  : ''
              }`}
              expanded={expanded === `panel${categoryIndex}`}
              onChange={handleChange(`panel${categoryIndex}`)}
            >
              <AccordionSummary
                aria-controls={`panel${categoryIndex}bh-content`}
                id={`panel${categoryIndex}bh-header`}
              >
                <Typography
                  data-aos="zoom-in"
                  className="w-full text-center text-4xl font-IvyMode-SemiBold"
                >
                  {menuData[categoryKey].title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="p-0">
                <div>
                  {menuData[categoryKey].items.map((item, index) => {
                    if (index % 2 === 0) {
                      const leftItem = item;
                      const rightItem =
                        menuData[categoryKey].items[index + 1] || {};
                      return (
                        <MenuItem
                          key={index}
                          leftItem={leftItem}
                          rightItem={rightItem}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>

        <section id="reservation" className="res-section  mt-40">
          <div className="res-div md:h-[100vh] flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="res-img w-full md:w-1/2 z-40" data-aos="fade-right">
              <img
                src="./assets/images/4.webp"
                alt="Sol Resim"
                className="w-full h-auto rounded"
              />
            </div>

            <div
              className="res-text w-full md:w-1/2 bg-transparent md:w-1/2 p-10 md:p-32 card-text z-50"
              data-aos="fade-left"
            >
              <h1 className="font-IvyMode-Regular text-4xl mb-8 font-bold">
                Rezervasyon için;
              </h1>
              <p className="font-bold">
                Manifest’te taze deniz ürünleri, mezeler ve samimi bir atmosfer
                eşliğinde unutulmaz bir akşam için sizi restoranımıza davet
                ediyoruz.
                <br />
                <br />
                18 yaş altı misafirlerimizi yalnızca ailesiyle birlikte kabul
                edebiliyoruz.
                <br />
                <br />
                Çalışma Saatlerimiz:
                <br />
                <br />
                <ul className="list-disc ml-8">
                  <li>Hafta içi: 17:30 - 00:30</li>
                  <li>Hafta sonu: 15:30 - 00:30</li>
                  <li>Pazartesi günleri kapalıyız.</li>
                </ul>
                <br />
                Detaylı bilgi için bize telefonla ulaşabilir veya mesaj
                gönderebilirsiniz.
                <br />
                <br />
                <ul className="flex gap-x-5">
                  <li>
                    <a target="_blank" href="https://wa.me/905380247094">
                      WHATSAPP
                    </a>
                  </li>
                  <span> | </span>
                  <li>
                    <a target="_blank" href="tel:05307297686">
                      HEMEN ARA
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
