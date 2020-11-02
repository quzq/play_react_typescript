import React from 'react'
import axios from 'axios'

interface Props {
}
const AxiosTest: React.FC<Props> = ({}) => {
  const onClick=async ()=>{
    const res = await axios.get('/api/auth/login')
  }
  return (
    <div>
      <button onClick={(e) => onClick()} className="btn is-primary">
        go
      </button>
    </div>
  );
}
export default AxiosTest