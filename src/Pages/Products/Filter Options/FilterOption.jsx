import SelectCategory from '../../../Components/Catagories/SelectCategory';
import './filterOption.css'
import useCategories from '../../../Hooks/Category/useCategories';
import { useSelector } from 'react-redux';

const FilterOption = () => {
    const category = useSelector((state) => state.filter.categories)
    const categories = useCategories()

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