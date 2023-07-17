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
} from '@chakra-ui/react';


const ProjectsSection = () => {
  return (
      <FullScreenSection
        backgroundColor="purple.400"
        isDarkBackground
        p={8}
        alignItems="center"
        spacing={8}
        id="projects-section"
      >
        <Heading
          as="h1"
          id="projects-section"
          mt={20}
        >
          Projects
        </Heading>

        <TableContainer whiteSpace={'wrap'}>
          <Table variant='simple' size={'lg'}>
            <TableCaption>Projects</TableCaption>
            <Thead>
              <Tr>
                <Th isNumeric>Sr No.</Th>
                <Th>Name of Project</Th>
                <Th>Name of client</Th>
                <Th>Work Details</Th>
                <Th isNumeric>Our Order value(in crore)</Th>
                <Th>Date of Completion</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1.</Td>
                <Td>Work of different Water 
                Work UGR & OHSR 
                Faridabad</Td>
                <Td>NBCC </Td>
                <Td>Construction of RCC UGT & OHSR 
                at Faridabad incl. Elect.,Mech. 
                Work of different capacity and 
                installation of 138 tubewell & 
                Rainwater harvesting work at 
                Faridabad.
                </Td>
                <Td>
                  175 crore
                </Td>
                <Td>
                  30/11/2018
                </Td>
                <Td>
                  Completed
                </Td>
              </Tr>
              <Tr>
                <Td>2.</Td>
                <Td>ESIC Hospital</Td>
                <Td>ESIC Department</Td>
                <Td>ESIC Hospital Construction Sector-24 Noida</Td>
                <Td>250 crore</Td>
                <Td>30/12/2022</Td>
                <Td>Completed</Td>
              </Tr>
              <Tr>
                <Td>3.</Td>
                <Td>Greater Noida Ganga Jal Project</Td>
                <Td>UPRNN</Td>
                <Td>Under 85 Ganga Jal Water Line Work</Td>
                <Td>350 crore</Td>
                <Td>31/06/2022</Td>
                <Td>Completed</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th isNumeric>Sr No.</Th>
                <Th>Name of Project</Th>
                <Th>Name of client</Th>
                <Th>Work Details</Th>
                <Th isNumeric>Our Order value(in crore)</Th>
                <Th>Date of Completion</Th>
                <Th>Status</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        
      </FullScreenSection>
  );
};

export default ProjectsSection;
