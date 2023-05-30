import papa from 'papaparse'
import Form from '../components/Form';
import axios from 'axios'

async function getData() {

    const response: any = await axios({
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSwvE7A-cuonAVbUBjACrD1lgWrFBJs2j3ZT4RyDpnETxQkkzUmya9ZUF7a9gY6uRlenqg7za5CJGQ4/pub?gid=1229312000&single=true&output=csv',
        headers: {

            "Content-Type": "application/blob",
        },
        responseType:'blob'
    }).then(res=>res.data)
    
    let dataJson = null
    await papa.parse(response, {
        header: true,
        complete: (results) => {
            dataJson = results.data
        }
    })
    return dataJson
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

function evaluatePeopleRating(data: any) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Company Review") {



            let x: keyof {
                1: number;
                2: number;
                3: number;
                4: number;
                5: number;
            } = d["Overall Rating ⭐"]


            peopleRating[x] += 1

        }
    })

}

function evaluateinterviewRating(data: any) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Interview") {

            let idx: keyof {
                Bad: number;
                Good: number;
            } = d["Rate Overall Experience"]

            interviewRating[idx] += 1
        }
    })

}

function evaluateInterviewProcess(data: any) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Interview") {

            let idx: keyof {
                "Very Easy": number;
                Easy: number;
                Average: number;
                Difficult: number;
                "Very Difficult": number;
            } = d["Level interview process."]

            levelInterviewProcess[idx] += 1
        }
    })

}



export default async function Results() {



    const data: any = await getData()
    evaluatePeopleRating(data)
    evaluateinterviewRating(data)
    evaluateInterviewProcess(data)


    return (
        <>
            <Form dataEvaluation={data} peopleRating={peopleRating} interviewRating={interviewRating} levelInterviewProcess={levelInterviewProcess} />
        </>
    )
}