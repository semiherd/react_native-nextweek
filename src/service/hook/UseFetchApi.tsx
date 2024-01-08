import { useEffect, useState } from "react";

function useFetchApi<T>(){

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getApi<T,D extends object>(path:string,token?:string|null,data?:D):Promise<T|null>{
    try{

      setIsLoading(true);     
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token ?token :''}`,  // soll credentials sein 
        },
      });
      
      const json = await response.json();
      
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        //localStorage.setItem("token", json.token) USE LOCAL STORAGE ON WEB APP
        //setResponse((prevData) => [...prevData, json])
        return json as T
      }
      return null
    }catch(e){
      return null
    }
  }

  async function postApi<T,P extends object>(path:string,token?:string|null,data?:P|null){
    try{

      setIsLoading(true);
      
      const response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"credentials":"include",
          //"auth-token": accessToken
          Authorization: `Bearer ${token ?token :''}`,   // es soll credentials sein 
        },
        //body: JSON.stringify(body)
      })
      
      const json = await response.json();
      
      if (response.ok) {
        return json as T
      }
      else {
        setError(json.error);
        return null
      }
    }catch(e){
      return null
    }
}
    
  return { getApi, postApi, isLoading, error };
}

export {
  useFetchApi
}