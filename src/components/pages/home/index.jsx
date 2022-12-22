import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { ProductItem } from "../../ProductItem";
import { ProductsOrderContextProvider} from "../../../context/productsContext";
import { Search } from '../../Search';

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchString, setSearchString] = useState('');

    const globalState = useContext(ProductsOrderContextProvider);

    useEffect(
        () => {
            getProducts();
        }, []
    )

    useEffect(
        () => {
            handleSearchByProduct();
        }, [searchString]
    );

    const handleSearchByProduct = () => {
        if(searchString === '') {
            setSearchedProducts(products);
            return;
        }

        const productsSearched = products.filter(
            (product) => {
                const title = product.title.toLowerCase();
                const isMatch = title.indexOf(searchString.trim().toLowerCase());

                return isMatch !== -1;
            }
        )

        console.log(productsSearched);
        setSearchedProducts(productsSearched);
    }

    const getProducts = async() => {
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=13');
            const data = await response.json();
            console.log(data);

            setProducts(data);

            setSearchedProducts(data);

            globalState.initializeProducts(data);

        }catch(err){
            console.log (err)
        }
    }

    const handleSearchUpdate = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <div className = "home-page">


            <div className="topBanner"></div>

            <Search handleSearchUpdate={handleSearchUpdate}></Search>

            <div className="products-container">
                {
                    searchedProducts.map((product) => (
                        <ProductItem  key={product.id} image={product.image} title ={product.title} 
                        category ={product.category} price ={product.price} id = {product.id}></ProductItem>
                    ))
                }
            </div>
        </div>
            
        
    );
}