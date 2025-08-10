import { useSelector } from "react-redux";

function CounterValue() {

    const CountValue = useSelector((state) => state.CountValue);

  return (
    <div>
        <p> counter value = {CountValue}</p>
      
    </div>
  )
}
export default CounterValue;