import { useCatImage } from "../hooks/CatImage";

export function Otro () {
 const {imageUrl} = useCatImage({fact: 'cat'})

    return(
        <>
        {imageUrl && <img src={imageUrl}/>}
        </>
    )
}