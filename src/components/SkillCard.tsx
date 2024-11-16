import { Box, Text, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

const MotionBox = motion(Box);

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  onSelect: (skillId: string) => void;
}

export const SkillCard = ({ skill, isSelected, onSelect }: SkillCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const selectedBg = useColorModeValue('blue.50', 'blue.900');
  const selectedBorder = useColorModeValue('blue.500', 'blue.400');
  const categoryColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <MotionBox
      as="button"
      p={4}
      borderRadius="lg"
      border="2px solid"
      borderColor={isSelected ? selectedBorder : borderColor}
      bg={isSelected ? selectedBg : bgColor}
      onClick={() => onSelect(skill.id)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      cursor="pointer"
      _hover={{
        boxShadow: 'md',
      }}
      position="relative"
      overflow="hidden"
    >
      <Box fontSize="2xl" mb={1}>{skill.icon}</Box>
      <Text fontWeight="medium" textAlign="center">{skill.name}</Text>
      <Badge
        position="absolute"
        top={2}
        right={2}
        colorScheme="purple"
        fontSize="xs"
        borderRadius="full"
        px={2}
      >
        {skill.category}
      </Badge>
    </MotionBox>
  );
};