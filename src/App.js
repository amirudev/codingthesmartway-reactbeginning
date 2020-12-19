import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList';
import SearchText from './components/SearchInput';
import SearchVegan from './components/SearchVegan';

const foodData = [
  {
    name: "Hamburger",
    price: "20",
    isVegan: false,
  }, {
    name: "Salad",
    price: "10",
    isVegan: true,
  }, {
    name: "Stick Sausage",
    price: "7",
    isVegan: false,
  }, {
    name: "Fruit Juice",
    price: "4",
    isVegan: true,
  }
];

const App = () => {
  const [foodSearch, setFoodSearch] = useState(
    localStorage.getItem('foodSearch') || ''
  );
  const [veganCheck, setVeganSearch] = useState(false);

  const textSearchChange = event => {
    setFoodSearch(event.target.value);
  }

  const checkVeganSearch = event => {
    setVeganSearch(event.target.checked);
  }

  useEffect(() => {
    localStorage.setItem('foodSearch', foodSearch)
  }, [foodSearch]);

  const filteredFood = foodData.filter(food => {
      if(veganCheck === true) {
        if(foodSearch.length > 1){
          return food.name.includes(foodSearch) && food.isVegan === true;
        } else {
          return food.isVegan === true;
        }
      } else {
        if(foodSearch.length > 1){
          return food.name.includes(foodSearch);
        } else {
          return food;
        }
      }
  });

  return (
    <div>
      <SearchText value={foodSearch} onTextSearch={textSearchChange} />
      <SearchVegan onBoxChecked={checkVeganSearch} />
      <FoodList foods={filteredFood}/>
    </div>
  );
}

export default App;
