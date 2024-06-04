import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
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
  );
};

export default Navbar;