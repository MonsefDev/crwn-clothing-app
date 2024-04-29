import Home from './routes/home/home.components';
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component';
import CheckOut from './routes/checkout/checkout.component';
import Shop from "./components/shop/shop.component";

const App = () => {
    return(
      <Routes>
        <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />  
            <Route path='checkout' element={<CheckOut />} />  
            <Route path='auth' element={<Authentication />} />  

        </Route>    
      </Routes>);
}

export default App;
