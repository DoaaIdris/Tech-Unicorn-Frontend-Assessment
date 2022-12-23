import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { ProductItem } from "../../ProductItem";
import { ProductsOrderContextProvider} from "../../../context/productsContext";
import { Search } from '../../Search';

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchString, setSearchString] = useState('');
    //let [selectedString, setSelectedCategory] = useState('');

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

    // useEffect(
    //     () => {
    //         handleCategoryUpdate();
    //     }, []
    // );

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

    const handleCategoryUpdate = (cat) => {

        var selectedString = document.getElementById(cat).id;
        console.log(selectedString);

        console.log('hello');

        if(selectedString === '') {
            
            setSearchedProducts(products);
            return;
        }

        const productsSearched = products.filter(
            (product) => {
                const category = product.category.toLowerCase();
                const isMatch = category.indexOf(selectedString.trim().toLowerCase());

                return isMatch !== -1;
            }
        )

        
        console.log(productsSearched);
        setSearchedProducts(productsSearched);
    }

    // const handleCategoryUpdate = (cat) => {
    //     setSelectedCategory(.target.value)
    // }

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

            <p className="category" id="jewelery" onClick={() => handleCategoryUpdate('jewelery')}>Jewelery</p>
            <p className="category" id="clothing" onClick={() => handleCategoryUpdate('clothing')}>Clothing</p>
            <p className="category" id="electronics" onClick={() => handleCategoryUpdate('electronics')}>Electronics</p>

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