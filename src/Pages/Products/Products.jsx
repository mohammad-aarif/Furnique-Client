import FilterOption from "./Filter Options/FilterOption";
import ProductHeader from "./Product Header/ProductHeader";
import ProductCard from "../../Components/Products/ProductCard";
import Pagination  from "../Products/Pagination/Pagination";
import { useEffect, useState } from "react";
import useProductFilter from "../../Hooks/Products/useProductFilter";

const Products = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const filteredProduct = useProductFilter(pageNumber)
    
    return (
        <div className="py-20 flex h-full">
            <div className="w-1/5">
                <FilterOption />
            </div>
            <div className="w-4/5">
                <ProductHeader />
                <div className="grid grid-cols-4 gap-2 py-2">
                    {
                        filteredProduct.map(product => <ProductCard link={product._id} data={product} key={product._id}/>)
                    }
                </div>
                <div className="pagination">
                   <Pagination pageNumber={pageNumber} setPageNumber ={setPageNumber}/> 
                </div>
            </div>
        </div>
    );
};

export default Products;