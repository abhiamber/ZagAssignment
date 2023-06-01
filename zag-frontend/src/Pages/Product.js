import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import bg from "../Images/bg.png";
import wifi from "../Images/wifi.png";
import menubar from "../Images/menubar.png";
import love2 from "../Images/love2.png";
import review from "../Images/review.png";

import buyicon from "../Images/buyicon.png";

import dots from "../Images/dots.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
let size = ["S", "M", "L", "XL", "XXL"];

const Product = () => {
  let [itemSize, setItemSize] = useState("M");
  let [qty, setQty] = useState(1);
  let [price, setPrice] = useState(198.0);

  let navigate = useNavigate();

  // *********** calculting total price ***************//
  let totalPrice = () => {
    return price * qty;
  };

  // *********** Navigate to payment route ***************//

  let handleBuy = () => {
    navigate("/payment");
  };

  useEffect(() => {
    if (itemSize === "S") {
      setPrice(180.0);
    } else if (itemSize === "M") {
      setPrice(198.0);
    } else if (itemSize === "L") {
      setPrice(178.0);
    } else if (itemSize === "XL") {
      setPrice(208.0);
    } else if (itemSize === "XXL") {
      setPrice(168.0);
    }
  }, [itemSize]);

  return (
    <Box position={"relative"}>
      {/* top portion to see image of item.. */}
      <Box>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          w={"100%"}
        >
          <SwiperSlide>
            <Box background={`url${bg}`} position={"relative"}>
              <Image src={bg} alt="bg" />
              <Box ml="25px" mr="25px" position={"absolute"} top="11px">
                {" "}
                <Image src={wifi} alt="wifi" />
              </Box>
              <Box ml="25px" mr="25px" position={"absolute"} top="44px">
                {" "}
                <Image src={menubar} alt="menubar" />
              </Box>
              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                right="0px"
                bottom="47px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={love2} alt="love2" />
              </Box>

              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                left="140px"
                right="122px"
                bottom="42px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={dots} alt="dots" />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box background={`url${bg}`} position={"relative"}>
              <Image src={bg} alt="bg" />
              <Box ml="25px" mr="25px" position={"absolute"} top="11px">
                {" "}
                <Image src={wifi} alt="wifi" />
              </Box>
              <Box ml="25px" mr="25px" position={"absolute"} top="44px">
                {" "}
                <Image src={menubar} alt="menubar" />
              </Box>
              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                right="0px"
                bottom="47px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={love2} alt="love2" />
              </Box>

              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                left="140px"
                right="122px"
                bottom="42px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={dots} alt="dots" />
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box background={`url${bg}`} position={"relative"}>
              <Image src={bg} alt="bg" />
              <Box ml="25px" mr="25px" position={"absolute"} top="11px">
                {" "}
                <Image src={wifi} alt="wifi" />
              </Box>
              <Box ml="25px" mr="25px" position={"absolute"} top="44px">
                {" "}
                <Image src={menubar} alt="menubar" />
              </Box>
              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                right="0px"
                bottom="47px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={love2} alt="love2" />
              </Box>

              <Box
                ml="25px"
                mr="25px"
                position={"absolute"}
                left="140px"
                right="122px"
                bottom="42px"
                border="1px  #130F26"
              >
                {" "}
                <Image src={dots} alt="dots" />
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* dtails  of product.. */}

      <Box
        background="#FFFFFF"
        borderRadius="30px 30px 0px 0px"
        position={"absolute"}
        top="400px"
        zIndex={1000}
      >
        {/* product meta */}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          ml="25px"
          mr="25px"
          mt="20px"
        >
          <Box textAlign={"left"}>
            <Box>
              <Text fontWeight={600} fontSize={"18px"} lineHeight={"22.8px"}>
                Roller Rabbit
              </Text>
              <Text
                color="#666666"
                fontWeight={400}
                fontSize={"11px"}
                lineHeight={"22.8px"}
              >
                Vado Odelle Dress
              </Text>
            </Box>
            <Box>
              <Image
                color="#000000"
                fontWeight={400}
                lineHeight={"16.5px"}
                src={review}
                alt="review"
              />
            </Box>
          </Box>

          <Box textAlign={"right"}>
            <Box
              background="#EEEEEE"
              borderRadius="30px"
              height={"30px"}
              textAlign={"center"}
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              mb="11px"
              cursor={"pointer"}
            >
              <Text
                _disabled={qty === 1}
                onClick={() => {
                  if (qty === 0) {
                    return;
                  } else {
                    setQty(qty - 1);
                  }
                }}
              >
                -
              </Text>
              <Text>{qty}</Text>
              <Text onClick={() => setQty(qty + 1)}>+</Text>
            </Box>
            <Box>
              <Heading
                fontWeight={600}
                fontSize="11px"
                color="#000000"
                lineHeight={"16.5px"}
              >
                Avaliable in stok
              </Heading>
            </Box>
          </Box>
        </Box>

        {/*  product..Size */}

        <Box ml="24px" mt="23px" mr="90px">
          <Heading
            textAlign={"left"}
            fontSize={"16px"}
            fontWeight={600}
            lineHeight={"24px"}
            mb="12px"
          >
            Size
          </Heading>
          <Box
            fontFamily="Poppins"
            fontWeight=" 600"
            fontSize="14px"
            lineHeight="21px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {size.map((elem, index) => {
              return (
                <Box
                  border="1px solid #DDDDDD"
                  borderRadius={"50%"}
                  boxSizing="border-box"
                  height="40px"
                  w="40px"
                  pt="8px"
                  key={index}
                  bg={itemSize === elem ? "black" : null}
                  color={itemSize === elem ? "white" : "#888888"}
                  onClick={() => setItemSize(elem)}
                >
                  {elem}
                </Box>
              );
            })}
          </Box>
        </Box>
        {/*  product..Descripton */}

        <Box mt="25px" mr="25px">
          <Heading
            textAlign={"left"}
            fontSize={"16px"}
            fontWeight={600}
            lineHeight={"24px"}
            ml="24px"
          >
            Description
          </Heading>
          <Text
            ml="25px"
            mr="25px"
            fontSize={"11px"}
            fontWeight={400}
            lineHeight={"16.5px"}
            color="#666666"
            textAlign={"left"}
            mt="15px"
          >
            Get a little lift from these Sam Edelman sandals featuring ruched
            straps and leather lace-up ties, while a braided jute sole makes a
            fresh statement for summer.
          </Text>
        </Box>

        {/*  price and buy now */}

        <Box
          mr="25px"
          ml="25px"
          mt="32px"
          mb="26px"
          display="flex"
          justifyContent={"space-between"}
        >
          <Box textAlign={"left"} mt="10px">
            <Text
              fontSize={"9px"}
              fontWeight={400}
              lineHeight={"9px"}
              color="#AAAAAA"
              pb="2px"
            >
              Total Price
            </Text>
            <Text fontSize={"18px"} fontWeight={700} lineHeight={"18px"}>
              ${totalPrice()}.00
            </Text>
          </Box>

          <Box
            bg="black"
            display={"flex"}
            alignItems={"center"}
            w="200px"
            height={"50px"}
            justifyContent={"space-evenly"}
            borderRadius="30px"
            onClick={handleBuy}
          >
            <Image src={buyicon} alt="buyicon" />
            <Text
              fontSize={"16px"}
              cursor={"pointer"}
              fontWeight={600}
              lineHeight={"16px"}
              color="white"
            >
              Buy Now
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
