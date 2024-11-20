import { useState, useMemo, useEffect } from 'react';
import {
  Container,
  Grid,
  Button,
  VStack,
  Heading,
  Text,
  useToast,
  Spinner,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SearchBar } from '../components/SearchBar';
import { SelectedSkills } from '../components/SelectedSkills';
import { SkillCard } from '../components/SkillCard';
import { CareerCard } from '../components/CareerCard';
import { submitSkills } from '../api';
import { skills } from '../data/skills';
import type { Career } from '../types';

const MotionGrid = motion(Grid);
const MotionBox = motion(Box);

export const Home = () => {
  const [selectedSkillIds, setSelectedSkillIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [careers, setCareers] = useState<Career[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const MINIMUM_SKILLS = 3; // Minimum required skills

  // Filter skills based on search query
  const filteredSkills = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Map selected skill IDs to skill objects
  const selectedSkills = useMemo(() => {
    return skills.filter((skill) => selectedSkillIds.includes(skill.id));
  }, [selectedSkillIds]);

  // Handle skill selection and removal
  const handleSkillSelect = (skillId: string) => {
    setSelectedSkillIds((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleRemoveSkill = (skillId: string) => {
    setSelectedSkillIds((prev) => prev.filter((id) => id !== skillId));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (selectedSkillIds.length < MINIMUM_SKILLS) {
      toast({
        title: `Please select at least ${MINIMUM_SKILLS} skills.`,
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const selectedSkillNames = selectedSkillIds.map(
      (id) => skills.find((skill) => skill.id === id)?.name || ''
    );

    setIsLoading(true);
    try {
      const matches = await submitSkills(selectedSkillNames);
      const careerArray = Array.isArray(matches) ? matches : [matches];
      const uniqueCareers = Array.from(
        new Map(
          careerArray.map((career) => [career.predicted_job_title, career])
        ).values()
      );

      if (uniqueCareers.length > 0) {
        setCareers(uniqueCareers);
      } else {
        toast({
          title: 'No careers matched your skills.',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
        setCareers([]);
      }
    } catch (error) {
      toast({
        title: 'Error fetching career matches',
        description: 'Something went wrong. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Debugging effect for career state updates
  useEffect(() => {
    console.log('Updated careers state:', careers);
  }, [careers]);

  return (
    <Box minH="100vh" bg="gray.50" pt={20}>
      <Container maxW="7xl">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={4} align="center" pt={8}>
              <Heading size="2xl">Shape Your Future Career</Heading>
              <Text fontSize="xl" color="gray.600" textAlign="center">
                Select your skills and let AI guide you to your perfect career path
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <VStack spacing={6}>
              <Box w="full" maxW="600px">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </Box>
              <SelectedSkills
                selectedSkills={selectedSkills}
                onRemoveSkill={handleRemoveSkill}
              />
            </VStack>
          </MotionBox>

          <MotionGrid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                isSelected={selectedSkillIds.includes(skill.id)}
                onSelect={handleSkillSelect}
              />
            ))}
          </MotionGrid>

          {filteredSkills.length === 0 && (
            <Text textAlign="center" color="gray.500">
              No skills found matching your search.
            </Text>
          )}

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              colorScheme="blue"
              onClick={handleSubmit}
              isLoading={isLoading}
              loadingText="Finding matches..."
              w={{ base: 'full', md: 'auto' }}
              alignSelf="center"
              isDisabled={selectedSkillIds.length < MINIMUM_SKILLS} // Disable if less than required
            >
              Find Career Matches
            </Button>
          </MotionBox>

          {isLoading && (
            <VStack spacing={4}>
              <Spinner size="xl" />
              <Text>Analyzing your skills...</Text>
            </VStack>
          )}

          {careers.length > 0 && (
            <VStack spacing={6} align="stretch">
              <Heading size="xl" textAlign="center">
                Your Career Matches
              </Heading>
              <Grid
                templateColumns={{
                  base: '1fr',
                  lg: 'repeat(2, 1fr)',
                }}
                gap={6}
                p={2}
              >
                {careers.map((career) => (
                  <CareerCard key={career.predicted_job_title} career={career} />
                ))}
              </Grid>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};
