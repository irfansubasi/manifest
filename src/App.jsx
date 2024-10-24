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

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <>
      <header className="w-full h-dvh relative flex justify-center items-center">
        <div className="container z-50 mx-auto px-7 flex justify-center items-center">
          <img src={logo} alt="" className="w-[40rem]" />
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
        <div className="contact absolute bottom-[50px] left-[50px]">
          <ul className="flex gap-x-5">
            <li>
              <a target="_blank" href="https://wa.me/905464781881">
                WHATSAPP
              </a>
            </li>
            <span> | </span>
            <li>
              <a target="_blank" href="tel:05331451741"></a>HEMEN ARA
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className="info-section container mx-auto">
          <div className="about-us mt-56">
            <h1
              data-aos="fade-up"
              className="text-center text-6xl font-IvyMode-Bold mb-10"
            >
              Hakkımızda
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

          <div className="desc1 mt-56">
            <h1
              data-aos="fade-up"
              className="text-center text-6xl font-IvyMode-Bold mb-10"
            >
              Lorem
            </h1>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div
                className="w-full md:w-1/2 p-8 card-text"
                data-aos="fade-left"
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
              <div className="w-full md:w-1/2" data-aos="fade-right">
                <img
                  src="./assets/images/food1.jpg"
                  alt="Sol Resim"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="menu-section container mx-auto text-center mt-52 py-12">
          <h1 data-aos="fade-up" className="mb-8 text-6xl font-IvyMode-Bold">
            MENÜ
          </h1>
          {Object.keys(menuData).map((categoryKey, categoryIndex) => (
            <Accordion
              data-aos="zoom-in"
              key={categoryIndex}
              className={`bg-transparent text-[#b59f73] shadow-none drop-shadow-none py-4 ${
                categoryIndex !== Object.keys(menuData).length - 1
                  ? 'border-b border-[#b59f73] mx-8'
                  : ''
              }`}
              expanded={expanded === `panel${categoryIndex}`}
              onChange={handleChange(`panel${categoryIndex}`)}
            >
              <AccordionSummary
                aria-controls={`panel${categoryIndex}bh-content`}
                id={`panel${categoryIndex}bh-header`}
              >
                <Typography className="w-full text-center text-4xl font-IvyMode-SemiBold">
                  {menuData[categoryKey].title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
