import React from 'react';

class FoodList extends React.Component {
    render() {
        console.log(this.props.foods);
        return (
            <div>
                <h3>Restaurant Food List</h3>
                <ul>
                {this.props.foods.map(({name, price, isVegan}) => { // Object Destructuring
                    return (<li key={name}>
                        {name} 
                        <span> {isVegan ? "🥬" : "🥩"}</span>
                        <p>Price: {price}</p>
                        </li>
                        );
                })}
                </ul>
            </div>
        )
    }
}

export default FoodList;