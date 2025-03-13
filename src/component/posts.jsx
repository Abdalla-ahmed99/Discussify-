import React, { Children, createContext, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostbyUserId, getAllPosts, getAllUsers } from './redux/slice/users'
import { useNavigate } from 'react-router-dom'

function Posts() {
   const posts=useSelector(state => state.postReducer.posts)
   const users=useSelector(state => state.postReducer.users)
   const nav = useNavigate()


   const dispatch = useDispatch();
   const dispatch2 = useDispatch();

   useEffect(()=>{
      dispatch(getAllPosts());
   },[dispatch])

   useEffect(()=>{
      dispatch(getAllUsers());
   },[dispatch2])


   function getPost(id) {
      if(id=="ALL"){
      dispatch(getAllPosts());
      }
      else{
      dispatch(getAllPostbyUserId(id));}
  }


  function details(item) {
   nav('/details', {
            replace: false, state: {
                data: item
            }
        });
  }

  return (
    
     <>
         <select name="users" id="users" onChange={(event) => {getPost(event.target.value)} }>
            <option value="ALL">all</option>
            {users.map((user, index) => (
                <option key={index} value={user.id}
                >{user.firstName}</option>
                
            ))}
        </select>

         
        <div className="flex flex-wrap items-center justify-between" >
            {
                posts.map((item, index) => {
                    return (
                        <div key={index}>
                           <h1>{item.title}</h1>
                           <p>{item.body}</p>
                           <br />
                          <span>👍{item.reactions.likes} 👎{item.reactions.dislikes}</span> 
                          <button onClick={() => details(item)}>Details</button>
                           <hr />
                        </div>
                    )
                })
            }
        </div>
     </>
    
  )
}

export default Posts
