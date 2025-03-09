import { useState } from "react";
import useProducts from "../../../Hooks/Products/useProducts";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = () => {
    const  {productCount} = useProducts()
    const [pageNumber, setPageNumber] = useState(1)

    const visibilty = 12
    const pageCount = Math.ceil(productCount / visibilty)
    
    const getPages = () => {

        let pages = []
        const maxVisiblePage = 5
        const range = Math.floor(maxVisiblePage / 2);

        let startPage = Math.max(1, pageNumber-range)
        let endPage = Math.min(pageCount, maxVisiblePage + startPage - 1)

        if(endPage == pageCount){
            startPage = Math.max(1, pageCount - maxVisiblePage +1)
        }
        if(startPage > 1){
            pages.push('...')
        }

        for(let i = startPage; i<= endPage; i++){
            pages.push(i)
        }
        if(endPage < pageCount){
            pages.push('...')
        }
        return pages
    }

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
    return (
        <div className="flex py-5 items-center justify-center">
            <button onClick={() => handlePrevBtn(pageNumber-1)} className= {`px-3 h-8 text-lg rounded-sm mr-2 bg-gray-300 hover:bg-amber-400`} ><MdKeyboardDoubleArrowLeft /></button>
            {
                getPages().map((data, idx) =>
                    data === '...'
                        ? <button className= {`px-3 h-8 text-lg rounded-sm mr-2 bg-gray-300`} >...</button>
                        : <button keys={idx} onClick={() => setPageNumber(data)} className= {`px-3 h-8 text-lg rounded-sm mr-2 hover:bg-amber-400 ${(pageNumber == data) ? 'bg-amber-400': 'bg-gray-300'}`} >{data}</button> 
                                       
                    
                )
            }
            <button onClick={() => handleForwardBtn(pageNumber+1)} className= {`px-3 h-8 text-lg rounded-sm mr-2 bg-gray-300 hover:bg-amber-400`} ><MdKeyboardDoubleArrowRight /></button>            
        </div>
    );
};

export default Pagination;