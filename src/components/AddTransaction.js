import React from 'react'
import { useState ,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        const transId = uuidv4()
        const newTransaction = {
            id: transId,
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
    
    return (
        <>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
            
        </>
    )
}

export default AddTransaction
