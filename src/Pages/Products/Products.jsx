import FilterOption from "./Filter Options/FilterOption";
import ProductHeader from "./Product Header/ProductHeader";
import ProductCard from "../../Components/Products/ProductCard";
import Pagination  from "../Products/Pagination/Pagination";
import { useState } from "react";
import useProductFilter from "../../Hooks/Products/useProductFilter";

const Products = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [loading, setLoading] = useState(true)
    const {products, count} = useProductFilter(pageNumber)


    return (
        <div className="py-20 flex h-full">
            <div className="w-1/5">
                <FilterOption loading={loading} setLoading={setLoading} />
            </div>
            <div className="w-4/5">
                <ProductHeader setLoading={setLoading} />
                <div className="grid grid-cols-4 gap-2 py-2">
                    {
                        products?.map(product => <ProductCard link={product._id} data={product} key={product._id}/>)
                    }
                </div>
                <div className="pagination">
                   <Pagination pageNumber={pageNumber} count={count} setPageNumber ={setPageNumber}/> 
                </div>
            </div>
        </div>
    );
};

export default Products;