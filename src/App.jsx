
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByTwo } from './store/slices/counter/CounterSlice'

function App() {
  
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      
      <div className="card">
        <p>count is {counter}</p>
        <button onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={()=>dispatch(incrementByTwo(2))}>
          Increment by 2
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
