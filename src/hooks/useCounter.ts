import { useState } from "react";



export const useCounter = (initialCount: number, minValue: number, maxValue: number, step: number) => {
    const [count, setCount] = useState(initialCount);
    const [result, setResult] = useState("")
    
    const increment = () => {
        if (count < maxValue) {
        setCount(prevCount => Math.min(prevCount + 1, maxValue));
        }
    };

    const decrement = () => {
        if (count > minValue) {
            setCount(prevCount => Math.max(prevCount - 1, minValue));
            }
    };

    const reset = () => {
        setCount(initialCount)
    }

    const setMinValue = () => {
        setCount(minValue)
    }

    const setMaxValue = () => {
        setCount(maxValue)
    }

    const isEven = (setCount: number) => {
        return setCount % 2 === 0 ? "even" : "odd"
    }

    const stepAdd = () => {
        setCount(prevCount => Math.min(prevCount + step, maxValue));
    }
    const stepSubtract = () => {
        setCount(prevCount => Math.max(prevCount - step, minValue));
    }

    return { count, increment, decrement, reset, setMinValue, setMaxValue, isEven, result, setResult, stepAdd, stepSubtract};
};

