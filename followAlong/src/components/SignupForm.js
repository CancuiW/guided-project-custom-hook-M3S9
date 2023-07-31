import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import { useForm } from "../hooks/useForm";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const initialValue = { username: localStorage.getItem('username') ? localStorage.getItem('username'):"",
                       email:localStorage.getItem("email")?localStorage.getItem('email'):"" }
export default function SignupForm() {
  const classes = useStyles();
  //callBack must be defined before 'handleSubmit',because 
  //'handleSubmit' function contains callBack function
  const callBack = () => {
    alert(`${values.username},${values.email}`);
  };
  //this form state is to store everything in the form as an object
  const [values, handleChanges, clearForm,handleSubmit]=useForm('sign-in',initialValue,callBack)
  

  

 

  

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            //id="outlined-name"
            label="User Name"
            className={classes.textField}
            name='username'
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            //id="outlined-name"
            label="Email"
            className={classes.textField}
            name='email'
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}