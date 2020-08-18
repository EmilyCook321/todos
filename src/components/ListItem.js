import React from "react";
import "./ListItem.css";

function ListItem({ href, children }) {
  return <nav>{children}</nav>;
}

export default ListItem;
