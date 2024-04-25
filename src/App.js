import Home from './routes/home/home.components';
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import SingIn from './routes/sign-in/sign-in.component';
const Shop=()=>{
  return(
    <h1>Hello From Shop component</h1>
  )
}


const App = () => {
    return(
      <Routes>
        <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />  
            <Route path='sing-in' element={<SingIn />} />  

        </Route>    
      </Routes>);
}

export default App;