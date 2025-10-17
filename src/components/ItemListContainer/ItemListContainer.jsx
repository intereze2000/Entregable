import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data/products.json')
        .then(res => {
            if (!res.ok) {
                throw new Error("Error al obtener los productos");
            }
            return res.json();
        })
        .then(data => {
            setProducts(data)           
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <>
        <section>
            <h1>Bienvenido</h1>
            <ItemList list={products} />
        </section>
        </>
    )
}