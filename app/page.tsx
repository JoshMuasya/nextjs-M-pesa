'use client'

import React, {useState} from 'react'

const Page = () => {
  const [number, setNumber] = useState()
  const [amount, setAmount] = useState()

  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [buttonText, setButtonText] = useState('Pay')

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization", "Bearer ZplFSkuBBYUXU9tQy8AQi0ubF7fx");

  const payHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

      fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
      method: "POST",
      headers,
      body: JSON.stringify({
        "BusinessShortCode": 174379,
        "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMDIwMTk0NDM4",
        "Timestamp": "20231020194438",
        "TransactionType": "CustomerPayBillOnline",
        "Amount": 1,
        "PartyA": 254708374149,
        "PartyB": 174379,
        "PhoneNumber": 254798040353,
        "CallBackURL": "https://mydomain.com/path",
        "AccountReference": "CompanyXLTD",
        "TransactionDesc": "Payment of X"
      })
    })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      <div className="artboard artboard-horizontal phone-1 flex flex-col justify-center align-middle items-center">
        {/* Title */}
        <div className='pb-3'>
          LIPA NA M-PESA
        </div>

        {/* form */}
        <form 
          onSubmit={payHandler}
          className='flex flex-col align-middle items-center justify-center'
        >
          <input 
            type="text" 
            placeholder="Enter your Phonenumber" 
            className="input w-full max-w-xs mb-3" 
          />

          <input 
            type="number" 
            placeholder="How much are you Paying?" 
            className="input w-full max-w-xs mb-4" 
          />

          <button 
            className="btn btn-md sm:btn-lg text-lg"
            type='submit'
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page