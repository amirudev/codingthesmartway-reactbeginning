const SearchVegan = ({onBoxChecked}) => {
    return (
    <div>
        <label htmlFor='veganCheck'>Vegan: </label>
        <input id='veganCheck' type='checkbox' onChange={onBoxChecked}/>
    </div>
    )
}

export default SearchVegan;