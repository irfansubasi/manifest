import './App.css';
import './fonts/fonts.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { Autoplay, EffectFade } from 'swiper/modules';
import { useEffect, useState } from 'react';

import logo from './assets/manifestgold.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <div className="flex flex-col md:flex-row items-center justify-between mt-56">
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
                soluta voluptatibus tenetur nemo recusandae obcaecati neque nam
                inventore.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-44">
            <div className="w-full md:w-1/2 p-8 card-text" data-aos="fade-left">
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
                soluta voluptatibus tenetur nemo recusandae obcaecati neque nam
                inventore.
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
        </section>
      </main>
    </>
  );
}

export default App;
