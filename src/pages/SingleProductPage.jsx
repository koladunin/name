import { useParams } from "react-router-dom"
import { products } from "../data"

export default function SingleProductPage() {

    const { id } = useParams()

    const product = products.find(product => product.id === parseInt(id))

    if(!product) {
        return <h2>Данные товар не был найден!</h2>
    }

    return (
        <>
        
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
        </>
    )
}