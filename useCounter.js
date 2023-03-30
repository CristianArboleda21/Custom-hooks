import { useState } from "react"


export const useCounter = ( initialValue = 1 ) => {

    const [counter, setCounter] = useState(initialValue);

    const handleAdd = (value = 1) => {
        setCounter( (current) => current + value );
    }

    const handleRest = ( value = 1) => {
        setCounter( (current) => current - value );
    }

    const handleReset = () => {
        setCounter( initialValue );
    }

    const handleSearch = ( {target} ) => {
        setCounter(target.value);
    }

   
    return {
        counter,
        handleAdd,
        handleRest,
        handleReset,
        handleSearch
    }
} 