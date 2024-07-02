import React from 'react'

const Data = [
{ id: 'DO-001', name: 'John Smith', post: 'Product Manager', parentId: null },
// { id: 'DO-002', name: 'John Smith', post: 'Senior Developer', parentId: 'DO-001' },
// { id: 'DO-003', name: 'John Smith', post: 'Senior Designer', parentId: 'DO-001' },
// { id: 'DO-004', name: 'John Smith', post: 'Quality Analyst', parentId: 'DO-001' },
// { id: 'DO-012', name: 'John Smith', post: 'Junior Designer', parentId: 'DO-003' },
// { id: 'DO-013', name: 'John Smith', post: 'Junior Designer', parentId: 'DO-003' },
// { id: 'DO-014', name: 'John Smith', post: 'Junior Designer', parentId: 'DO-003' },
// { id: 'DO-015', name: 'John Smith', post: 'Intern', parentId: 'DO-004' },
// { id: 'DO-016', name: 'John Smith', post: 'Intern', parentId: 'DO-004' }
];
const TemeMamber = () => {

  
  return (<>

{Data.map(()=>{return(
  <div className='border border-slate-400 rounded-lg m-[15rem] w-[13rem] h-[8rem]'>
   <h1 className='text-blue-950 mt-2 ml-2 font-bold'>Product Manager</h1>
   <div className=' border border-slate-400 m-2'>
    <img src="/alexandra.jpeg" 
       alt="" 
       className='rounded-[25rem] border border-black w-12 h-12'/>
       
       <h1>John Smith</h1>
       <p>{Data.id}</p>

   </div>
  </div>
)})}

</>)}

export default TemeMamber

