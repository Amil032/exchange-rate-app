import React, { Suspense, useEffect, useState } from "react";
import classes from "./Modal.module.css";
import {
  symbolsAction,
  modalHandlerAction,
  nationalCurrencyAction,
} from "../../../store/slices/rateSlice";
import { useDispatch } from "react-redux";
import { rateServiceSymbols } from "../../../services/rate.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
export const Modal = () => {
  const [currencies, setCurrencies] = useState("");
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
    dispatch(modalHandlerAction());
  };
  return (
    <>
      <div
        className={classes.backDrop}
        onClick={() => {
          dispatch(modalHandlerAction())
        }}
      ></div>
      <div className={classes.modal}>
        <p className={classes.header}>Please Choose default rate</p>
        <Autocomplete
          onInputChange={(e: React.SyntheticEvent, value: string) =>
            setCurrencies(value)
          }
          id="country-select-demo"
          sx={{ width: 300 }}
          options={currency}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <Box component="li" {...props}>
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a currency"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <div className={classes.button}>
          <div style={{ margin: "10px" }}>
            <Button variant="contained" onClick={confirmHandler}>
              Confirm
            </Button>
          </div>
          <div style={{ margin: "10px" }}>
            <Button variant="outlined" color="error" onClick={cancleHandler}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
