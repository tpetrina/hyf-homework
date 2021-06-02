import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import moment from 'moment';
import Border from "./Border";
import { InputGroup } from 'react-bootstrap';
import FormControl from "react-bootstrap/FormControl";
import PropTypes from "prop-types";


function TodoItem({ id, description, deadline, todos, onDelete, setInputValue }) {
  const [isChecked, setChecked] = useState(false);
  const [editing, setEditStatus] = useState(false);
  const [newDescription, setDescription]=useState(description);

  const check = () => {
    setChecked(!isChecked);
  };

  const editStatus = () => {
    return(
      setEditStatus(!editing)
    ) 
  };

  const uppdateDescription=(id)=>{

    todos.map(todo =>{
        if(todo.id===id) {
        return todo.description=newDescription;
      }
    })
    setInputValue(newDescription)
    setEditStatus(false)
  };


  return (
      <Border>
      <Form.Check
        key={id}
        onChange={check}
        type="checkbox"
        label={`${id} - ${description} | ${moment(deadline).format('MM/DD/YYYY')}`}
      />
      <Button
      variant="danger"
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
      <Button
      variant="info"
        onClick={() => editStatus()}
      >
        Edit
      </Button>

      {editing &&
      <InputGroup>
      <FormControl
      type="text"
              value={newDescription}
              onChange={(event)=>setDescription(event.target.value)}
            />
      <Button
      variant="info"
        onClick={()=>uppdateDescription(id)}
      >
        Update
      </Button>
      </InputGroup>
      }
    </Border>
  );
    
}

TodoItem.propTypes = {
  id:PropTypes.number,
  description:PropTypes.string,
  deadline:PropTypes.instanceOf(Date),
  todos : PropTypes.arrayOf(PropTypes.object),
  onDelete:PropTypes.func,
  setInputValue:PropTypes.func

};

export default TodoItem;


