import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";


const useLocalStorage = <T,>(key: string, defaultValue: T ): [T, Dispatch<SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        let currentValue;
        try{
            const storedValue = localStorage.getItem(key);
            currentValue = storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch(e){
            console.log("an error occurred while retrieving theme", e);
            currentValue = defaultValue;
        }
        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage