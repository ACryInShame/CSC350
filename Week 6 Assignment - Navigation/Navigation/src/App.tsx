// Louis J D'Agusto
// April 21st 2026
// Week 6 Assignment - Navigation
import NavBar from './components/NavBar'
import Routing from './components/Routes';
import Header from './components/Header';
import './App.css'

export default function App() 
{
  return(
    <div className='d-flex flex-column min-vh-100'>
      <div>
        <div className='bg-dark py-3 shadow'>
          <Header text="Epic's Unreal Engine"/>
        </div>
        <NavBar/>
      </div>
      <div className='Pages text-primary flex-grow-1'>
        <Routing/>
      </div>
    </div>
  )
}

