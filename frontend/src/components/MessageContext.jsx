import { createContext } from "react"

export const messgeContext=createContext()

export const MessageProvider = ({children}) => {
  const message = "Hello World";
  
  return (
    <div>
      <messgeContext.Provider value={message}>
        {children}
      </messgeContext.Provider>
      
    </div>
  )
}

export default messgeContext
