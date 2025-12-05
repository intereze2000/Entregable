import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import { getProducts } from '../../services/products';
export const ItemListContainer = ({titulo}) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        /*
        fetch('/data/products.json')
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
        })*/

        getProducts(categoryId)
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
        }, [categoryId])

    return (        
        <section className="container">
            <h1>{titulo}</h1>
            <ItemList list={products} />
        </section>        
    )
}