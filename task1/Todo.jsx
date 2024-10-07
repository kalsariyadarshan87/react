import React, { useState } from 'react'

export default function Todo() {
    const [name,setname] = useState('')
    const [arr,setarr] =useState([])


    function settodo(e){
       setname(e.target.value);
    }
    function addtodo(){
        setarr([...arr,name]);
    }
    function delettodo(i){
       var n_arr = arr.filter((el,index)=>{
        return i!==index;
       })
       setarr(n_arr);
    }
    function edittodo(i){
        arr[i]= prompt('enter the name.',arr[i]);
        setarr([...arr]);
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='name' onChange={settodo}/>

            
        </form>
        <button onClick={addtodo}>Add</button>


        {
            arr.map((el,i)=>{
                return <li key={i}>{el} 
                <button onClick={()=>delettodo(i)}>Delete</button>
                <button onClick={()=>edittodo(i)}>Edit</button>
                </li>
            })
        }
    </div>
  )
}
