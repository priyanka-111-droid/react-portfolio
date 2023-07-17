import React from 'react';
import {Box, Button, Heading, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';


const AboutUsSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="whiteAlpha.500"
    id='aboutUs-section'
  >
    <Box
      // display="grid"
      gridTemplateColumns="repeat(1,minmax(0,1fr))"
      gridGap={8}
      placeItems="center"
    >
      <Box
        color="blackAlpha.800"
        maxW="50rem"
      >
        <Heading as ='h2' size='2xl' mb={4} mt={10}>Who we are</Heading>
        <Text fontSize="xl" textAlign={'justify'}>
        XYZ is a TURNKEY, Civil-contracting Proprietorship firm, which was
        founded in 2023.
        XYZ takes pride in providing Residential, Commercial & Hospitality
        Engineering, Infra & Construction services. XYZ have a team of experienced
        and professional engineers who are passionate about executing and are
        able to Complete the projects in given time line with there passion and hard
        work and quality to deal with the workers and get the work done
        We started with contracting of Institutional ,Residential, Commercial &
        Hospitality finishing Turnkey contracts . XYZ hallmark of quality can be found
        on the intricate, high-end quality
        By contracting with XYZ, you can be assured of a highly motivated,
        professional, and skilled workforce and quality job delivery at the most
        affordable rates. We never settle for ‘just ok’ but aspire for best in every
        inch of what we do
        </Text>
      </Box>
    </Box>
  </FullScreenSection>
);

export default AboutUsSection;
