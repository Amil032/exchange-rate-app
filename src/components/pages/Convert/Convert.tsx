import { useState } from "react";
import { rateServiceConertTo } from "../../../services/rate.service";
import classes from "./Convert.module.css";
import arrow from "../../../assests/arrow-left-right.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface currencyState {
  from: string;
  to: string;
  amount: number;
}
export const Page1 = () => {
  const [currency, setcurrency] = useState<currencyState>({
    from: "USD",
    to: "EUR",
    amount: 1,
  });
  const [rate, setRate] = useState<any>();
  const [show, setShow] = useState(false);
  const value = useSelector((state: RootState) => state.currency.symbols);

  const onchangehandler = (e: any) => {
    const { value, name } = e.target;
    setcurrency((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const convertHandler = () => {
    !Object.values(currency).includes('')&&rateServiceConertTo(currency?.from, currency?.to, currency?.amount)
      .then((response) => response.json())
      .then((result) => {
        setRate(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
    setShow(true);
  };
  const currencies =
    Object.keys(value).length > 0 ? Object.keys(value.symbols) : [];
  console.log(currency);
  return (
    <div className={classes.convert}>
      <h1 className={classes.heading}>Currency Convertor</h1>
      <div className={classes.inputContainer}>
        <div className={classes.inputWrapper}>
          <div className={classes.input}>
            <p>Amount</p>
            <input
              type="number"
              name="amount"
              value={currency?.amount}
              onChange={onchangehandler}
            />
          </div>
          <div className={classes.input}>
            <p>From</p>
            <select
              name="from"
              onChange={onchangehandler}
              value={currency?.from}
            >
              {currencies.map((currency) => (
                <option key={currency}>{currency}</option>
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
            <select name="to" value={currency?.to} onChange={onchangehandler}>
              {currencies.map((currency) => (
                <option key={currency}>{currency}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={classes.button}>
          <div style={{ flexGrow: 1}}>
            {show && (
              <div className={classes.text} >
                <h4>
                  1{rate?.query?.from}={rate?.info.rate} {rate?.query?.to}
                </h4>
                <h3>
                  {rate?.query?.amount} {rate?.query?.from}={rate?.result}
                  {rate?.query?.to}
                </h3>
                {Object.values(currency).includes('') && <p style={{ color: 'red'}}>Please fill all fields</p>}
              </div>
            )}
          </div>
          <button onClick={convertHandler}>Convert</button>
          
        </div>
        
      </div>
    </div>
  );
};
