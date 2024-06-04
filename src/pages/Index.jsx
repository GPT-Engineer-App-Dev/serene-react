import { Box, Container, Flex, Text, VStack, Link, Spacer, Button, List, ListItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const { data: events, error, isLoading } = useEvents();

  return (
    <Box>
      <Navbar />
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