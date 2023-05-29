'use client'
import { Heading, Stack } from '@chakra-ui/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieInterviewRating({ interviewRating }: { interviewRating: any }) {


    const data = {
        labels: ['Good', 'Bad'],
        datasets: [
            {
                label: 'Interview Rating',
                data: Object.values(interviewRating),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                   
                ],
                borderWidth: 1,
            },
        ],
    }


    return (
        <>
            <Heading textAlign={'center'}>
                Interview Rating
            </Heading>
            <Stack h='300' w='100%' display='flex' justifyContent={'center'} alignItems={'center'}>
                <Pie data={data} />
            </Stack>
        </>
    )
}