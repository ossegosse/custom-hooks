
import Counter from './components/Counter'
import Posts from './components/Posts'
import './App.css'

function App() {
 

  return (
    <>
      <Counter initialCount={0} minValue={0} maxValue={20} step={5}/>
      <Counter initialCount={5} minValue={5} maxValue={50} step={10}/>
      <Counter initialCount={100} minValue={100} maxValue={200} step={20}/>
      
      <Posts />
      
    </>
  )
}

export default App
