import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import zaclogo from "../Images/zaclogo.png";
import Vector from "../Images/Vector.png";
import setting from "../Images/setting.png";
import { TbGridDots } from "react-icons/tb";

const SideNav = () => {
  console.log(zaclogo);
  return (
    <Box
      background="#FFFFFF"
      border="1px solid #EFF0F6"
      borderRadius="20px"
      height={"1162px"}
      // pb="191px"
    >
      <Box mt="28px" ml="69px" mr="104px" w="73px" height={"47px"} mb="42.5px">
        <Image w="100%" src={zaclogo} alt="zaclogo" />
      </Box>

      <Box display={"flex"} justifyContent={"center"} gap="15px" mb="26px">
        <Image w="20.9px" height="12px" src={Vector} alt="Vector" />
        <Text
          fontFamily="Inter"
          fontWeight="500"
          fontSize="14px"
          lineHeight="17px" /* identical to box height */
          letterSpacing="-0.154px"
          textAlign={"left"}
        >
          Reports
        </Text>
      </Box>

      <Box
        display={"flex"}
        bg="blue.50"
        w="193px"
        height="46px"
        m="auto"
        alignItems={"center"}
        justifyContent={"center"}
        color="blue"
        gap="10px"
        textAlign={"left"}
        mb="26px"
      >
        <Text ml="18px">
          {" "}
          <TbGridDots />
        </Text>

        <Text
          textAlign={"left"}
          fontFamily="Inter"
          fontWeight="500"
          fontSize="14px"
          lineHeight="17px" /* identical to box height */
          letterSpacing="-0.154px"
          ml="8px"
        >
          WorkSpace
        </Text>
      </Box>

      <Box display={"flex"} justifyContent={"center"} gap="15px">
        <Image w="22px" height="20px" src={setting} alt="setting" ml="18px" />
        <Text
          fontFamily="Inter"
          fontWeight="500"
          fontSize="14px"
          lineHeight="17px" /* identical to box height */
          letterSpacing="-0.154px"
          textAlign={"left"}
          color="#4D4D4D"
          mr="28px"
        >
          Setting
        </Text>
      </Box>
    </Box>
  );
};

export default SideNav;
