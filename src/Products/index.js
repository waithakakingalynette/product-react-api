import React,{useState, useEffect} from "react";
import './style.css';
import { Link } from "react-router-dom";


const Products =()=>{
    const [products,setProducts]= useState([]);
    const [loading, setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    }, [])
    const getProducts= async()=>{
        try{
            setLoading(true)
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json();
            setProducts(result.products)
            setLoading(false);
        }
        catch(error){
            console.log(error.message)
        }
    };
        if(loading){
            return <h2>Loading...</h2>
    }
    return(
        <div className="container">
            <h1 className="h1">All Products</h1>
            {products.map(item =>(
                <div>
                    <img src={item.thumbnail} alt={item.title} className="thumbnail" />
                <h2 className="heading">{item.title}</h2>
                <p className="heading">Price: ${item.price}</p>
                <p className="heading">Discount:{item.discountPercentage}%</p>
                <button onClick={() => onAddproductclick (item)} className="view">View product details</button>
                </div>
            ))}
            <button onClick={() => onProductClick ()} className="add">Add Product</button>
        </div>
    );
};

const onProductClick= (products) =>{

}

const onAddproductclick =(products) =>{

}
export default Products