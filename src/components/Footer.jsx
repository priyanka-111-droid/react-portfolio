import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import { HStack, Link } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: hello@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com',
  },
];

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <nav>
            <HStack spacing={6}>
              {socials.map((social) => (
                <Link
                  key={social.url}
                  href={social.url}
                  isExternal
                >
                  <FontAwesomeIcon
                    size="2x"
                    icon={social.icon}
                  />
                </Link>
              ))}
            </HStack>
          </nav>
          <p>XYZ • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
