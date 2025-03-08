import { useState } from "react";
import useProducts from "../../../Hooks/Products/useProducts";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = () => {
    const  {productCount} = useProducts()
    const [pageNumber, setPageNumber] = useState(1)

    const visibilty = 12
    const pageCount = Math.ceil(productCount / visibilty)
    const pages = [...Array(pageCount).keys()]

    const handleForwardBtn = p => {
        if(pageNumber < pageCount){
            setPageNumber(p)
        }
    }
    const handlePrevBtn = p => {
        if(pageNumber > 1){
            setPageNumber(p)
        }
    }
    console.log(pageNumber);
    
    return (
        <div className="flex py-5 items-center justify-center">
            <button onClick={() => handlePrevBtn(pageNumber-1)} className= {`px-3 h-8 text-lg rounded-sm mr-2 bg-gray-300 hover:bg-amber-400`} ><MdKeyboardDoubleArrowLeft /></button>
            {
                pages.map((data) =>{
                    const page = data+1 
                    return <button onClick={() => setPageNumber(page)} className= {`px-3 h-8 text-lg rounded-sm mr-2 hover:bg-amber-400 ${(pageNumber == page) ? 'bg-amber-400': 'bg-gray-300'}`} >{page}</button>
                })
            }
            <button onClick={() => handleForwardBtn(pageNumber+1)} className= {`px-3 h-8 text-lg rounded-sm mr-2 bg-gray-300 hover:bg-amber-400`} ><MdKeyboardDoubleArrowRight /></button>            
        </div>
    );
};

export default Pagination;