import { useState,useEffect } from 'react';
import axios,{ AxiosError } from 'axios';

export function useOutData(parHref: string) {

    const [outputData,setOutputData] = useState([]);

    async function fetchData(parHref: string){
        try {
          const response = await axios.get(parHref);
      
          setOutputData(response.data);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchData(parHref);
    },[])

    return { outputData,fetchData };
}