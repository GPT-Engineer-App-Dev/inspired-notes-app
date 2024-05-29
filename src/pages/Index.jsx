import { Container, Text, VStack, Box, Heading, Button, Flex, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const notes = [
  { title: "First Note", description: "This is the description for the first note." },
  { title: "Second Note", description: "This is the description for the second note." },
  { title: "Third Note", description: "This is the description for the third note." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={4} borderRadius="md">
        <Heading size="md">Notes App</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
          Add Note
        </Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        {notes.map((note, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{note.title}</Heading>
            <Text mt={4}>{note.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;