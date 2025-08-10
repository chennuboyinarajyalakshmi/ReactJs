import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slice/counter";

function CounterButton() {

    const dispatch=useDispatch()
    function handleClick(){
        dispatch(handleIncreaseCountAction({
            id:1,
            name:"Rajyalakshmi"
        }))
    }
  return (
    <div>
      <button
      onClick={handleClick}
      style={{backgroundColor:"black",color:"white",fontWeight:"bold"}}
      >Increase Count</button>
    </div>
  )
}

export default CounterButton;