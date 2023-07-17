import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, technicalqualification,designation }) => {

  return (
    <VStack bgColor="whiteAlpha.900" color="blackAlpha.800" borderRadius="lg" alignItems="center" justifyContent="center">
      <VStack alignItems="flex-start" padding="3">
        {/* <Image src={imageSrc} alt={title} /> */}
        <Heading as="h3">{title}</Heading>
        <Text>{technicalqualification}</Text>
        <Text>{designation}</Text>
      </VStack>
    </VStack>
  );
};

export default Card;
