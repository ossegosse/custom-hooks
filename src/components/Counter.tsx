import { useCounter } from "../hooks/useCounter";

type Counterprops = {
  initialCount: number,
  minValue: number,
  maxValue: number,
  step: number
}

const Counter = ({initialCount, minValue, maxValue, step}: Counterprops) => {
    const counter = useCounter(initialCount, minValue, maxValue, step)

 const handleIsEvenClick = () => {
  const result = counter.isEven(counter.count);
  counter.setResult(result)
}

    return (
        <>
        <h1>Custom Hooks Demo</h1>
      <p> {counter.count}</p>
      <button onClick={counter.increment}> +1 </button>
      <button onClick={counter.decrement}> -1 </button>
      <button onClick={counter.reset}>reset</button>
      <button onClick={counter.setMinValue}>min value</button>
      <button onClick={counter.setMaxValue}>max value</button>
      <button onClick={handleIsEvenClick}>even / odd </button>
      <button onClick={counter.stepAdd}>step +</button>
      <button onClick={counter.stepSubtract}>step -</button>

      <p>{counter.result} </p>
        </>
    )
}

export default Counter