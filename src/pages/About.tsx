import { Box, Container, Heading, Text, VStack, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Target, Compass, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const features = [
  {
    icon: Target,
    title: 'Skill-Based Career Pathway',
    description: 'Users can select their skills, such as C, C++, Java, and more. Based on these inputs, Future Focus provides precise career recommendations tailored to their strengths and interests.',
  },
  {
    icon: Compass,
    title: 'Skill-Based Clarity',
    description: 'Gain a clear understanding of how your selected skills align with various career paths.',
  },
  {
    icon: Users,
    title: 'A Career Community',
    description: 'Connect with peers and mentors who can support your journey and share valuable industry insights.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'Receive guidance on building additional skills to stay competitive and advance in your chosen career.',
  },
];

export const About = () => {
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
            <Heading size="2xl" mb={6}>About Future Focus</Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              Future Focus is your ML-powered career companion, helping professionals discover 
              and navigate their ideal career paths through skill-based matching and 
              personalized recommendations.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {features.map((feature, index) => (
              <MotionBox
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
              >
                <Icon as={feature.icon} w={10} h={10} color="blue.500" mb={4} />
                <Heading size="md" mb={4}>{feature.title}</Heading>
                <Text color="gray.600">{feature.description}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            textAlign="center"
            maxW="3xl"
          >
            <Heading size="lg" mb={6}>Our Mission</Heading>
            <Text fontSize="lg" color="gray.600">
              We're committed to bridging the gap between skills and opportunities, 
              empowering professionals to make informed career decisions and achieve 
              their full potential in today's dynamic job market.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};