import React, { Component } from 'react';
import FoodItem from './FoodItem';

export default class Meal extends Component {
    render() {
        const { calories, mealData } = this.props;
        return (
            <div className="meal">
                {mealData.map((meal, i) => {
                    return <FoodItem key={i} itemData={meal} />;
                })}
                <div className="meal__total">{`${calories} Kcal`}</div>
            </div>
        );
    }
}
