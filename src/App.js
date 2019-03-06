import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './components/FoodItem';
import Meal from './components/Meal';

import Slider from 'react-slick';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loaded: false
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api')
            .then(response => response.json())
            .then(data => {
                this.setState({ loaded: true, data });
            });
    }
    render() {
        let sliderSettings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { data, loaded } = this.state;
        return loaded ? (
            <div className="App">
                <Slider
                    {...sliderSettings}
                    style={{ width: '50%', margin: '0 auto' }}
                >
                    {data.map((item, i) => {
                        const { calories, fullMeal } = item;
                        return (
                            <Meal
                                key={i}
                                calories={calories}
                                mealData={fullMeal}
                            />
                        );
                    })}
                </Slider>
            </div>
        ) : (
            <></>
        );
    }
}

export default App;
