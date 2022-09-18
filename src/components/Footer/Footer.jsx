import React,{useState} from 'react'

export const Footer = () => {
  const [date, setdate]=useState(new Date().getFullYear())
  return (
    <>
        <div className="bg-black w-full pt-10 text-white text-center p-3">
        Copyright © Token Generator &nbsp; {date} &nbsp; Zain Qamer 
      </div>
    </>
  )
}
