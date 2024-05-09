import { useState } from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'lucide-react'
import Owner from './owner';
import AddHome from './addHome';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Owner/>}></Route>
            <Route path='AddHome/' element={<AddHome/>}></Route>
          </Routes>
        </BrowserRouter>  
    </div>
      
    </>
  )
}

export default App
