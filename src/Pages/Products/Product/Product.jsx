import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Reducer/cartSlice";
import { LuCalendarClock } from "react-icons/lu";
import { BsCartXFill, BsFillCartCheckFill } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";
import './product.css'
const Product = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const [bigImage, setBigImage] = useState('');


    useEffect(() => {
        useAxiosPublic.get(`http://localhost:5000/products/item/${id}`)
        .then(data => setProduct(data.data))
        .catch(() => navigate(`/${id}`))
    }, [id, navigate])

    useEffect(() => {
        setBigImage(product?.image?.[0])
    }, [product])

    console.log(bigImage);
    



    return (
<div className="flex p-3 py-12">
          <div className="w-1/3">
            <div>
              <img className="p-1" src={bigImage} alt="" />
            </div>
            <div className="flex">
              {
                product?.image?.map(img => <img key={img} className="w-1/4 m-1 border-2 border-gray-200 hover:border-gray-600" onClick={() => setBigImage(img)} src={img}/>)
              }
            </div>
          </div>

          {/* Product Details and Price  */}
          <div className="w-1/3 px-5">
            <div className="py-5">
              <p className="text-gray-700 uppercase">{product?.sub_cat}</p>
              <h2 className="text-xl font-bold">{product?.title}</h2>
              <h2 className="text-lg text-gray-800">{product?.sub_title}</h2>
              <p className="text-gray-700">SKU: {product?.sku}</p>
              <p className="py-2 text-gray-600">{product?.desc}</p>
              <div className="divider"></div>
              <h2 className="text-xl font-bold">৳ {product?.price}</h2>
            </div>
            <div className="py-16">
              <button onClick={() => dispatch(addToCart(product))} className="bg-green-800 text-white w-4/5 my-1 py-3">Add to Cart</button>
            </div>
          </div>

          {/* Product Physical Informasion */}
          <div className="w-1/3 py-5 px-2">
              {product?.stock ? <p className="text-green-700 font-semibold"><BsFillCartCheckFill className="inline"/> In Stock</p> : <p className="text-red-700 font-semibold"><BsCartXFill className="inline"/> Out of stock</p>}
              {/* Specifications table  */}
              <div className="w-full py-3">
                <h2 className="font-semibold text-lg">Specifications</h2>
                <div className="divider"></div>
                <table className="specification-table">
                  <tr>
                    <td>Materials:</td>
                    <td>Null</td>
                  </tr>
                  <tr>
                    <td>Dimensions:</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Length: {product?.dimension?.length}(cm)</p>
                        <p>Height: {product?.dimension?.height}(cm)</p>
                        <p>Width: {product?.dimension?.width}(cm)</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Warrenty:</td>
                    <td>One year free service warranty for any manufacturing fault.</td>
                  </tr>
                </table>
              </div>
              <div className="py-5">
                <h2 className="text-lg font-semibold text-gray-800 "><LuCalendarClock className="inline"/> Approx. Delevery Time</h2>
                <p className="text-gray-600">Withing 15 working days</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 "><HiOutlineBanknotes className="inline"/> EMI Available</h2>
                <p className="text-gray-600">0% EMI up to 6 months.</p>
                <p className="text-gray-600">Purchase amount minimum BDT 5000</p>
              </div>
          </div>
        </div>
    );
}
export default Product;