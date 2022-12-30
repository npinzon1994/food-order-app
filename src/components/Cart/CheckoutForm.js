import { useRef, useState } from "react";
import classes from "./CheckoutForm.module.css";

const isEmpty = (value) => value.trim() === "";
const hasFiveDigits = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    zip: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const zipRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredZip = zipRef.current.value;
    const enteredCity = cityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredZipIsValid = hasFiveDigits(enteredZip);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      zip: enteredZipIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredZipIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    //submit cart data
  };

  

  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}}`;
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}}`;
  const zipControlClasses = `${classes.control} ${formInputsValidity.zip ? '' : classes.invalid}}`;
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}}`;
  

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputsValidity.name && <p>Name cannot be empty!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputsValidity.street && <p>Street address cannot be empty!</p>}
      </div>
      <div className={zipControlClasses}>
        <label htmlFor="zip">Zip Code</label>
        <input type="text" id="zip" ref={zipRef} />
        {!formInputsValidity.zip && <p>Please enter a valid zip code (5 characters long)!</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputsValidity.city && <p>City cannot be empty!</p>}
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
