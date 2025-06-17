import { useContext } from "react"
import messgeContext from "./MessageContext"


const DisplayContext = () => {
  const message = useContext(messgeContext)

  return (
    <div>
      <h3>Hello, this is your message: {message}</h3>
      
    </div>
  )
}

export default DisplayContext
