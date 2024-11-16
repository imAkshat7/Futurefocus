import { Box, Flex, Button, useColorMode, IconButton, Link as ChakraLink } from '@chakra-ui/react';
import { Sun, Moon, Target } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="100%" 
      zIndex="1000"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
      px={4}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto">
        <Flex alignItems="center" gap={2}>
          <Target className="w-6 h-6" />
          <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold">
            Future Focus
          </ChakraLink>
        </Flex>

        <Flex alignItems="center" gap={4}>
          <Button
            as={Link}
            to="/"
            variant={isActive('/') ? 'solid' : 'ghost'}
            colorScheme={isActive('/') ? 'blue' : undefined}
            size="sm"
          >
            Home
          </Button>
          <Button
            as={Link}
            to="/about"
            variant={isActive('/about') ? 'solid' : 'ghost'}
            colorScheme={isActive('/about') ? 'blue' : undefined}
            size="sm"
          >
            About
          </Button>
          <Button
            as={Link}
            to="/team"
            variant={isActive('/team') ? 'solid' : 'ghost'}
            colorScheme={isActive('/team') ? 'blue' : undefined}
            size="sm"
          >
            Team
          </Button>
          
        </Flex>
      </Flex>
    </Box>
  );
};