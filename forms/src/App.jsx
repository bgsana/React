import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div className='App'>
      <h1>Form em React</h1>
      <MyForm userName="Juana" userEmail="teste@gmail.com" />
    </div>
  )
}

export default App
