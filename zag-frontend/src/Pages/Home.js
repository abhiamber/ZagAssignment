import React from "react";
import { Box, Heading, Image, Input, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "../Components/Navbar";
import filtter from "../Images/filtter.png";
import Scroll from "../Components/Scroll";
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Box ml="25px" mr="25px">
      {/* Navbar section...... */}
      <Navbar />

      {/* Header section...... */}

      <Box
        textAlign={"left"}
        lineHeight={"32px"}
        fontStyle={"Poppins"}
        mt="22px"
      >
        <Heading fontWeight={"700"} fontSize={"25px"}>
          Welcome,
        </Heading>
        <Text fontWeight={"600"} colot="#666666">
          Our Fashions App
        </Text>
      </Box>

      {/* search section...... */}

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        height="50px"
        mt="19px"
        flexWrap={"wrap"}
        gap="5px"
      >
        <Box display={"flex"} textAlign={"center"} alignItems={"center"}>
          <Input
            background=" #F3F4F5"
            borderRadius="30px"
            placeholder="search"
            border="0px"
            pl="45px"
          />
          <Search2Icon
            fontWeight={100}
            position={"absolute"}
            left="40px"
            color="gray"
          />
        </Box>
        <Box ml="15px">
          <Image w="50px" heihgt="50px" src={filtter} alt="fitter" />
        </Box>
      </Box>

      {/* scroll section...... */}

      <Scroll />

      <Box
        mt="25px"
        mb="11px"
        display="flex"
        justifyContent={"space-between"}
        fontFamily={"'Poppins'"}
      >
        <Heading fontSize={"18px"} color="#000000">
          {" "}
          NEW ARRIVALS{" "}
        </Heading>
        <Text color="#666666" fontWeight={600} fontSize={"11px"}>
          view All
        </Text>
      </Box>
      {/* product list section...... */}

      <ProductList />
      {/* Footer  section...... */}
      <Footer />
    </Box>
  );
};

export default Home;
