"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);
  const [priority, setPriority] = useState('Low');

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask,{title,desc ,priority}])
    setTitle('');
    setDesc('');
    setPriority('Low');
    console.log(mainTask)
  };
  const deletehandler=(i) =>{
  let copyTask=[...mainTask]
  copyTask.splice(i,1)
  setMainTask(copyTask)
  }
  const completehandler=(i)=>{
    let copyTask2=[...mainTask]
    copyTask2.splice(i,1)
    setMainTask(copyTask2)
  }
  let renderTask=<h2>No task available to show</h2>
  if(mainTask.length>0){

  renderTask=mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-2xl font-semibold'>{t.desc}</h6>
      <p className='text-2xl font-semibold'>Priority: {t.priority}</p> 
    </div>
    <button 
    onClick={()=>{
      deletehandler(i)
    }}
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    <button
    onClick={()=>{
      completehandler(i)
    }}
     className='bg-green-400 text-white px-4 py-3 rounded font-bold '>Completed</button>
    </li>
  })
}
  

  return (
    <>
      <h1 className='bg-black text-white text-4xl font-bold text-center'>
        Avneet's Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border border-black m-8 px-7 py-2'
          placeholder='Enter your name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type='text'
          className='text-2xl border border-black m-8 px-7 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="text-2xl  bg-blue-300 border border-black m-8 px-6 py-4 rounded font-bold "
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
          Add task
        </button>
      </form>
      <hr></hr>
      <div className='p-6 bg-slate-200'>
         <ul>
          {renderTask}
         </ul>
      </div>
    </>
  );
};

export default Page;
