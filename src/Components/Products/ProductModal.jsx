import Modal from "react-modal";
import './ProductModal.css'
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCartXFill, BsFillCartCheckFill } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { HiOutlineBanknotes } from "react-icons/hi2";

const ProductModal = ({ ModalOpen, ModalClose, product }) => {
  const [bigImage, setBigImage] = useState(product?.image[0]);
  return (
    <Modal
        isOpen={ModalOpen}
        onRequestClose={ModalClose}
        className='product-modal'
        overlayClassName='product-modal-overlay'
    >
      {/* Close Button  */}
      <button onClick={ModalClose} className="absolute text-2xl top-2 right-2"><RxCross2 /></button>

        <div className="flex p-3">
          <div className="w-1/3">
            <div>
              <img className="p-1" src={bigImage} alt="" />
            </div>
            <div className="flex">
              {
                product?.image.map(img => <img key={img} className="w-1/4 m-1" onClick={() => setBigImage(img)} src={img}/>)
              }
            </div>
          </div>
          <div className="w-1/3 px-5">
            <div className="py-5">
              <p className="text-gray-700 uppercase">{product?.sub_cat}</p>
              <h2 className="text-xl font-bold">{product?.title}</h2>
              <h2 className="text-lg text-gray-800">{product?.sub_title}</h2>
              <p className="text-gray-700">SKU: {product?.sku}</p>
              <h2 className="text-xl font-bold">৳ {product?.price}</h2>
            </div>
            <div className="py-16">
              <button className="bg-green-800 text-white w-4/5 my-1 py-3">Add to Cart</button>
              <button className="bg-amber-400 w-4/5 my-1 py-3">More Details</button>
            </div>
          </div>
          <div className="w-1/3 py-5">
              {product?.stock ? <p className="text-green-700 font-semibold"><BsFillCartCheckFill className="inline"/> In Stock</p> : <p className="text-red-700 font-semibold"><BsCartXFill className="inline"/> Out of stock</p>}
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
    </Modal>
  );
};

export default ProductModal;
