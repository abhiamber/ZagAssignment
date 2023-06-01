import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../Images/image.png";
import love from "../Images/love.png";
import shoes from "../Images/shoes.png";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  let navigate = useNavigate();
  let handleProductNavigate = () => {
    navigate("/product");
  };

  return (
    <Box
      fontFamily={"'Poppins'"}
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
    >
      <Box
        textAlign={"center"}
        height={"240px"}
        w="155px"
        position={"relative"}
        onClick={handleProductNavigate}
      >
        <Image src={image} alt="image" />
        <Image
          position={"absolute"}
          right="10%"
          top="5%"
          src={love}
          alt="love"
        />
        <Box lineHeight={"21px"}>
          <Text fontWeight={600}> The Marc Jacobs</Text>
          <Text color="#666666" fontWeight={400} fontSize={"11px"}>
            Traveler Tote{" "}
          </Text>
          <Text fontWeight={600}> $195.00</Text>
        </Box>
      </Box>
      <Box
        textAlign={"center"}
        height={"240px"}
        w="155px"
        position={"relative"}
        onClick={handleProductNavigate}
      >
        <Image src={shoes} alt="shoes" />
        <Image
          position={"absolute"}
          right="10%"
          top="5%"
          src={love}
          alt="love"
        />
        <Box lineHeight={"21px"}>
          <Text fontWeight={600}>Axel Arigato </Text>
          <Text color="#666666" fontWeight={400} fontSize={"11px"}>
            Clean 90 Triple Sneakers{" "}
          </Text>
          <Text fontWeight={600}> $245.00</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
