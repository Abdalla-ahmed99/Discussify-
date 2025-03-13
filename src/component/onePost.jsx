import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCommentsOnePost } from './redux/slice/users';

function OnePost() {
    const commnets=useSelector(state => state.postReducer.commnets)
    const dispatch = useDispatch();
    
    
    const loc = useLocation();
    let item  = loc.state.data
    console.log(loc.state.data);

    useEffect(()=>{        
    dispatch(getCommentsOnePost(item.id));
    },[dispatch])
 
 
 
    return (
    <>
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>

            <h4>{(commnets.lenght)} Comments : </h4>
            {commnets.map((comment, index) => {
                return <p key={index}>💭 {comment.body}</p>
            })}
        </div>
    </>
  )
}

export default OnePost
