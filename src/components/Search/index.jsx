import "./styles.css";

export const Search = (props) => {

    return (
        <input className="searchProduct" name="search"  placeholder="Search products by title..."
        type="text" onChange={props.handleSearchUpdate}/>
    )
}