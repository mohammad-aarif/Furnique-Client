import FilterOption from "./Filter Options/FilterOption";

const Products = () => {
    return (
        <div className="py-20 flex h-full">
            <div className="w-1/5">
                <FilterOption />
            </div>
            <div className="w-4/5">
            products here</div>
        </div>
    );
};

export default Products;