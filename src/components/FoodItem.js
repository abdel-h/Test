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
            <div>
                {display_name}: type = {type} : cals = {cal}
            </div>
        );
    }
}
