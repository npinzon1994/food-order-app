import React from "react";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem";
import DUMMY_MEALS from './dummy-meals';

const AvailableMeals = props => {
    const dummyMeals = DUMMY_MEALS;
    
    return <Card className={classes.meals}>
        <ul>
        {/*Need to create mealItems based on
        the dummy array. Might have to use map()
        
        WILL DEFINITELY NEED STATE TO ADD ITEMS*/}
        </ul>
    </Card>
}

export default AvailableMeals;