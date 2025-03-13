import React from 'react'
import Cart from './posts'
function Products() {
    const data = 
    [
      {
        "title":"1",
        "description":"dasdasdasdl;sdj;lhkfh"
    },
    {
        "title":"2",
        "description":"dasdasdasdl;sdj;lhkfh"
    },
    {
        "title":"3",
        "description":"dasdasdasdl;sdj;lhkfh"
    }
  ]
  return (
    <>
      {data.length ? (data.map((item,index)=>{
        console.log(item);
        return(
        <Cart key={index} title={item.title} description={item.description} children="jadjhssssslakjd"/>
      )}
      )) : (<h1>Not found 404 </h1>) }
    </>
  )
}
export default Products
