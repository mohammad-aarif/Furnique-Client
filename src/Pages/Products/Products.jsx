import useProducts from "../../Hooks/Products/useProducts";
import FilterOption from "./Filter Options/FilterOption";
import ProductHeader from "./Product Header/ProductHeader";
import ProductCard from "../../Components/Products/ProductCard";

const Products = () => {
    const {allProduct} = useProducts(null)
    console.log(allProduct);
    
    return (
        <div className="py-20 flex h-full">
            <div className="w-1/5">
                <FilterOption />
            </div>
            <div className="w-4/5">
                <ProductHeader />
                <div className="grid grid-cols-4 gap-2 py-2">
                    {
                        allProduct.map(product => <ProductCard link={product._key} data={product} key={product._key}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;