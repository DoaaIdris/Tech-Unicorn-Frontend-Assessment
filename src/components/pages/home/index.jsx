import "./styles.css";
import {useEffect, useState} from 'react';
import { ProductItem } from "../../ProductItem";

export const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            getProducts();
        }, []
    ); 

    const getProducts = async() => {
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=12');
            const data = await response.json();
            console.log(data);
            // const formattedData = data.documents.map( (item) => {
            //     return item.fields
            // });

            //console.log (formattedData);

            setProducts(data);

        }catch(err){
            console.log (err)
        }
    }

    return (
        <div className = "home-page">

            <div className="topBanner"></div>

            <div className="products-container">
                {
                    products.map((product) => (
                        <ProductItem  key={product.id} image={product.image} title ={product.title} 
                        category ={product.category} price ={product.price} id = {product.id}></ProductItem>
                    ))
                }
            </div>
        </div>
            
        
    );
}