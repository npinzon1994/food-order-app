import { useRef } from "react";
import useInput from "../../hooks/use-input";
import classes from "./CheckoutForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const hasFiveDigits = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const zipInputRef = useRef();
  const cityInputRef = useRef();

  const {
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputOnBlurHandler: nameOnBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredStreet,
    inputIsValid: streetIsValid,
    hasError: streetHasError,
    inputChangeHandler: streetChangeHandler,
    inputOnBlurHandler: streetOnBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredCity,
    inputIsValid: cityIsValid,
    hasError: cityHasError,
    inputChangeHandler: cityChangeHandler,
    inputOnBlurHandler: cityOnBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredZip,
    inputIsValid: zipIsValid,
    hasError: zipHasError,
    inputChangeHandler: zipChangeHandler,
    inputOnBlurHandler: zipOnBlurHandler,
    reset: resetZip,
  } = useInput(hasFiveDigits);

  const formIsValid = nameIsValid && streetIsValid && zipIsValid && cityIsValid;

  const confirmHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      //submit cart data
      const userData = {
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        zip: enteredZip,
      };

      props.onSubmitOrder(userData);
      resetName();
      resetStreet();
      resetCity();
      resetZip();
    } else if (!nameIsValid) {
      nameInputRef.current.focus();
      return;
    } else if (!streetIsValid) {
      streetInputRef.current.focus();
      return;
    } else if (!zipIsValid) {
      zipInputRef.current.focus();
      return;
    } else {
      cityInputRef.current.focus();
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    !nameHasError ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    !streetHasError ? "" : classes.invalid
  }`;
  const zipControlClasses = `${classes.control} ${
    !zipHasError ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    !cityHasError ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
          ref={nameInputRef}
        />
        {nameHasError && <p>Name cannot be empty!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetOnBlurHandler}
          value={enteredStreet}
          ref={streetInputRef}
        />
        {streetHasError && <p>Street address cannot be empty!</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor="zip">Zip Code</label>
        <input
          type="text"
          id="zip"
          onChange={zipChangeHandler}
          onBlur={zipOnBlurHandler}
          value={enteredZip}
          ref={zipInputRef}
        />
        {zipHasError && (
          <p>Please enter a valid zip code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityOnBlurHandler}
          value={enteredCity}
          ref={cityInputRef}
        />
        {cityHasError && <p>City cannot be empty!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
