import './App.css';
import FoodList from './FoodList';

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
  return (
    <div>
      <FoodList foods={foodData}/>
    </div>
  );
}

export default App;
