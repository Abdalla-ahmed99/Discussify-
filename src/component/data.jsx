import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Data() {
    const [Data , setData ]=useState([]);
const getdata=async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data);
    setData(res.data);
    
    
}
useEffect(()=>{
    getdata();
},[])
  return (
    <div>
      {Data.map((item,index)=>{
        return(<h1 key={index}>{item.title}</h1>)
      })}
    </div>
  )
}

export default Data
