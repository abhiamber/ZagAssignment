import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../Images/bg.png";
import wifi from "../Images/wifi.png";
import menubar from "../Images/menubar.png";
import love2 from "../Images/love2.png";
import dots from "../Images/dots.png";

const Product = () => {
  return (
    <Box>
      {/* top portion to see image of item.. */}
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
          bottom="20px"
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
          bottom="20px"
          border="1px  #130F26"
        >
          {" "}
          <Image src={dots} alt="dots" />
        </Box>
      </Box>
      {/* dtails  of product.. */}

      <Box ml="25px" mr="25px">
        {/* product meta */}

        <Box>
        <Text></Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
