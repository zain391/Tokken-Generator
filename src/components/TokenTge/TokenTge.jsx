import React from 'react'
import MaterialUiDate from '../MaterialUiDate/MaterialUiDate'
function TokenTge({vestingLock,date_Time,setField}) {
  return (
    <>
    {
            vestingLock ?(
             <MaterialUiDate setField={setField} date_Time={date_Time}/>   

            ):<></>
        } 

        
    </>
  )
}

export default TokenTge

 