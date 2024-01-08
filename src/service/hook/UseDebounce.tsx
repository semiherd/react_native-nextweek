import { useEffect, useRef } from "react";
import {InputChangeEvent} from '../../type/type.hook'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

const useDebounce = (callback:(text:string) => void, delay:number) => {

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const debouncedCallback = (text: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(text);
    }, delay);
  };

  return debouncedCallback;
}

export { useDebounce }