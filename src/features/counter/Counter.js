import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice"

const Counter = () => {

    const counter = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch();

    return (
        <>
            <button className='button' aria-label='Increment Value' onClick={() => dispatch(increment())}>
                +
            </button>

            <span className='value' >Counter: {counter}</span>

            <button className='button' aria-label='Decrement Value' onClick={()=>dispatch(decrement())}>
                -
            </button>

            <button className='button' onClick={() => dispatch(incrementByAmount(10))}>
                Increment by 10
            </button>
        </>
    )
}

export default Counter