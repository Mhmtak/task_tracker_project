import axios from "axios";
import {RiDeleteBack2Fill}from "react-icons/ri";

const TaskList = ({task,getTask}) => {
  

  const deleteTask=async(id)=>{
    const url ="https://63f7293ae40e087c958887d1.mockapi.io/api/tasks"
try{
  await axios.delete(`${url}/${id}`)

}catch (error){
  console.log(error)

}
getTask()


  }
  return (
    <div>
      {task.map((item)=>{
        const {id,task,date}=item
        return(
          <div 
          key ={id}
          className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2">
            
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
            onClick={()=>deleteTask(id)}
            style={{
              cursor:"pointer",
              marginRight:"20px",
              fontSize:"2rem",
              boxShadow:"2px 2px 2px green"
           
            

            
            }


            }
              />

          </div> 
          </div>
        )
      })}
    </div>
  )
}

export default TaskList