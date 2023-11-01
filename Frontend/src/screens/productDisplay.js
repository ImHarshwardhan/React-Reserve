import { useState, useEffect } from "react";
import { Link , useLocation } from "react-router-dom";
import "./productDisplay.css";
import axios from "axios";

function Display() {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const _id = searchParams.get("_id"); 

    useEffect(() => {
        getProduct(_id);
    }, [_id]); 

    async function getProduct(_id) {
        const url = `http://localhost:5000/product?_id=${_id}`;
        try {
            const response = await axios.get(url);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    }

    return (
        <div className="display">
            <div className="container">
                <div className="product">
                    <div className="image-container">
                        <img
                            src={product.mediaUrl}
                            className="card-img-top"
                            alt={product.name}
                        />
                    </div>
                    <div className="details-container">
                        <h2>{product.name}</h2>
                        <p>Price: &#8377;{product.price}</p>
                        
                    </div>
                </div>
            </div>
            <div className="desc">
                <h1>Product Description</h1>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default Display;