import "./styles.css";
import {Button} from '../Button';

export const ProductItem = (props) => {

    const {image, title, category, price, id} = props;

    return (
        <div className="product">
            <p className="product-cat"> {category}</p>
            <img className="product-img" src={image} alt ={title +"img"}/>
            <h1 className="product-title"> {title}</h1>
            <p className="product-price"> {"$" + price}</p>

            <Button text="Add to Cart" type = "primary" isDisabled={false} action={() => alert("Added to cart")} />
        </div>
    )
}