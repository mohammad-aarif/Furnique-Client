import { useDispatch, useSelector } from "react-redux";
import { addToFilter } from "../../Redux/Reducer/filterSlice";

const SelectCategory = ({item}) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.filter.categories)
    return (
        <div>
            <label className='category-item'>
                <input
                    type="checkbox"
                    checked={categories.includes(item?.category)}
                    onChange={() => dispatch(addToFilter(item?.category))}
                    />
                <span className='checkmark'></span>
                {item?.category}
            </label>
        </div>
    );
};

export default SelectCategory;
