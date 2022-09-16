import React from 'react'
import MaterialUiDate from '../MaterialUiDate/MaterialUiDate'
function TokenTge({vestingLock,change,blur,date_Time}) {
  return (
    <>
        {
            vestingLock ?(
             <MaterialUiDate change={change} blur={blur} date_Time={date_Time}/>   

            ):<></>
        }
    </>
  )
}

export default TokenTge