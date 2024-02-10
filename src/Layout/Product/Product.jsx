import { useEffect, useState } from "react";
import ProductDesign from "./ProductDesign";


const Product = () => {
    const [product, setProduct]=useState([]);
    useEffect(()=>{
        fetch ('../../../public/services.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {product.map(product => <ProductDesign
            key={product._id}
            product={product}
            ></ProductDesign>)}
            
        </div>
    );
};

export default Product;