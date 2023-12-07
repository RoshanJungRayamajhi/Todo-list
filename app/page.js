"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [disc, setdisc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submithandler = (e)=>{
   e.preventDefault()
   setMainTask([...mainTask, { title ,disc }]);  
   settitle("")
   setdisc("")
   
  }
  const fnclick = (i)=>{
    let copytask = [...mainTask]
    copytask.splice( i,1)
    setMainTask(copytask)
  }
  let renderTask = <h2> NO task available</h2>



  if (mainTask.length>0) {
    renderTask = mainTask.map((t, i) => {
      return(
        <li key={i} className='flex justify-between'>
         <div className='flex justify-between w-[70%]  mb-2'>
        <h5 className='mb-5 text-xl py-1'>{t.title}</h5>
        <h6 className='mb-5 text-xl py-1'>{t.disc}</h6>
        </div>
        <button onClick={()=>{
          fnclick(i);
        }}  className=' bg-red-400  text-white px-4 py-2'>delete me</button>
        </li>
      )
     })
    
  }


  return (
    <>
    <h1 className='bg-black  text-white px-5 text-5xl font-bold text-center'>Roshan todolist</h1>
     <form onSubmit={submithandler}>
      <input type='text' className='text-2xl m-2 p-3 border-zinc-800 border-2' placeholder='Enter your task' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      ></input>
      <input type='text' className='text-2xl m-2 p-3 border-zinc-800 border-2' placeholder='Enter the discription'
       value={disc}
       onChange={(e)=>{
        setdisc(e.target.value);

       }}
       ></input>
      <button  className='text-2xl text-white border-2 border-zinc-800 bg-black mx-3 p-2' >Add task</button>
     </form>
    <div className='m-4 p-3 bg-slate-200'>
      <ul>
      {renderTask}  

      </ul>
      </div>
    
    </>



    )
}

export default page