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

export default async function Results() {

    const data = await getData()
    return (
        <>
            <Form dataEvaluation={data} />
        </>
    )
}