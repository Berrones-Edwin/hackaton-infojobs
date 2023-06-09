'use client'

import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { data as dataMock } from '../mocks/data'
import CompanyDetails from "./CompanyDetails"
import CompanyNotFound from "./CompanyNotFound"


type Props = { dataEvaluation: any, peopleRating: any, interviewRating: any, levelInterviewProcess: any }

export default function Form({ dataEvaluation, peopleRating, interviewRating, levelInterviewProcess }: Props) {
    const [form, setForm] = useState('')
    const [data, setData] = useState<{ name: string; logo: string; description: string; sdrn: string; }>({ name: "", logo: "", description: "", sdrn: "" })
    const [flag, setFlag] = useState(false)
    const [newDataEvaluation, setNewDataEvaluation] = useState<any>(null)

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (form.trim().length < 3) return

        // const response = await fetch(`https://api.infojobs.net/api/1/companies/search?q=${form}`, {
        //     headers: {
        //         "Authorization": "Basic"
        //     }
        // })
        // const responseJSON = await response.json()
        // console.log({ responseJSON });


        const companyData: any = dataMock.items.find((name) => name.name.toLowerCase() === form.toLowerCase())


        setData(companyData)

        const newData = dataEvaluation.filter((data: any) => data['Company Name'].toLowerCase()
            === form.toLowerCase())

        setNewDataEvaluation(newData)

        if (newData?.length === 0) setFlag(true)
        else setFlag(false)


    }


    return (
        <>
            <Stack minWidth={'100vw'} flex={'column'} justifyContent={'center'} alignItems={'center'}>
                <Stack w={'500'} mt={3} h={'150'}>

                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel as='legend'>
                                Company Name
                            </FormLabel>
                            <Input autoComplete="off" name="form" placeholder="InfoJobs..." value={form} onChange={(e) => setForm(e.target.value)} />
                        </FormControl>
                    </form>
                </Stack>
                <Stack>
                    {
                        newDataEvaluation === null || undefined || newDataEvaluation?.length === 0 ? null : <CompanyDetails peopleRating={peopleRating}
                            details={data}
                            dataEvaluation={newDataEvaluation}
                            interviewRating={interviewRating}
                            levelInterviewProcess={levelInterviewProcess}
                        />
                    }
                    {
                        newDataEvaluation?.length === 0 && flag ? <CompanyNotFound /> : null
                    }

                </Stack>
            </Stack>
        </>
    )
}