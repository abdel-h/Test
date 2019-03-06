import React, { Component } from 'react';

export default class FoodItem extends Component {
    render() {
        const {
            carbs,
            display_name,
            fibers,
            proteins,
            lipids,
            cal,
            type,
            imgUrl
        } = this.props.itemData;

        return (
            <div className="food-item">
                <div className="food-item__background">
                    <img src={imgUrl} alt={display_name} />
                </div>
                <div className="food-item__display-name">
                    <p className="food-item__details hidden">
                        <div>
                            <span>carbs</span>: {carbs}
                        </div>
                        <div>
                            <span>fibers</span>: {fibers}
                        </div>
                        <div>
                            <span>proteins</span>: {proteins}
                        </div>
                        <div>
                            <span>lipids</span>: {lipids}
                        </div>
                        <div>
                            <span>cal</span>: {cal}
                        </div>
                    </p>
                    <h4>{display_name}</h4>
                </div>
            </div>
        );
    }
}
