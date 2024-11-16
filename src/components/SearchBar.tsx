import { Input, InputGroup, InputLeftElement, Select, HStack, Box } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import { skills } from '../data/skills';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const categories = Array.from(new Set(skills.map(skill => skill.category))).sort();

  return (
    <HStack spacing={4} width="full">
      <InputGroup flex={2}>
        <InputLeftElement pointerEvents="none">
          <Search size={20} />
        </InputLeftElement>
        <Input
          placeholder="Search skills..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          size="lg"
          variant="filled"
          _focus={{
            bg: 'white',
            borderColor: 'blue.500',
          }}
        />
      </InputGroup>
      <Box flex={1}>
        <Select
          size="lg"
          variant="filled"
          placeholder="All Categories"
          onChange={(e) => onChange(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Select>
      </Box>
    </HStack>
  );
};