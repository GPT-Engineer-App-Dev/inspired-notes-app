import { Container, Text, VStack, Box, Heading, Button, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaStickyNote } from "react-icons/fa";
import backgroundImage from '../../public/images/background.png';

const notes = [
  { title: "First Note", description: "This is the description for the first note.", icon: FaStickyNote },
  { title: "Second Note", description: "This is the description for the second note.", icon: FaStickyNote },
  { title: "Third Note", description: "This is the description for the third note.", icon: FaStickyNote },
];

const Index = () => {
  const [headerColor, setHeaderColor] = useState("rgba(0, 0, 139, 0.8)");

  useEffect(() => {
    setHeaderColor("#FF6347");
  }, []);
  return (
    <Container 
      maxW="container.xl" 
      p={4} 
      backgroundImage={`url(${backgroundImage})`} 
      backgroundSize="cover" 
      backgroundPosition="center" 
      minHeight="100vh"
    >
      <Flex as="nav" bg={headerColor} color="white" p={4} mb={4} borderRadius="md">
        <Heading size="md">Notes App</Heading>
        <Spacer />
        <Button colorScheme="teal" variant="solid">
          + Add Note
        </Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        {notes.map((note, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="rgba(255, 255, 255, 0.8)">
            <Flex align="center">
              <note.icon size="24px" style={{ marginRight: "8px" }} />
              <Heading fontSize="xl">{note.title}</Heading>
            </Flex>
            <Text mt={4}>{note.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;