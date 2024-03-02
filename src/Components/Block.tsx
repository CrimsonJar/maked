import React, { ReactNode } from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Card } from "react-bootstrap";
type BlockProps = {
  children?: ReactNode;
};
const Block: React.FC<BlockProps> = ({ children }) => {
  return <div className='block'>{children}</div>;
};
export default Block;
