import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo ({todo, index, markTodo, removeTodo}) {
    return(
        <div className="todo">
            <span style={{textDecoration: todo.isDone? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={()=>markTodo(index)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={()=>removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

function FormTodo({ addTodo }) {
    const [value , setValue] = React.useState("");

    const handleSubmit = e => {
        e.perventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Add Todo</Form.Label>
                <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );


    function Todolist1() {
        const [todos,setTodos] = React.useState([
            {
                text: "This is a sampe todo",
                isDone: false
            }
        ]);


        const addTodo = text=>{
            const newTodos = [...todos, {text}];
            setTodos(newTodos);
        };
        
    }

}
