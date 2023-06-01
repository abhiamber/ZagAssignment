import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import home from "../Images/home.png";
import cart from "../Images/cart.png";
import notification from "../Images/notification.png";
import profile from "../Images/profile.png";

const Footer = () => {
  return (
    <Box
      height={"70px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      flexWrap={"wrap"}
      ml="-25px"
      mr="-25px"
      background="#FFFFFF"
      boxShadow="0px -2px 7px rgba(0, 0, 0, 0.1)"
      borderRadius="30px 30px 0px 0px"
    >
      <Box
        display={"flex"}
        textAlign={"center"}
        alignItems={"center"}
        gap="4px"
        background={"#EEEEEE"}
        borderRadius={"30px"}
      >
        <Image src={home} alt="home" />
        <Text fontWeight={600} p="5px" fontSize={"11px"}>
          Home{" "}
        </Text>
      </Box>
      <Box>
        <Image src={cart} alt="cart" />
      </Box>
      <Box>
        <Image src={notification} alt="notification" />
      </Box>
      <Box>
        <Image src={profile} alt="profile" />
      </Box>
    </Box>
  );
};

export default Footer;
