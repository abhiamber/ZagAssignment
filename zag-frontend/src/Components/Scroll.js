import { Box, Image } from "@chakra-ui/react";
import React from "react";
import features from "../Images/features.png";
import features2 from "../Images/features2.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

const Scroll = () => {
  return (
    <Box mt="35px" mr="-25px">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        w={"100%"}
      >
        <SwiperSlide>
          <Box display={"flex"} justifyContent={"space-between"} gap="3px">
            <Image src={features} alt="bg" />
            <Image src={features2} alt="bg" />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box display={"flex"} justifyContent={"space-between"} gap="3px">
            <Image src={features} alt="bg" />
            <Image src={features2} alt="bg" />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box display={"flex"} justifyContent={"space-between"} gap="3px">
            <Image src={features} alt="bg" />
            <Image src={features2} alt="bg" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Scroll;
