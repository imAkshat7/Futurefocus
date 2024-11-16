import { Wrap, WrapItem, Tag, TagLabel, TagCloseButton, Text, Box } from '@chakra-ui/react';
import type { Skill } from '../types';

interface SelectedSkillsProps {
  selectedSkills: Skill[];
  onRemoveSkill: (skillId: string) => void;
}

export const SelectedSkills = ({ selectedSkills, onRemoveSkill }: SelectedSkillsProps) => {
  if (selectedSkills.length === 0) {
    return null;
  }

  return (
    <Box>
      <Text mb={2} fontWeight="medium" color="gray.600">
        Selected Skills ({selectedSkills.length}):
      </Text>
      <Wrap spacing={2}>
        {selectedSkills.map((skill) => (
          <WrapItem key={skill.id}>
            <Tag
              size="lg"
              borderRadius="full"
              variant="subtle"
              colorScheme="blue"
            >
              <TagLabel>
                <Text as="span" mr={2}>{skill.icon}</Text>
                {skill.name}
              </TagLabel>
              <TagCloseButton onClick={() => onRemoveSkill(skill.id)} />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};