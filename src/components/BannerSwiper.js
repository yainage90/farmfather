import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import appBanner from "../farmfather_banner.png";

SwiperCore.use([Navigation, Pagination]);

const BannerSwiper = () => {
  return (
    <Swiper
      className="banner"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={true}
      loop={true}
      style={{
        width: "100%",
        height: "20vh",
      }}
    >
      <SwiperSlide>
        <img width="100%" height="100%" src={appBanner} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          width="100%"
          height="100%"
          src="https://cdn.inflearn.com/public/main_sliders/eead4cae-85b7-4faf-b8e4-6d7680037c2d/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%8C%E1%85%B5%E1%84%80%E1%85%B3%E1%86%B7%E1%84%92%E1%85%A1%E1%86%AF%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%AE%E1%86%BC_521.gif"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
