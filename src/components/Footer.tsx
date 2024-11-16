import { Box, Container, Stack, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={16}
    >
      <Container
        as={Stack}
        maxW="7xl"
        py={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© 2024 Future Focus. All rights reserved</Text>
        <Stack direction="row" spacing={6}>
          {socialLinks.map(({ icon: Icon, href }) => (
            <IconButton
              key={href}
              as="a"
              href={href}
              aria-label={`Visit our ${Icon.name}`}
              icon={<Icon size={20} />}
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};