import { useState, useEffect } from "react"
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWord}?size=500&color=red&json=true'
const prefix = `https://cataas.com`

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    /*  useEffect(()=>{
        async function getRandomFact(){
            const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
            const json = await res.json()
            setFact(json.fact)
        }
    
        getRandomFact()
    }, []) */

    //Para recuperar la cita al cargar la página
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => {
                if (!res.ok) throw new Error('Error fetching fact')
                return res.json()
            })
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
            .catch((error)=>{
                // tanto si hay error con la respuesta
                // como si hay error con la petticion
            })
    }, [])

    //Para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {
        if (!fact) return

        const threeFirstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=500&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }, [fact])


    return (
        <main>
            <section>
                <h1>App de Gatitos</h1>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${prefix}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    )
}