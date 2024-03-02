import React, { ReactNode } from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Card } from "react-bootstrap";
type TabsProps = {
  children?: ReactNode;
  className?: string;
};
const Tabs: React.FC<TabsProps> = ({ children, className = "tabs" }) => {
  return (
    // <div className='tabs'>
    <div className={`${className}`}>
      <div className={`tabs-item${className}`}>{children}</div>
      {/* заменить имя класса */}
    </div>
  );
};
export default Tabs;
