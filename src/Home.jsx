import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const {value} = useSelector(
        state => state.custom
    )

    const dispatch = useDispatch()
   
    const addBtn = () =>
    {
        dispatch({
            type : "increment"
        })
    }

    const subBtn = () =>
    {
        dispatch({
            type : "decrement"
        })
    }

    const addByValue = () => 
    {
        dispatch({
            type : "incrementByValue",
            payload : +prompt("enter value :")
        })
    }
  return (
    <div>
        <p>{value}</p>
    
    <button onClick={addBtn}>Increment</button>
    <button onClick={subBtn}>Decrement</button>
    <button onClick={addByValue}>Add by Value</button>

    </div>
  )
}

export default Home