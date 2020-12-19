const SearchText = ({value, onTextSearch}) => {
    return (
    <div>
        <label htmlFor='searchInput'>Search: </label>
        <input id='searchInput' type='text' onChange={onTextSearch} value={value}/>
    </div>
    )
}

export default SearchText;