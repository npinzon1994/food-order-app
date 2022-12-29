import React, { useCallback, useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async() => {
    try {
      const response = await fetch(
        "https://food-order-app-be8a0-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
  
      //pull all data into an array of JS objects
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
    } catch(error){
      setError(error.message);
    }
    
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  //helper function to make return statement leaner
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <p className={classes['big-text']}>Found no meals.</p>
  if(meals.length > 0 && !isLoading) {
    content = <ul>{mealsList}</ul>;
  }
  if(error) {
    content = <p className={classes['big-text']}>{error}</p>
  }
  if(isLoading){
    content = <p className={classes['big-text']}>Loading...</p>;
  }

  return (
    <Card className={classes.meals}>
      {content}
    </Card>
  );
};

export default AvailableMeals;
