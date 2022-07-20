import React, { useEffect } from "react";
import { rateServiceLatest} from "../../../services/rate.service";
import { Header } from "../../header/Header";
import classes from "./Convert.module.css";
import arrow from "../../../assests/arrow-left-right.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
export const Page1 = () => {
  const value = useSelector((state: RootState) => state.currency.symbols)
  // useEffect(() => {
  //   console.log(rateServiceLatest('USD',['AZN','EUR']))
  // },[])
  const currencies = Object.keys(value).length>0?Object.keys(value.symbols):[];
  console.log(value,currencies)
  return (
    <Header>
      <div className={classes.convert}>
        <h1>The World's Trusted Currency Authority</h1>
        <div className={classes.inputContainer}>
          <div className={classes.inputWrapper}>
            <div className={classes.input}>
              <p>Amount</p>
              <input type="number" />
            </div>
            <div className={classes.input}>
              <p>From</p>
              <select>
                {currencies.map((currency) => (
                  <option>{ currency}</option>
                ))}
              </select>
            </div>
            <div>
              <div className={classes.img}>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={classes.input}>
              <p>To</p>
              <select>
                {currencies.map((currency) => (
                  <option>{ currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={classes.button}>
            <div>
              <h3>1USD = 1AZ</h3>
            </div>
            <button>Convert</button>
          </div>
        </div>
      </div>
    </Header>
  );
};
