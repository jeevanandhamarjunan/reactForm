import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// const allData=[];
//  let User=()=>{
//     const [userName,setuserName]=useState("jeeva");
//     const [password,setpassword]=useState("madhu");

//     const getData=(ev)=>{
//         console.log("ev",ev);
//         if(ev.target.name==="userName"){
//             setuserName(ev.target.value)
//         }
//         else{
//             setpassword(ev.target.value)
//         }
//     };
//      const handelsubmit=(event)=>{
//         event.preventDefault();
//         if(userName !== ""||password !== ""){
//             return ;
//         }
//         else{ 
//          allData.push({userName:userName,password:password})
//          console.log(allData);
//         }
//      }
//     return (
//          <div>
//             <form>
//                 <input
//                  name="userName"
//                  onChange={getData}>
//                 </input><br></br>
//                  {userName === "" && (
//                  <p style={{color:"red"}}>userName is required</p>
//                  )}
//                 <input
//                   name="password"
//                   onChange={getData}>
//                 </input><br></br>
//                  {password === "" && (
//                  <p style={{color:"red"}}>password is required</p>
//                  )}
//                  <button onClick={handelsubmit}>
//                      submit
//                  </button>
//             </form>
//             </div>
//             );
//  }
// let root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<User />);
const tasks=[];
 const FormTask=()=>{
    const [taskName,settaskName]=useState("");
    const [description,setdescription]=useState("");
    const [priority,setpriority]=useState("");
    const [complete,setcomplete]=useState("");
    
    const [applyPriority,setapplyPriority]=useState("");
    const [applyComplete,setpplyComplete]=useState("");
    const [answer,setAnswer] = useState([]);
    const updateTaskName=(event)=>{
        settaskName(event.target.value);
    }
    const updateDescription=(event)=>{
        setdescription(event.target.value);
    } 
       const updatePriority=(event)=>{
        setpriority(event.target.value);
        
    }
        const updateComplete=(event)=>{ 
        setcomplete(event.target.value);
        
    }
    const handelsubmit=(event)=>{
                event.preventDefault();
               tasks.push({taskName,
                            description,
                            priority,
                            complete,
                    });
                    
                    console.log(taskName,description,priority,complete);  
                    console.log(tasks);
    }

    const updateFilterPriority=(event)=>{
        setapplyPriority(event.target.value);
    }
    const updateFilterComplete=(event)=>{
         setpplyComplete(event.target.value);
    }
    const showFilterData=(event)=>{
       event.preventDefault();
       console.log(applyPriority);
      setAnswer(tasks.filter((item) => {return((item.priority == applyPriority)&&(item.complete == applyComplete))})
      ) 
    }   
    console.log(answer);     
    return(
        <div className='formDecoration'>
            <form>
                <label>
                 TaskName :
                <input type={"text"} onChange={updateTaskName} />
                </label>
                 <br />
                 <label>
                  Description : 
                <input type={"text"} onChange={updateDescription} />
                </label>
                 <br>
                 </br>
                <label>
                  Priority :  
                <input type={"radio"} onChange={updatePriority} name={"prioity"} value="yes" /><label>Yes</label>
                <input type={"radio"} onChange={updatePriority} name={"prioity"} value="no" /><label>No</label>
                </label>
                 <br />
                <label>
                  Complete :    
                <input type={"radio"} onChange={updateComplete} name={"complete"} value="yes" /><label>Yes</label>
                <input type={"radio"} onChange={updateComplete} name={"complete"} value="no" /><label>No</label>
                </label>
                 <br />
                <button onClick={handelsubmit}>submit</button> 
            </form>
            {/* <div>
                <p>Task Name is {taskName}</p>
                <p>Task Description is{description}</p>
                <p>Task Priority is {priority}</p>
                <p>Task status completed {complete}</p>
            </div> */}
            <form>
                <label>
                   Priority Task : 
                    <input type={"radio"} onChange={updateFilterPriority} name={"formPriority"} value="yes"/><label>Yes</label>
                    <input type={"radio"} onChange={updateFilterPriority} name={"formPriority"} value="no"/><label>No</label>
                </label>
                 <br />
                <label>
                   Completed Task :
                    <input type={"radio"} onChange={updateFilterComplete} name={"formComplete"} value="yes" /><label>Yes</label>
                    <input type={"radio"} onChange={updateFilterComplete} name={"formComplete"} value="no" /><label>No</label>
                </label> 
                 <br /> 
                <button onClick={showFilterData}> Filter Apply</button>
            </form>
        </div>
    )
 }
  const root=ReactDOM.createRoot(document.getElementById("root"));
     root.render(<FormTask />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
