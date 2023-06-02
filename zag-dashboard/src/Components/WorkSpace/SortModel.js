import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
  Heading,
} from "@chakra-ui/react";
import { RiArrowUpSLine } from "react-icons/ri";
import { HiSelector } from "react-icons/hi";

const SortModel = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box onClick={onOpen} display={"flex"} alignItems={"center"} gap="5px">
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
          Amount
          <RiArrowUpSLine />
        </Text>

        <Text>
          {" "}
          <HiSelector />
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Sort product acording to amount</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>bhjhbhjjj</Heading>
            <Select>
              <option value="">Sort product</option>
              <option value="asc">asc</option>
              <option value="dsc">dsc</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Text colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SortModel;
