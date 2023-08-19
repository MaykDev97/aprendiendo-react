import { useEffect, useState } from "react"
import { getRandomFact } from "../servicie/fact"

export function useCatFact  ()  {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(setFact)
    }
    //Para recuperar la cita al cargar la página
    useEffect(refreshFact, [])

    return {fact, refreshFact}
}