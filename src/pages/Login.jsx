import { Box, Container, Flex, Text, VStack, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  if (session) {
    navigate("/");
  }

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
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Login</Text>
          <SupabaseAuthUI />
          {session && (
            <Button onClick={logout} colorScheme="red">
              Logout
            </Button>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;