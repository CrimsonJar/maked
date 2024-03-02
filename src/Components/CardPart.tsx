import React, { ReactNode } from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Card } from "react-bootstrap";
type CardPartProps = {
  children?: ReactNode;
  className?: string;
};
const CardPart: React.FC<CardPartProps> = ({ children, className }) => {
  return <div className={`card-part ${className || ""}`}>{children}</div>;
};
export default CardPart;
