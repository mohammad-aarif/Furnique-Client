const SelectCategory = ({category, setCategory, item}) => {

    const handleCatSelection = c => {
        setCategory((prevData) =>
            prevData.includes(c)
                ? prevData.filter((item) => item !== c)
                : [...prevData, c]
        );        
    }

    return (
        <div>
            <label className='category-item'>
                <input
                    type="checkbox"
                    checked={category.includes(item?.category)}
                    onChange={() => handleCatSelection(item?.category)}
                    />
                <span className='checkmark'></span>
                {item?.category}
            </label>
        </div>
    );
};

export default SelectCategory;
