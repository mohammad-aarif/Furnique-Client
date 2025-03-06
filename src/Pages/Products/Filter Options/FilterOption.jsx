import { useState } from 'react';
import SelectCategory from '../../../Components/Products/SelectCategory';
import './filterOption.css'
import useCategories from '../../../Hooks/Category/useCategories';

const FilterOption = () => {
    const categories = useCategories()
    const [category, setCategory] = useState([])


    return (
        <div className='filter-container'>
            <h2 className="text-2xl font-medium">Filter Options</h2>
            <div className="divider"></div>
            <h2 className="text-xl font-medium">Category</h2>
            {
                categories.map(data => <SelectCategory category={category} setCategory={setCategory} item={data} key={data._id}/>)
            }
        </div>
    );
};

export default FilterOption;