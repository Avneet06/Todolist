"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask,{title,desc }])
    setTitle('');
    setDesc('');
    console.log(mainTask)
  };
  let renderTask=<h2>No task available to show</h2>
  if(mainTask.length>0)
  {
    renderTask=mainTask.map((t,i)=>{
      return 
      <li><div className='flex justify-between mb-5 '>
        <h5 className='text-2xl font-bold'>{t.title}</h5>
        <h5 className='text-xl font-semi-bold'>{t.desc}</h5>
      </div></li>
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
