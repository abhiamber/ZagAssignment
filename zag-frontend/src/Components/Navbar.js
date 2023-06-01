import { Box, Image } from "@chakra-ui/react";
import React from "react";

import Rectangleuser from "../Images/Rectangleuser.png";
import menu from "../Images/menu.png";

const Navbar = () => {
  return (
    <Box
      mt="44px"
      height={"50px"}
      display={"flex"}
      justifyContent={"space-between"}
      textAlign={"center"}
    >
      <Box w="35px" height={"35px"} mt={"9px"}>
        <Image src={menu} alt="menu" />
      </Box>

      <Box
        w="50px"
        height={"50px"}
        border="3px"
        background={"#F5F5F5"}
        borderRadius={"50%"}
      >
        <Image src={Rectangleuser} alt={"user"} />
      </Box>
    </Box>
  );
};

export default Navbar;
