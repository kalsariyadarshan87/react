import React, { useEffect, useState } from 'react'

export default function Localstorage() {

    const [values,setvalues] = useState({
        name: "",
        email: "",
    });

    const [data,setdata] = useState(()=>{
        var saveData = JSON.parse(localStorage.getItem("data"));
        return saveData || [];
    })

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[data]);

    function submitform(e){
        e.preventDefault();
        setdata([...data,values]);
        
    }
  return (
    <div>
        <form action="" onSubmit={submitform}>
            <input type="text" placeholder='enter the name' onChange={((e)=>setvalues({
                ...values,
                name:e.target.value,
            }))}/>
             <input type="text" placeholder='enter the email' onChange={((e)=>setvalues({
                ...values,
                email:e.target.value,
            }))}/>
            <input type="submit" />
        </form>

        {
            data.map((el,i)=>{
                return <>
                <li>{el.name} <button>edit</button><button>delet</button></li>
                <li>{el.email}</li>
                </>
            })
        }
    </div>
  )
}