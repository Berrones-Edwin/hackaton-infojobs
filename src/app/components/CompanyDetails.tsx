'use client'
import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    ListIcon,
    Thead,
    Th
} from '@chakra-ui/react';
import { useEffect, useId } from 'react';
import Link from 'next/link'
type Props = {
    details: {
        name: string,
        description: string,
        sdrn: string,
        logo: string
    },
    dataEvaluation: any
}
const peopleRating = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0
}
const interviewRating = {
    "Bad": 0, "Good": 0
}

const levelInterviewProcess = {
    "Very Easy": 0,
    "Easy": 0,
    "Average": 0,
    "Difficult": 0,
    "Very Difficult": 0
}
export default function CompanyDetails({ details, dataEvaluation }: Props) {


    const id = useId()

    useEffect(() => {

        dataEvaluation.forEach((d: any) => {
            if (d["What would you like to do ? "] === "Company Review") {

                let index = parseInt(d["Overall Rating ⭐"])
                peopleRating[index] += 1

            }
        })
    }, [dataEvaluation])
    useEffect(() => {

        dataEvaluation.forEach((d: any) => {
            if (d["What would you like to do ? "] === "Interview") {


                interviewRating[d["Rate Overall Experience"]] += 1

            }
        })
    }, [dataEvaluation])
    useEffect(() => {

        dataEvaluation.forEach((d: any) => {
            if (d["What would you like to do ? "] === "Interview") {


                levelInterviewProcess[d["Level interview process."]] += 1

             
                // console.log(levelInterviewProcess["Average"]);



            }
        })
    }, [dataEvaluation])

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex w='100%' flexDir={'column'} mb='3'>
                    <Image

                        rounded={'md'}
                        alt={details.name}
                        src={
                            details.logo
                        }
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
                    {/* Rating */}
                    <Box w='100%'>
                        <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                            mb={'4'}
                            textAlign={'center'}>
                            Rating
                        </Text>


                        <SimpleGrid spacing={10}>


                            <TableContainer>
                                <Table size='sm' border="0" variant="unstyled">
                                    <TableCaption><b>People who share their rating</b></TableCaption>
                                    <Tbody>

                                        {
                                            Array.from({ length: 5 }).map((idx, arr) => (
                                                <Tr key={id + '.-' + arr}>
                                                    <Td>{"⭐".repeat(arr + 1)}</Td>
                                                    <Td>{peopleRating[arr + 1]}</Td>
                                                </Tr>
                                            ))
                                        }
                                    </Tbody>
                                </Table>
                            </TableContainer>

                        </SimpleGrid>
                    </Box>
                    {/* End Rating */}

                    <Box>
                        <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                            mb={'4'}
                            textAlign={'center'}
                        >
                            Interview Rating
                        </Text>
                        {/* Rate Overall Experience */}
                        <SimpleGrid spacing={10}>

                            <TableContainer>
                                <Table size='sm' border="0" variant="unstyled">
                                    <TableCaption><b>Rate Overall Experience</b></TableCaption>
                                    <Tbody>
                                        <Tr >
                                            <Td>Good</Td>
                                            <Td> {interviewRating.Good}</Td>
                                        </Tr>
                                        <Tr >
                                            <Td>Bad</Td>
                                            <Td> {interviewRating.Bad}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>

                        </SimpleGrid>
                        {/* End Rate Overall Experience */}

                        {/* Level interview process */}
                        <SimpleGrid spacing={10}>

                            <TableContainer>
                                <Table size='sm' border="0" variant="unstyled">
                                    <TableCaption><b>Level interview process</b></TableCaption>
                                    <Tbody>
                                        <Tr >
                                            <Td>Very Easy</Td>
                                            <Td> {levelInterviewProcess['Very Easy']}</Td>
                                        </Tr>
                                        <Tr >
                                            <Td>Easy</Td>
                                            <Td> {levelInterviewProcess.Easy}</Td>
                                        </Tr>
                                        <Tr >
                                            <Td>Average</Td>
                                            <Td> {levelInterviewProcess['Average']}</Td>
                                        </Tr>
                                        <Tr >
                                            <Td>Difficult</Td>
                                            <Td> {levelInterviewProcess['Difficult']}</Td>
                                        </Tr>
                                        <Tr >
                                            <Td>Very Difficult</Td>
                                            <Td> {levelInterviewProcess['Very Difficult']}</Td>
                                        </Tr>

                                    </Tbody>
                                </Table>
                            </TableContainer>

                        </SimpleGrid>
                        {/* End Level interview process */}
                    </Box>
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {details.name}
                        </Heading>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.200', 'gray.600')}
                            />
                        }>
                        {/* Details Name */}
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Accordion w='100%' allowToggle>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Box as="span" flex='1' textAlign='left'>
                                                Description
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Text
                                            color={useColorModeValue('gray.500', 'gray.400')}
                                            fontSize={'2xl'}
                                            fontWeight={'300'}>
                                            {details.description}
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>

                        </VStack>
                        {/* End Details Name */}
                        <Box>

                            {/* Cons / Pros / Advices */}
                            <SimpleGrid mt={2} columns={{ base: 1, md: 2 }} spacing={10}>
                                <p>Pros</p>
                                <p>Cons</p>
                                <List spacing={2}>
                                    {
                                        dataEvaluation.map((d: any) => (

                                            d['Pros'] === "" ? null :
                                                <>

                                                    <ListItem key={d['Marca temporal'] + "-" + id}>
                                                        <ListIcon as={CheckCircleIcon} color='green.500' />
                                                        {d['Pros']}
                                                    </ListItem>
                                                </>
                                        ))
                                    }
                                </List>
                                <List spacing={2}>
                                    {
                                        dataEvaluation.map((d) => (
                                            d['Cons'] === "" ? null :
                                                <ListItem key={d['Marca temporal'] + "***" + id}>
                                                    <ListIcon as={SmallCloseIcon} color='red.500' />
                                                    {d['Cons']}
                                                </ListItem>
                                        ))
                                    }
                                </List>
                            </SimpleGrid>
                            <SimpleGrid mt={2} spacing={10}>
                                {
                                    dataEvaluation.every((d) => d['Advice'] === "" || null) ? null :
                                        <>
                                            <p>Advices</p>
                                            <List spacing={2}>
                                                {dataEvaluation.map((d: any) => (
                                                    <ListItem key={d['Marca temporal'] + "//" + id}>
                                                        {d['Advice'] === "" ? null : d['Advice']}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </>
                                }
                            </SimpleGrid>
                            {/* End Cons / Pros / Advices */}
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Describe your interview process
                            </Text>

                            <SimpleGrid mt={2} spacing={10}>
                                {

                                    <>

                                        <List spacing={2}>
                                            {dataEvaluation.map((d: any) => (
                                                d['Describe your interview process'] === "" ? null :
                                                    <ListItem key={d['Marca temporal'] + "/-/" + id}>
                                                        <ListIcon as={CheckCircleIcon} color='green.500' />
                                                        {d['Describe your interview process']}
                                                    </ListItem>
                                            ))}
                                        </List>
                                    </>
                                }
                            </SimpleGrid>

                        </Box>
                        <Box>

                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Details People Share Their Salary
                            </Text>

                            <SimpleGrid mt={2} spacing={10}>
                                <TableContainer>
                                    <Table variant='simple' color="white">
                                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                        <Thead >
                                            <Tr>
                                                <Th color="white">Job Title</Th>
                                                <Th color="white">Job Level</Th>
                                                <Th color="white">Experience (Years)</Th>
                                                <Th color="white">Location</Th>
                                                <Th color="white">Employment Status</Th>
                                                <Th color="white"> Salary</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                dataEvaluation.map((d)=>{
                                                    return d["What would you like to do ? "] === "Salary" ? 
                                                    (   <>
                                                            <Tr textAlign={'center'}>
                                                                <Td>{d['Job Title']}</Td>
                                                                <Td>{d['Job Level']}</Td>
                                                                <Td>{d['Total Years of Experience in this Field']}</Td>
                                                                <Td>{d['Location']}</Td>
                                                                <Td>{d['Are you a current employee_1']}</Td>
                                                                <Td>{d['Base Pay']} / {d['Currency']} </Td>
                                                            </Tr>
                                                        </>
                                                    ) 
                                                    :null
                                                })
                                            }                                            
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </SimpleGrid>


                        </Box>
                    </Stack>

                    <Button
                        as={Link}
                        href={'/evaluation'}
                        rounded={'none'}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg={useColorModeValue('gray.900', 'gray.50')}
                        color={useColorModeValue('white', 'gray.900')}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Share Evaluation
                    </Button>


                </Stack>
            </SimpleGrid>
        </Container >
    );

}


