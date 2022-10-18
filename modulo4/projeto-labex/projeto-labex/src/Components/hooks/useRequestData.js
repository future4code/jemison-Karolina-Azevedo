import { useEffect, useState } from "react"
import axios from "axios"


export function useRequestData(url) {

  const[data,setData]= useState(undefined)

    const [isLoading, setIsLoading] = useState (false)
  
    const [error, setError]=useState("")
  
    useEffect(() => {
      setIsLoading(true)
      axios.get(url, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((response)=>{
      setIsLoading(false) 
      setData(response.data) 
    }).catch((error)=>{
      setIsLoading(false) 
      console.log(error)
      setError(error) 
    })},[url])
    
    return [data,isLoading,error] 
  
    
  }