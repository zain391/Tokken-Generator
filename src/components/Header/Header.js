import React,{ useContext } from 'react'
import NoteContext from '../../context/Notes/notecontext'

const Header = () => {
    const a=useContext(NoteContext)
    // const [stateName,setstateName]=useState(a);
    // useEffect(() => {
    //   console.log(stateName);
    //   console.log(a);
    // }, [])
    
    // console.log(a.name);
  return (
    <div> {`write by ${a.name}`}</div>
  )
}

export default Header