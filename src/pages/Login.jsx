import { Box, Container, Flex, Text, VStack, Link, Spacer, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";
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
      <Navbar />
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