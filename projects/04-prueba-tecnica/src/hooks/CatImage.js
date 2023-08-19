import { useEffect, useState } from "react"

const prefix = `https://cataas.com`

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

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

    return { imageUrl: `${prefix}${imageUrl}` }
} //{ imageUrl: 'https://...' }
