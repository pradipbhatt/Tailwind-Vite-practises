import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { ServiceData } from "../constants";

interface ServiceItem {
  title: string;
  content: string;
  backgroundImage: string;
}

const TestimonialsSlider = () => {
    return (
        <div className="flex items-center justify-center flex-col h-[600px] bg-[#33a524]">
      <Swiper
        breakpoints={{
            440: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="max-w-[100%] lg:max-w-[90%]"
      >
        {ServiceData.map((item: ServiceItem) => (
            <SwiperSlide key={item.title}>
                {/* card container */}
              <div className="container  bg-white h-auto rounded-lg  my-2 py-0 transition-transform duration-700 transform scale-100 hover:scale-105 hover:rounded-6xl hover:box-border">
                
            <div className="relative flex  h-[250px] w-2/3 ml-10 items-center justify-center group shadow-lg text-black  bg-fuchsia-400 overflow-hidden cursor-pointer drop-shadow-2xl rounded-full">
              <div className="absolute shadow-[0px_3px_38px_2px_#553c9a] inset-0 bg-cover bg-center transition-transform duration-700 transform scale-100 group-hover:scale-110 "
                style={{ backgroundImage: `url(${item.backgroundImage})`, height: '100%' }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10  rounded-3xl" />
              {/* You can add additional testimonial elements here */}
            </div>
              <div className="p-6">
                <h1 className="text-xl mb-4 lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px] text-center text-justify">{item.content}</p>
              </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
