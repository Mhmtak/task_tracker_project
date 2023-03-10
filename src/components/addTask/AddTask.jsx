import axios from "axios";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({getTask}) => {
  const [task,setTask]=useState ("");
  const [date,setDate]=useState ("")


  const handleSubmit =(e)=>{
    e.preventDefault();
    const newTask ={task,date}
    addNewTask(newTask)
    setTask("")
    setDate("")
  }

  const addNewTask = async(newTask) =>{
    const url="https://63f7293ae40e087c958887d1.mockapi.io/api/tasks"

    try{
      await axios.post(url,newTask)

    } catch(error){
      console.log(error)
     

    } 
    getTask();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)} /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </Form.Group>
        
        <div className="text-center">
          <Button variant="primary w-50" type="submit">
            SAVE
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTask;