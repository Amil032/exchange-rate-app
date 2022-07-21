import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import type { RootState } from "../../store/store";
import { Modal } from "./modal/Modal";
import { useSelector } from "react-redux";

type Props = {
  children: JSX.Element;
};
export const Header = ({ children }: Props) => {
  const visibility = useSelector(
    (state: RootState) => state.currency.visibility
  );
  const [title,setTitle]=useState('Go to all rates')
  const navigate = useNavigate();
  const locations = useLocation();
  const navigationHandler = () => {
    if (locations.pathname === "/") {
      navigate("/page2");
      setTitle('Go to Convert')
    } else {
      navigate("/");
      setTitle('Go to all rates')
    }
  };
  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <h1 style={{ color: "white",marginLeft:"10px" }}>Currency Rates</h1>
        <button onClick={navigationHandler} className={classes.button}>
           {title}
        </button>
      </div>
      {visibility ? <Modal /> : <div> {children}</div>}
    </div>
  );
};
