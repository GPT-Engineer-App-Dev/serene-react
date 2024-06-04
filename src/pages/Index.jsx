import { Box, Container, Flex, Text, VStack, Link, Spacer, Button, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const { data: events, error, isLoading } = useEvents();

  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem">
        <Box fontWeight="bold" fontSize="xl">
          MyApp
        </Box>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem" color="white">
            About
          </Link>
          {!session && (
            <Link as={RouterLink} to="/login" margin="0 1rem" color="white">
              Login
            </Link>
          )}
          {session && (
            <Button onClick={logout} colorScheme="red" margin="0 1rem">
              Logout
            </Button>
          )}
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
          {session && (
            <>
              <Text fontSize="xl">Events</Text>
              {isLoading ? (
                <Text>Loading...</Text>
              ) : error ? (
                <Text>Error loading events</Text>
              ) : (
                <List spacing={3}>
                  {events.map((event) => (
                    <ListItem key={event.id}>{event.name}</ListItem>
                  ))}
                </List>
              )}
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;