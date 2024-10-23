import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import { Autoplay, EffectFade } from 'swiper/modules';
import { useState } from 'react';

import logo from './assets/manifestgold.png';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

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
      </header>
    </>
  );
}

export default App;
