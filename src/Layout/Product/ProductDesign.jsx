
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductDesign = ({product}) => {
    console.log(product)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={product.img} alt={product.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description ? product.description.slice(0, 100) : product.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/Booking/${product._id}`} className="text-red-600 hover:text-2xl"><FaLongArrowAltRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDesign;