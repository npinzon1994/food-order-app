import { Fragment } from "react";
import MealsSummary from "./components/Meals/MealsSummary";
import Header from "./components/UI/Header";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MealsSummary/>
    </Fragment>
  );
}

export default App;
