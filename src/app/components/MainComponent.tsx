'use client'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import NextLink from 'next/link'
import { EditIcon, SearchIcon } from '@chakra-ui/icons';
 
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
    href: string;
  }
  
  const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'md'} color="white">
              {description}
            </Text>
          </Box>
          <Button  as={NextLink} href={href}  variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function MainComponent() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Company Evaluation
          </Heading>
          <Text color={'white.600'} fontSize={{ base: 'md', sm: 'lg' }}>
            What would you like to do? 🤔
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Results'}
              icon={<Icon as={SearchIcon} w={10} h={10} />}
              description={
                'Look for a company and see the reviews'
              }
              href={'/results'}
            />
            <Card
              heading={'Review'}
              icon={<Icon as={EditIcon} w={10} h={10} />}
              description={
                'You would like to share a review / salary / interview'
              }
              href={'#'}
            />
            
          </Flex>
        </Container>
      </Box>
    );
  }