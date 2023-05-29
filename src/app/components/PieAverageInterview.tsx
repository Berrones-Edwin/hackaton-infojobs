'use client'
import { Heading, Stack } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieAverageInterview({ levelInterviewProcess }: { levelInterviewProcess: any }) {

    const data = {
        labels: ['Very Easy', 'Easy', 'Average', 'Difficult', 'Very Difficult'],
        datasets: [
            {
                label: '# of Votes',
                data: Object.values(levelInterviewProcess),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <>
            <Heading textAlign={'center'}>
                Level Interview Process
            </Heading>
            <Stack h='300' w='100%' display='flex' justifyContent={'center'} alignItems={'center'}>
                <Doughnut data={data} />
            </Stack>
        </>
    )
}