import React, { Component, useContext } from "react";
import { Themecontext } from "../contexts/Theme";



const Booklist = () => {
    const {islight,light,dark}=useContext(Themecontext)
    const theme = islight ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.txtcolor }}
    >
      <ul>
        <li style={{ background: theme.ui }}>book1</li>
        <li style={{ background: theme.ui }}>book2</li>
        <li style={{ background: theme.ui }}>book3</li>
      </ul>
    </div>
  );
};


export default Booklist;
