import { useState, useEffect } from 'react';
import SelectCategory from '../../../Components/Catagories/SelectCategory';
import './filterOption.css'
import useCategories from '../../../Hooks/Category/useCategories';
import { useSelector } from 'react-redux';

const FilterOption = () => {
    const category = useSelector((state) => state.filter.categories)
    const categories = useCategories()
    // const [category, setCategory] = useState(() => {
    //     const storedData = localStorage.getItem('cat_filter')
    //     return storedData ? JSON.parse(storedData) : {category: []}
    // })

    // useEffect(() => {
    //     localStorage.setItem('cat_filter', JSON.stringify(category))
    // },[category])    
   console.log(category)
    return (
        <div className='filter-container'>
            <h2 className="text-2xl font-medium">Filter Options</h2>

            <div className="divider"></div>
            {/* Categories List  */}
            <div className="py-4">
                <h2 className="text-xl font-medium">Category</h2>
                {
                    categories.map(data => <SelectCategory category={category.categories} item={data} key={data._id}/>)
                }
            </div>
        </div>
    );
};

export default FilterOption;