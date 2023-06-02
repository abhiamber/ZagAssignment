import React, { useState } from "react";
import data from "../../db.json";

import { Input, Box, Image, Text } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import SearchTag from "./SearchTag";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const MainTable = () => {
  let [dashData, setDashData] = useState(data);
  console.group(dashData);
  return (
    <Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr /* Body 2 Emphasized */
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="600"
              fontSize="12px"
              lineHeight="15px"
              letterSpacing="0.02px"
              color="#4F5E74"
            >
              <Td>
                <SearchTag />
              </Td>
              <Td textAlign={"cneter"}>Active Orders</Td>
              <Td textAlign={"cneter"}>Amount</Td>
              <Td textAlign={"cneter"}>Placed on</Td>
              <Td textAlign={"left"}>Options</Td>
            </Tr>
          </Thead>
          <Tbody>
            {dashData &&
              dashData.map((elem) => {
                return (
                  <Tr key={elem.id}>
                    <Td>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        // justifyContent={"center"}
                        gap="30px"
                        fontFamily="Inter"
                        fontWeight="500"
                        fontSize="14px"
                        lineHeight="17px"
                        /* identical to box height */

                        letterSpacing="-0.154px"
                        /* Darker Gray */
                      >
                        <Box
                          height={"20px"}
                          w="20px"
                          borderRadius={"50%"}
                          color="rgba(0, 0, 0, 0.3)"
                          border="1px"
                          ml="10px"
                        ></Box>
                        <Box>
                          {" "}
                          <Image src={elem.imageUrl} />
                        </Box>
                        <Box
                          fontFamily="Inter"
                          fontWeight="400"
                          fontSize="12px"
                          lineHeight="15px"
                          textAlign={"left"}
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"left"}
                        >
                          <Text fontSize="14px">{elem.title} </Text>
                          <Text fontSize={"12px"} color="rgba(0, 0, 0, 0.5)">
                            {" "}
                            {elem.desc}{" "}
                          </Text>
                        </Box>
                      </Box>
                    </Td>
                    <Td textAlign={"cneter"} color="#70768C">
                      {elem.status}
                    </Td>
                    <Td textAlign={"cneter"} color="#70768C">
                      {elem.amount}
                    </Td>
                    <Td textAlign={"cneter"} color="#70768C">
                      {elem.orderDate}
                    </Td>
                    <Td
                      m="auto"
                      pl="35px"
                      //   textAlign={"center"}
                      fontSize={"18px"}
                      color="#70768C"
                    >
                      <BiDotsHorizontalRounded />
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainTable;
