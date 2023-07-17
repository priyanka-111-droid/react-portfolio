import React from 'react';
import FullScreenSection from './FullScreenSection';
import { Box, Heading, Image } from '@chakra-ui/react';
// import Card from './Card';
import { Card, CardHeader, CardBody, CardFooter,Text,Button} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react';


const OurTeam=()=>{
    return(
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            p={20}
            backgroundColor="white"
        >
        <Heading
          as="h1"
          id="ourTeam-section"
          mt={10}
          mb={5}
        >
        Our Team
        </Heading>
        <SimpleGrid spacing={4} columns={3}>

        <Card width={300} height={200}>
            <CardHeader>
                <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
                <Text>Technical Qualification: BTech</Text>
                <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
                <Text>Technical Qualification: BTech</Text>
                <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
                <Text>Technical Qualification: BTech</Text>
                <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
                <Text>Technical Qualification: BTech</Text>
                <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
                <Text>Technical Qualification: BTech</Text>
                <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        <Card width={300} height={200}>
            <CardHeader>
            <Heading size='md'> Ravendra Singh Pal</Heading>
            </CardHeader>
            <CardBody>
            <Text>Technical Qualification: BTech</Text>
            <Text>Designation: Architect</Text>
            </CardBody>
        </Card>
        </SimpleGrid>
        </FullScreenSection>
    )
}
export default OurTeam;