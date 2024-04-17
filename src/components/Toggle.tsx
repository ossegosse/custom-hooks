import { useToggle } from "../hooks/useToggle";

type ToggleProps = {
  positive: string;
  negative: string;
};

const Toggle = ({ positive, negative }: ToggleProps) => {
  const { value, toggleValue } = useToggle(true);

  return (
    <>
      <button onClick={() => toggleValue()}>Toggle</button>
      {value ? <h1>{positive}</h1> : <h1>{negative}</h1>}
    </>
  );
};

export default Toggle