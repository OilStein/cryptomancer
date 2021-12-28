import Head from "next/head"

const Status = ({ping}) => {
  return (
    <div>
      <p>Status {ping.gecko_says}</p>
    </div>
  )
  
}



export default Status