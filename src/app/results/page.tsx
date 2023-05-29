import papa from 'papaparse'
import Form from '../components/Form';

async function getData() {
    const response: any = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSwvE7A-cuonAVbUBjACrD1lgWrFBJs2j3ZT4RyDpnETxQkkzUmya9ZUF7a9gY6uRlenqg7za5CJGQ4/pub?output=csv', {
        headers: {
            "Content-Type": "application/blob",
        },
    }).then((res) => res.text())


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

function evaluatePeopleRating(data) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Company Review") {

            let index = d["Overall Rating ⭐"]
            peopleRating[index] += 1

        }
    })

}

function evaluateinterviewRating(data) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Interview") {
            interviewRating[d["Rate Overall Experience"]] += 1
        }
    })

    console.log({ interviewRating });

}

function evaluateInterviewProcess(data) {
    data.forEach((d: any) => {
        if (d["What would you like to do ? "] === "Interview") {
            levelInterviewProcess[d["Level interview process."]] += 1
        }
    })

}



export default async function Results() {



    const data = await getData()
    evaluatePeopleRating(data)
    evaluateinterviewRating(data)
    evaluateInterviewProcess(data)


    return (
        <>
            <Form dataEvaluation={data} peopleRating={peopleRating} interviewRating={interviewRating} levelInterviewProcess={levelInterviewProcess} />
        </>
    )
}