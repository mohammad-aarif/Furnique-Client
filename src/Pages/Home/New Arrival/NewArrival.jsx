import SectionTitle from "../../../Components/Common/SectionTitle";
import ProductCard from '../../../Components/Products/ProductCard'
import useProducts from "../../../Hooks/Products/useProducts";
import BrowseMore from "../../../Components/Buttons/BrowseMore"
import './newArrival.css'
const NewArrival = () => {

    const {newArrivalData} = useProducts()
    
    return (
        <>
            <SectionTitle title="New Arrival" subtitle="Showcasing Our Latest and Greatest"/>
            <div className="px-16 py-8 product-catalog">
                {newArrivalData.map(data => <ProductCard data={data}/>)}
                <BrowseMore className='h-full w-full shadow-sm'/>
            </div>
        </>
    );
};

export default NewArrival;