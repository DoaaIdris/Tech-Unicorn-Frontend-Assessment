import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { ProductItem } from "../../ProductItem";
import { Search } from '../../Search';

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [searchString, setSearchString] = useState('');

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

    const handleCategoryUpdate = (cat) => {

        var selectedString = document.getElementById(cat).id;
        console.log(selectedString);

        console.log('hello');

        if(selectedString === 'all') {
            
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


    const getProducts = async() => {
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=13');
            const data = await response.json();
            console.log(data);

            setProducts(data);

            setSearchedProducts(data);


        }catch(err){
            console.log (err)
        }
    }

    const handleSearchUpdate = (event) => {
        setSearchString(event.target.value);
    }

    return (
        <div className = "home-page">


            <div className="topBanner">
                <h1 className="bannerTitle">Home Shopping, Your choice!</h1>
                <p className="bannerTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="circle" id="circle1"></div>
                <div className="circle" id="circle2"></div>
                <div className="circle" id="circle3"></div>
                <div className="circle" id="circle4"></div>
                <div className="circle" id="circle5"></div>
                <div className="circle" id="circle6"></div>
                <div className="circle" id="circle7"></div>
            </div>

            <Search handleSearchUpdate={handleSearchUpdate}></Search>

            <p className="category" id="all" onClick={() => handleCategoryUpdate('all')}>All</p>
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