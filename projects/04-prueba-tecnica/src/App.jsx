import './App.css'
import { Otro } from './Components/Otro'
import { useCatImage } from "./hooks/CatImage"
import { useCatFact } from './hooks/useCatFact'



export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <section>
                <h1>App de Gatitos</h1>
                <button onClick={handleClick}>Get new fact</button>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
                <Otro />
            </section>
        </main>
    )
}





/*  useEffect(()=>{
    async function getRandomFact(){
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        const json = await res.json()
        setFact(json.fact)
    }
 
    getRandomFact()
}, []) */