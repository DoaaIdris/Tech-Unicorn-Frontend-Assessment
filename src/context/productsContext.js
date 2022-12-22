import React, {useState} from 'react';

const ProductsOrderContext = React.createContext({
    products: [],
    order: [],
    initializeProducts: () => {},
    addProductToOrder: () => {},
    removeProductFromOrder: () => {},
});

export const ProductsOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);

    const [products, setProducts] =useState([]);

    const initializeProducts = (productsFromApi) => {
        setProducts(productsFromApi);
    }

    const addProductToOrder = (product)  => {
        let newOrder = order;
        newOrder.push (product);
        setOrder(order);
    }

    const removeProductFromOrder = (productId) => {
        let productOrder = order;
        const found = order.findIndex( (product) => {
            return(product.id === productId);
        })
        if(found!== -1){
            productOrder.splice(found, 1);
            setOrder([...productOrder]);
        } else {
            console.log ("error delete");
        }
    }

    return (<ProductsOrderContext.Provider
        value = {{order: order, addProductToOrder: addProductToOrder, removeProductFromOrder: removeProductFromOrder, products: products, 
        initializeProducts: initializeProducts}}
        >
            {props.children}
        </ProductsOrderContext.Provider>)
}

export default ProductsOrderContext;

