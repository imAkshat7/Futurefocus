import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, useColorModeValue, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const MotionBox = motion(Box);

const teamMembers = [
  {
    name: 'Akshat Sankla',
    role: 'Penetration Tester',
    image: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400',
    bio: 'Passionate about penetration testing and skilled in frontend development, eager to excel in cybersecurity.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Aniruddhi Jaiswal',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=400',
    bio: 'Software Engineer with a focus on Python and machine learning, eager to solve complex problems.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    name: 'Abhay Saxena',
    role: 'Rookie in Python',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Exploring Python and diving into cybersecurity, eager to tackle challenges and enhance security solutions.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
];

export const Team = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} minH="100vh" pt={20}>
      <Container maxW="7xl" py={16}>
        <VStack spacing={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <Heading size="2xl" mb={6}>Meet Our Team</Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              The passionate individuals behind Future Focus, dedicated to helping you 
              discover and achieve your career goals.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {teamMembers.map((member, index) => (
              <MotionBox
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
              >
                <VStack spacing={4}>
                  <Box
                    position="relative"
                    w="full"
                    h="300px"
                    overflow="hidden"
                    borderRadius="lg"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      objectFit="cover"
                      w="full"
                      h="full"
                    />
                  </Box>
                  <Heading size="md">{member.name}</Heading>
                  <Text color="blue.500" fontWeight="medium">{member.role}</Text>
                  <Text color="gray.600" textAlign="center">{member.bio}</Text>
                  <Box display="flex" gap={4}>
                    <Link href={member.social.linkedin} isExternal>
                      <Linkedin size={20} />
                    </Link>
                    <Link href={member.social.github} isExternal>
                      <Github size={20} />
                    </Link>
                  </Box>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};