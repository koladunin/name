import { useState } from "react";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import { products } from "../data";

export default function CatalogPage() {

    const [query, setQuery] = useState("")
    const [sorting, setSorting] = useState('default')

    const onSortingChange = (event) => {
        setSorting(event.target.value)
    }

    

    const filteredProducts = products.filter((item) => 

        item.name.toLowerCase().includes(query.toLocaleLowerCase())

    )

    const sortProducts = (sorting, products) => {

        switch (sorting) {
            case 'priceAscending':
                return [...products].sort((a, b) => parseFloat(a.price)- parseFloat(b.price))
            case 'priceDescending':
                return [...products].sort((a, b) => parseFloat(b.price)- parseFloat(a.price))
            case 'nameA':
                return [...products].sort((a, b) => a.name.localeCompare(b.name))
            case 'nameZ':
                return [...products].sort((a, b) => b.name.localeCompare(a.name))
            default: 
                return products
        }

    }

    const fullSorting = sortProducts(sorting, filteredProducts)



    return (
        <>
        
            <h1>Каталог</h1>

            <div className="filtered">

                <Filter sorting={sorting} onSortingChange={onSortingChange} />

            </div>

            <div className="cards">

                {
                    fullSorting.map((product, index) => (
                        <Card key={index} {...product} />
                    ))
                }

            </div>
        
        </>
    )
}