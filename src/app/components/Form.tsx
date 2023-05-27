'use client'

import { Input, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { data as dataMock } from '../mocks/data'
import CompanyDetails from "./CompanyDetails"


export default function Form({ dataEvaluation }: { dataEvaluation: any }) {
    const [form, setForm] = useState('')
    const [data, setData] = useState(null)
    const [newDataEvaluation, setNewDataEvaluation] = useState(null)

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


        const companyData = dataMock.items.find((name) => name.name.toLowerCase() === form.toLowerCase())


        setData(companyData)

        const newData = dataEvaluation.filter((data: any) => data['Company Name'].toLowerCase() 
        === form.toLowerCase())

        setNewDataEvaluation(newData)

    }


    return (
        <>
            <Stack maxWidth={'100vw'} flex={'row'} justifyContent={'center'} alignItems={'center'}>
                <Stack w={'500'} h={'150'}>
                    <h3>Search Company Name</h3>
                    <form onSubmit={handleSubmit}>
                        <Input autoComplete="off" name="form" placeholder="InfoJobs..." value={form} onChange={(e) => setForm(e.target.value)} />
                    </form>
                </Stack>
                <Stack>
                    {
                        data === null || undefined ? null : <CompanyDetails details={data} dataEvaluation={newDataEvaluation} />
                    }

                </Stack>
            </Stack>
        </>
    )
}