import {
  Autocomplete,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { rateServiceLatest } from "../../../services/rate.service";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import classes from "./Rates.module.css";
export const Page2 = () => {
  const [latestRates, setLatestRates] = useState<any>({});
  const [currencies, setCurrencies] = useState("");
  const symbols = useSelector((state: RootState) => state.currency.symbols);
  const base = useSelector(
    (state: RootState) => state.currency.nationalCurrency
  );
  console.log(base, "base");
  useEffect(() => {
    rateServiceLatest(
      currencies ? currencies : base ? base : [],
      Object.keys(symbols.symbols)
    )
      .then((response) => response.json())
      .then((result) => {
        setLatestRates(result.rates);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [currencies]);
  let currency =
    Object.keys(symbols).length > 0 ? Object.keys(symbols.symbols) : [];
  return (
    <div className={classes.rate}>
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
      <div
        style={{
          display: "flex",
          
          
          marginTop: "20px",
        }}
      >
        <div
          style={{ width: "500px", color: "white", backgroundColor: "#1c3651" }}
        >
          <p style={{ marginLeft: "10px" }}>
            {currencies ? currencies : base ? base : ""} Currencies full list
          </p>
        </div>
      </div>
      <TableContainer component={Paper} sx={{maxWidth:500}}>
        <Table sx={{ maxWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="right">Code</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(latestRates).map((key, index) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{symbols.symbols[key]}</TableCell>
                <TableCell align="right">{key}</TableCell>
                <TableCell align="right">{latestRates[key]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
