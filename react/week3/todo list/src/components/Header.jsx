import React from 'react';
import Counter from "./counter";

function Header() {
    return (
        <div >
        <h1>Todos list</h1>
        <h4><Counter></Counter></h4>
        </div>
    );
}
  
export default Header;