import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodItem from './components/FoodItem';

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
            .then(data => this.setState({ loaded: true, data }));
    }
    render() {
        const { data, loaded } = this.state;

        return loaded ? (
            <div className="App">
                {data.map((itemData, i) => {
                    return <FoodItem key={i} itemData={itemData} />;
                })}
            </div>
        ) : (
            <></>
        );
    }
}

export default App;
