import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, HStack } from '@chakra-ui/react';
import { Outlet, Link } from "react-router-dom";
import {faReddit} from '@fortawesome/free-brands-svg-icons';


const Headers = () => {
  const headerRef = useRef(null)

  
  useEffect(() => {
    let prevScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const headerElement = headerRef.current
  
      if (!headerElement) return;

      if (prevScroll > currentScroll) {
        headerElement.style.transform = 'translateY(0)'
      } else {
        headerElement.style.transform = 'translateY(-200px)'
      }

      prevScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    console.log('click')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      zIndex={10}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="blackAlpha.800"
      borderBottom="1px"
      borderColor="blackAlpha.900"
    >
      <Box
        color="white"
        maxWidth="1280px"
        margin="0 auto"
      >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={2}>
              <FontAwesomeIcon
                        size="2x"
                        icon={faReddit}
              />
              <Link to="/" onClick={handleClick("aboutUs")}>XYZ</Link>
            </HStack>
          </nav>


          <nav>
            <HStack spacing={8}>
              {/* <a href="#whyUs" onClick={handleClick("whyUs")}>Why us</a> */}
              <Link to="/whyUs" onClick={handleClick("whyUs")}>Why Us</Link>
              {/* <a href="#services" onClick={handleClick("services")}>Services</a> */}
              <Link to="/services" onClick={handleClick("services")}>Services</Link>
              {/* <a href='#projects' onClick={handleClick("projects")}>Projects</a> */}
              <Link to="/projects" onClick={handleClick("projects")}>Projects</Link>
              {/* <a href='#ourTeam' onClick={handleClick("ourTeam")}>Our Team</a> */}
              <Link to="/ourTeam" onClick={handleClick("ourTeam")}>Our Team</Link>
              {/* <a href="#contact-me" onClick={handleClick("contactme")}>Contact Us</a> */}
              <Link to='/contactme' onClick={handleClick("contactme")}>Contact Us</Link>
            </HStack>
          </nav>
        </HStack>


      </Box>

    </Box>
    <Outlet />
    </>
  );
};
export default Headers;
