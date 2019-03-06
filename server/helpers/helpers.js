exports.mealPlanner = foodVisorData => {
    let meals = {};
    const avgCal = 500;
    const margin = 10;
    for (const item of foodVisorData) {
        // This way we can handle more meals types
        let prop = item.type;
        if (!meals.hasOwnProperty(prop)) {
            meals[prop] = [item];
        } else {
            meals[prop].push(item);
        }
    }
    //  meals is now sorted by type

    // get one meal from each type and count calories

    // would be best to run a DPS here, but for the test purpose I just did it manually
    const results = [];
    let counter = 0;
    for (let i = 0; i < meals.starter.length; i++) {
        for (let j = 0; j < meals.dish.length; j++) {
            for (let k = 0; k < meals.desert.length; k++) {
                let fullMeal = [
                    meals.starter[i],
                    meals.dish[j],
                    meals.desert[k]
                ];
                let calories =
                    meals.starter[i].cal +
                    meals.dish[j].cal +
                    meals.desert[k].cal;
                if (
                    calories <= avgCal + (avgCal * margin) / 100 &&
                    calories >= avgCal - (avgCal * margin) / 100
                ) {
                    results[counter] = {
                        fullMeal,
                        calories
                    };
                    counter++;
                }
            }
        }
    }
    return results;
};
