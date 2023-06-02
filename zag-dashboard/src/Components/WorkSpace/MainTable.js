import React, { useState } from "react";
import data from "../../db.json";

import { Box, Image, Text } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import SearchTag from "./SearchTag";
import gm from "../../Images/gm.png";
import mac from "../../Images/mac.png";
import tesla from "../../Images/tesla.png";
import { HiSelector } from "react-icons/hi";
import { RiArrowDownSFill, RiArrowUpSLine } from "react-icons/ri";
import SortModel from "./SortModel";
import FilterModel from "./FilterModel";
import UpdateModel from "./UpdateModel";

let obj = { McDonalds: mac, Tesla: tesla, GM: gm };

const MainTable = () => {
  let [dashData, setDashData] = useState(data);
  // console.log(dashData);

  let SortingFunction = (id) => {
    if (id === "1") {
      let dataa = data.sort((a, b) => a.amount - b.amount);
      setDashData([...dataa]);
    } else if (id === "2") {
      let dataa = data.sort((b, a) => a.amount - b.amount);
      setDashData([...dataa]);
    }
  };

  let FilterFunction = (id) => {
    console.log(typeof id, id);
    if (id === "1") {
      let datas = data.filter((elem) => elem.status === "confirmed");
      setDashData([...datas]);
    } else if (id === "2") {
      let datas = data.filter((elem) => elem.status === "delivered");
      setDashData([...datas]);
    } else if (id === "3") {
      let datas = data.filter((elem) => elem.status === "refund");
      setDashData([...datas]);
    } else if (id === "4") {
      let datas = data.filter((elem) => elem.status === "pending");
      setDashData([...datas]);
    } else {
      setDashData([...data]);
    }
  };

  let updateDataFunction = (amount, elem) => {
    if (!amount) {
      return;
    }

    let newData = dashData.map((item) => {
      if (elem.id === item.id) {
        return { ...item, amount: amount };
      } else {
        return item;
      }
    });
    // console.log(amount, elem);
    setDashData([...newData]);
  };
  return (
    <Box mt="22px">
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
              {/* search part* */}
              <Td>
                <SearchTag />
              </Td>
              {/* filter product on status** */}
              <Td>
                <FilterModel FilterFunction={FilterFunction} />
              </Td>
              {/* sort data with amount using modal  */}
              <Td cursor={"pointer"}>
                <SortModel SortingFunction={SortingFunction} />
              </Td>
              {/*  placed on table data */}
              <Td cursor={"pointer"}>
                <Box display={"flex"} alignItems={"center"} gap="5px">
                  <Text
                    textAlign={"center"}
                    bg="#EFF0F6"
                    display={"flex"}
                    height="27px"
                    alignItems={"center"}
                    opacity={"0.5"}
                    w="125px"
                    justifyContent={"space-around"}
                  >
                    Placed on
                    <RiArrowUpSLine />
                  </Text>

                  <Text>
                    {" "}
                    <HiSelector />
                  </Text>
                </Box>
              </Td>{" "}
              {/*  option  table data */}
              <Td cursor={"pointer"}>
                <Box display={"flex"} alignItems={"center"} gap="5px">
                  <Text textAlign={"center"}>Options</Text>

                  <Text>
                    {" "}
                    <RiArrowDownSFill />
                  </Text>
                </Box>
              </Td>{" "}
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
                          <Image
                            src={obj[elem.title]}
                            w="61px"
                            height="42px"
                            bg={"FDE7E6"}
                            m="auto"
                          />
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
                          gap="4px"
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
                      {elem.activeOrders}
                    </Td>
                    <Td textAlign={"cneter"} color="#70768C">
                      {elem.amount}
                    </Td>
                    <Td textAlign={"cneter"} color="#70768C">
                      {elem.orderDate}
                    </Td>

                    {/*  table data for editing the products details. */}

                    <Td
                      m="auto"
                      pl="35px"
                      fontSize={"18px"}
                      color="#70768C"
                      cursor={"pointer"}
                    >
                      <UpdateModel
                        updateDataFunction={updateDataFunction}
                        elem={elem}
                      />
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
