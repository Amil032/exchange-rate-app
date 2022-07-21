import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import type { RootState } from "../../store/store";
import { Modal } from "./modal/Modal";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
type Props = {
  children: JSX.Element;
};
export const Header = ({ children }: Props) => {
  const visibility = useSelector(
    (state: RootState) => state.currency.visibility
  );
  const navigate = useNavigate();
  console.log(children)
  return (
    <div className={classes.header}>
      <div className={classes.navbar}>
        <h1 style={{ color: "white" }}>Currency Rates</h1>
        <Button variant="outlined" onClick={() => navigate("/page2")}>
          All rates
        </Button>
      </div>
      {visibility ? <Modal /> :<div> { children }</div>}
    </div>
  );
};
