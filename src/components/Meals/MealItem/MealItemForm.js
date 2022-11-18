import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const quantityInputRef = useRef();
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 10
    ) {
      setQuantityIsValid(false);
      return;
    }

    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/*Now we can add whichever props we want in our object being fed through input prop*/}
      <Input
        ref={quantityInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id, //Appending same id from mealItem to make all inputs unique.
          //Otherwise, all of them would have the same id of 'amount'
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type={props.type}>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid amount (1-10)</p>}
    </form>
  );
};

export default MealItemForm;
