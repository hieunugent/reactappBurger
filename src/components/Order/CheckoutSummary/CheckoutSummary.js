import React from "react";
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css'
const CheckoutSummary = (props) => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We Hope it Tastes Well!</h1>
      <div style={{ width: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};
export default CheckoutSummary;
