import { Box, Button, Image, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { LockIcon } from "@chakra-ui/icons";
import process from "../Images/process.png";
import received from "../Images/received.png";

// import { Icon, BiCreditCardAlt } from "@chakra-ui/react";
import { BiCreditCardAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [card, setCard] = useState({
    cardno: "",
    expirydt: "",
    name: "",
    cvv: "",
  });
  const toast = useToast();
  let [pay, setPay] = useState(false);
  let navigate = useNavigate();

  // ********payment handing***********
  const handleOrder = () => {
    setPay(true);
    setTimeout(() => {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" broder="0px" pt="80px">
            <Image src={process} />
          </Box>
        ),
      });
    }, 1500);
    setTimeout(() => {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" broder="0px" pt="80px">
            <Image src={received} />
          </Box>
        ),
      });
    }, 8000);

    setTimeout(() => {
      navigate("/");
    }, 14000);

    // console.log(card, card.cardno.length);
  };

  // ********card validation***********

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" - ") : value;
  };

  const handleCardNo = (e) => {
    setCard({
      ...card,
      cardno: e.target.value,
    });
  };

  const handleExpiry = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value,
    });
  };

  const handleCvvAndName = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  if (pay) {
    return;
  }
  return (
    <Box bg="pink.50" minHeight={"100vh"} w="100%">
      <Box
        // className="creditcard-form"
        display={"flex"}
        flexDirection={"column"}
        w="80%"
        m="auto"
        pt="30%"
        gap="10px"
      >
        <Box position={"relative"}>
          <Text textAlign={"left"}>Card Number</Text>
          <Input
            type="text"
            data-mask="0000 0000 0000 0000"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={cc_format(card.cardno)}
            onChange={handleCardNo}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Box
            position={"absolute"}
            top="33px"
            right="20px"
            fontSize={"25px"}
            fontWeight={200}
          >
            {" "}
            <BiCreditCardAlt />
          </Box>
        </Box>
        <Box>
          <Text textAlign={"left"}>Name on card</Text>
          <Input className="inputbox" name="name" onChange={handleCvvAndName} />
        </Box>

        <Box display={"flex"} justifyContent="space-between" gap="8px">
          <Box>
            {" "}
            <Text textAlign={"left"}>Expiration date</Text>
            <Input
              placeholder="MM/YY"
              type="text"
              name="expiry-data"
              className="cardetails-input"
              onChange={handleExpiry}
              value={expriy_format(card.expirydt)}
            />
          </Box>
          <Box>
            {" "}
            <Text textAlign={"left"}>Security code</Text>
            <Input
              type="password"
              placeholder="000"
              maxLength="3"
              name="cvv"
              onChange={handleCvvAndName}
              pattern="[0-9][0-9][0-9]"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </Box>
        </Box>
        <Box position={"relative"}>
          <Button
            bg={"#e40980"}
            borderRadius="4px"
            w="100%"
            _hover={{ bg: "#e40980" }}
            color="white"
            onClick={handleOrder}
          >
            PAY NOW
          </Button>
          <LockIcon
            color="white"
            // bg="black"
            position={"absolute"}
            left="90px"
            top="10px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
