import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

function Border({children}) {
    return(
<ListGroup.Item
        variant="danger"
        style={{ border: "3px solid" , margin: "20px"}}
        >
            {children}
        </ListGroup.Item>
    )
}

export default Border;