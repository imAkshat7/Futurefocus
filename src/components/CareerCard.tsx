import { Box, Heading, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Career } from '../types';

const MotionBox = motion(Box);

interface CareerCardProps {
  career: Career;
}

export const CareerCard = ({ career }: CareerCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      p={6}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      bg={bgColor}
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">{career.predicted_job_title}</Heading>
      </Flex>

      <Text color="gray.600" mb={4}>
        This is the predicted career path based on your selected skills.
      </Text>
    </MotionBox>
  );
};
