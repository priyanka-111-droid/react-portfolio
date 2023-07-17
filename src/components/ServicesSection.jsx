import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading, Image } from '@chakra-ui/react';
import Card from './Card';
import { Fragment } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const ServicesSection = () => {
  return (
      <FullScreenSection
        backgroundColor="white"
        p={8}
        alignItems="center"
        spacing={8}
        id="services-section"
      >
        <Heading
          as="h1"
          id="services-section"
          mt={20} 
        >
          Services
        </Heading>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>XYZ Services</TableCaption>
            <Thead>
              <Tr>
                <Th>Particulars of Machinery etc.</Th>
                <Th isNumeric>No. Of Machinery </Th>
                <Th isNumeric>Estimated Cost(Rs.)</Th>
                <Th isNumeric>Approximate Age(yrs)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Concrete Mixer</Td>
                <Td isNumeric>6</Td>
                <Td isNumeric>4.40 Lakh</Td>
                <Td isNumeric>2</Td>
              </Tr>
              <Tr>
                <Td>Vibrators</Td>
                <Td isNumeric>8</Td>
                <Td isNumeric>2.20 Lakh</Td>
                <Td isNumeric>5</Td>
              </Tr>
              <Tr>
                <Td>Pump</Td>
                <Td isNumeric>2</Td>
                <Td isNumeric>0.80 Lakh</Td>
                <Td isNumeric>3</Td>
              </Tr>
              <Tr>
                <Td>Cube Testing Machine</Td>
                <Td isNumeric>2</Td>
                <Td isNumeric>0.95 Lakh</Td>
                <Td isNumeric>3</Td>
              </Tr>
              <Tr>
                <Td>Concrete Mixer</Td>
                <Td isNumeric>6</Td>
                <Td isNumeric>4.40 Lakh</Td>
                <Td isNumeric>2</Td>
              </Tr>
              <Tr>
                <Td>Vibrators</Td>
                <Td isNumeric>8</Td>
                <Td isNumeric>2.20 Lakh</Td>
                <Td isNumeric>5</Td>
              </Tr>
              <Tr>
                <Td>Pump</Td>
                <Td isNumeric>2</Td>
                <Td isNumeric>0.80 Lakh</Td>
                <Td isNumeric>3</Td>
              </Tr>
              <Tr>
                <Td>Cube Testing Machine</Td>
                <Td isNumeric>2</Td>
                <Td isNumeric>0.95 Lakh</Td>
                <Td isNumeric>3</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
              <Th>Particulars of Machinery etc.</Th>
                <Th isNumeric>No. Of Machinery </Th>
                <Th isNumeric>Estimated Cost(Rs.)</Th>
                <Th isNumeric>Approximate Age(yrs)</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </FullScreenSection>
  );
};

export default ServicesSection;
