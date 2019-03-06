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
            loaded: false,
            error: false
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/meal_planner')
            .then(response => response.json())
            .then(data => {
                this.setState({ loaded: true, data });
            })
            .catch(err => {
                // should be handled better
                this.setState({ error: true });
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
        const { data, loaded, error } = this.state;
        return loaded && !error ? (
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
