import { useEffect, useState } from 'react'
import axios from 'axios';

const FETCH_URL = 'http://localhost:3000/reental/property';
const FORMDATA_CONFIG = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}
export const usePropertyHook = () => {
    const [proper, setProperties] = useState({isLoading:true, properties: [], hasError: false});

    const fetchProperties = async () => {
        setProperties({isLoading:true, properties: [], hasError: false});
        axios.get(FETCH_URL)
            .then(response => {
                setProperties({isLoading:false, properties: response.data, hasError: false})
            })
            .catch(error => {
                console.error(error);
                setProperties({isLoading:false, properties: [], hasError: true})
            })
    }

    const reloadProperties = () =>{
        fetchProperties();
    }

    const addProperty = (property) => {
        axios.post(FETCH_URL, property, FORMDATA_CONFIG)
            .then((response) => {
                console.log(response)
            }).catch((error) => {
                console.error(error)
            }).finally(()=>{
                reloadProperties();
            })
        
        // reload props
    }

    useEffect(() => {
        setProperties({isLoading:true, properties: [], hasError: false});
        fetchProperties();
    }, [])
    

    return (
        {
            properties: proper.properties,
            isLoading: proper.isLoading,
            addProperty: addProperty,
            hasError: proper.hasError
        }
    )
}
