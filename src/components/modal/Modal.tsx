import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import {
  symbolsAction,
  modalHandlerAction,
  nationalCurrencyAction,
} from "../../store/slices/rateSlice";
import { useDispatch } from "react-redux";
import { rateServiceSymbols } from "../../services/rate.service";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Autocomplete, Button, TextField } from "@mui/material";
export const Modal = () => {
  const [currencies, setCurrencies] = useState("USD");
  const dispatch = useDispatch();
  const symbols = useSelector((state: RootState) => state.currency.symbols);
  useEffect(() => {
    rateServiceSymbols()
      .then((response) => response.json())
      .then((result) => dispatch(symbolsAction(result)))
      .catch((error) => console.log("error", error));
  }, []);
  let currency =
    Object.keys(symbols).length > 0 ? Object.keys(symbols.symbols) : [];
  const confirmHandler = () => {
    dispatch(modalHandlerAction());
    dispatch(nationalCurrencyAction(currencies));
  };
  const cancleHandler = () => {
    dispatch(nationalCurrencyAction('USD'));
    dispatch(modalHandlerAction());
  };
  return (
    <>
      <div
        className={classes.backDrop}
        onClick={() => {
          dispatch(modalHandlerAction());
        }}
      ></div>
      <div className={classes.modal}>
        <p className={classes.header}>Please Choose default rate</p>
        <Autocomplete
          id="combo-box-demo"
          options={currency}
          sx={{ width: 300 }}
          onChange={(e: React.SyntheticEvent, value: any) =>
            setCurrencies(value)
          
          }
          renderInput={(params) => <TextField {...params} label="Currencies" />}
        />
        <div className={classes.button}>
          <div style={{ margin: "10px" }}>
            <Button variant="contained" onClick={confirmHandler}>
              Confirm
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button variant="outlined" color="error" onClick={cancleHandler}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
