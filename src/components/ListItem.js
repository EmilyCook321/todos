import "./ListItem.css";
import React from "react";

function ListItem({ href, children }) {
  return <nav>{children}</nav>;
}

export default ListItem;
