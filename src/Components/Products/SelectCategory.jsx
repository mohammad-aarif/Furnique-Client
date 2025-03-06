import { useState } from 'react';

const SelectCategory = ({item}) => {
    const [category, setCategory] = useState([])

    const handleCatSelection = c => {
        setCategory(data => 
            data.includes(c) 
            ? data.filter(item => item !== c)
            : [...data, c]
        )
    }   
    console.log(category)
    return (
        <div>
            <label className='category-item'>
                <input
                    type="checkbox" 
                    name="Living Room" 
                    onChange={handleCatSelection}
                    />
                <span className='checkmark'></span>
                {item?.name}
            </label>
        </div>
    );
};

export default SelectCategory;

