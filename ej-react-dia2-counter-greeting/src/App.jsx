import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/Greeting'

function App() {

  return (
    <>
      <div>  
        <h2>Counter</h2>
        <Counter initialValue = {0} number = {1}/>
        <Counter initialValue = {5} number = {5}/>
        <h2>Greeting</h2>
        <Greeting name = {"Euralio"} newName = {"Alfonsina"}/>
      </div>
    </>
  )
}

export default App
