import "./product.css";
import QuantityPicker from '../components/quantityPicker';
import { useEffect } from "react";

//when the component is loaded, console.log("component loaded");


function Product(props){

    useEffect(function(){
        //when the component is loaded
        console.log("component loaded");
    },[]);

    return(
        <div className="product">

            <img src={"/images/" + props.data.image} alt="cakes"></img>
            <h5> {props.data.title} </h5>

            <div className='prices'>
            <label className="price"> ${props.data.price.toFixed(2)} </label>
            <label className="total"> ${props.data.price.toFixed(2)} </label>
            <label> Total </label>
            </div>

            {/*here we want to add the Qt-picker*/}
            <QuantityPicker/>
            <button className="btn btn-sm btn-success">Add</button>

        </div>
        
    )

}

export default Product;
//create a Product component inside of the -- clear
//components folder (with a h5 for the title) -- clear
//render a <QuantityPicker/> inside of Product -- clear
//render the product component in the catalog - 5 times