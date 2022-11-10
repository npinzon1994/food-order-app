import { Fragment } from "react";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MealsSummary/>
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
