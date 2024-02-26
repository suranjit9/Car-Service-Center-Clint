import { useEffect, useState } from "react";
import ProductDesign from "./ProductDesign";
import useAxiosUrl from "../../Hook/useAxiosUrl";


const Product = () => {
    const [product, setProduct]=useState([]);
    const axiousurl = useAxiosUrl();
    useEffect(()=>{
        axiousurl.get('/serves')
        .then(res => setProduct(res.data))
        // fetch ('http://localhost:5000/serves')
        // .then(res => res.json())
        // .then(data => setProduct(data))
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