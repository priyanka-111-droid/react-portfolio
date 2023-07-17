import React from 'react';
import {Box, Button, Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react';
import {Avatar,Flex} from '@chakra-ui/react';
import quality from '../assets/image/quality-check.png';
import warranty from '../assets/image/warranty.jpg';
import timely from '../assets/image/timely-del.png';
import financial from '../assets/image/financial-stab.png';
import integrity from '../assets/image/integrity.jpg';
import planning from '../assets/image/planning.png';
import service from '../assets/image/service.png';
import trust from '../assets/image/trust.jpg';



const WhyUsSection = () => (
  <FullScreenSection
  backgroundColor="purple.400"
  isDarkBackground
    justifyContent="center"
    alignItems="center"
    id="whyUs-section"
    mb={20}
    mt={10}
  >
    <Heading as='h2' size='2xl' mb={9} mt={20} textAlign={'center'}>Why us</Heading>
    <SimpleGrid spacing={10} columns={2}>
      <Card width={500} height={300}>
          <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Box>
                <Heading as='h3' size='xl' mb={2}>Quality</Heading>
              </Box>
              <Avatar src={quality} alt={"Quality"} width={'18'} />
            </Flex>      
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'}>
            Quality in constructions is defined as "meeting or exceeding" the requirements of
            clients. XYZ have given the top priority to ensure the quality of constructions from
            inception to completion. XYZ Very own triple quality check system run by
            Construction experts to meet up XYZ aim. Quality is the key to success of XYZ history.
          </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Box>
              <Heading as='h3' size='xl' mb={2}>Warranty</Heading>
              </Box>
              <Avatar src={warranty} alt={"Warranty"} width={'15'} />
            </Flex>    
          </CardHeader>
          <CardBody>
            <Text fontSize='lg' textAlign={'justify'}>
            XYZ give structural warranty for any constructions its undertake. It covers all the
            Structural works of the construction such as Foundation works, Columns, Beams,
            staircases, Concrete slabs & Other civil works like Brickworks, Floor finishes roof
            works etc... Due to any kind of a defect, XYZ undertakes total responsibility of the
            failures.
            </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Box>
                <Heading as='h3' size='xl' mb={2}>Timely Delivery</Heading>
              </Box>
              <Avatar src={timely} alt={"Timely delivery"} width={'18'} />
            </Flex> 
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'}>
            One of the most common concerns among the clients about construction is the time
            of delivery. Without dragging on the procedure, wasting the time & money of the
            clients, XYZ ensures on time delivery as a major responsibility. XYZ gives their top
            priority to fulfill on time completion.
          </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Box>
                <Heading as='h3' size='xl' mb={2}>Financial Stability</Heading>
              </Box>
              <Avatar src={financial} alt={"financial stability"} width={'15'} />
            </Flex> 
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'} >
            Financial stability means Condition in which the financial system is not unstable. It is
            defined in terms of its ability to facilitate & enhance economic processes, manage
            risks & absorb shock during the Past years, XYZ has maintained an excellent financial
            disciplines to reach the current stable condition of the Establishment.
            </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                  <Heading as='h3' size='xl' mb={2}>Integrity</Heading>
                </Box>
                <Avatar src={integrity} alt={"integrity"} width={'15'} />
            </Flex> 
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'} >
          XYZ prevailed in the construction industry for so many years on account
          of the integrity the XYZ has been able to sustain over the years. The
          decisions of the customers are always given the prominence, trust &
          the confidentiality is preserved.
            </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>

            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                <Heading as='h3' size='xl' mb={2}>Planning</Heading>
                </Box>
                <Avatar src={planning} alt={"Planning"} width={'18'} />
            </Flex> 
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'} >
          XYZ aims to provide comprehensive planning services to all clients
          integrating the various disciplines necessary to carryout projects from
          inception to Successful completion.
            </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                  <Heading as='h3' size='xl' mb={2}>Service</Heading>
                </Box>
                <Avatar src={service} alt={"Service"} width={'18'} />
            </Flex> 
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'} >
          XYZ ensure best & next level service for you. From the inception to
          completion you will be ultimately satisfied with XYZ service .XYZ are a
          well-organized construction establishment & you will be wonder exactly
          about XYZ service & support to fulfill your construction needs.
            </Text>
          </CardBody>
      </Card>
      <Card width={500} height={300}>
          <CardHeader>
            
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box>
                  <Heading as='h3' size='xl' mb={2}>Trust</Heading>
                </Box>
                <Avatar src={trust} alt={"Trust"} width={'18'} />
            </Flex>
          </CardHeader>
          <CardBody>
          <Text fontSize='lg' textAlign={'justify'} >
          Trust is a big word. It either makes something, or it breaks everything.
          In construction industry, XYZ build your trust. That code of ethics
          governs successful path of our organization & it will continue forever
            </Text>
          </CardBody>
      </Card>
    </SimpleGrid>
  </FullScreenSection>
);

export default WhyUsSection;
